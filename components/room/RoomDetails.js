import Image from 'next/image';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineHome } from 'react-icons/hi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Carousel } from 'react-bootstrap';
import RoomFacilities from './RoomFacilities';
import {
  checkBooking,
  clearErrors,
  getBookedDates,
} from '../../redux/actions/bookingActions';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CHECK_BOOKING_RESET } from '../../redux/constants/bookingConstants';

const RoomDetails = ({ title }) => {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [daysOfStay, setDaysOfStay] = useState();
  const [paymentLoading, setPaymentLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const { dates } = useSelector((state) => state.bookedDates);
  const { user } = useSelector((state) => state.loadedUser);
  const { room, error } = useSelector((state) => state.roomDetails);
  const { available, loading: bookingLoading } = useSelector(
    (state) => state.checkBooking
  );

  const excludedDates = [];
  dates.forEach((date) => {
    excludedDates.push(new Date(date));
  });

  const onChange = (dates) => {
    const [checkInDate, checkOutDate] = dates;

    setCheckInDate(checkInDate);
    setCheckOutDate(checkOutDate);

    if (checkInDate && checkOutDate) {
      // Calclate days of stay

      const days = Math.floor(
        (new Date(checkOutDate) - new Date(checkInDate)) / 86400000 +
          1
      );

      setDaysOfStay(days);

      dispatch(
        checkBooking(
          id,
          checkInDate.toISOString(),
          checkOutDate.toISOString()
        )
      );
    }
  };

  const { id } = router.query;

  const newBookingHandler = async () => {
    const bookingData = {
      room: router.query.id,
      checkInDate,
      checkOutDate,
      daysOfStay,
      amountPaid: 90,
      paymentInfo: {
        id: 'STRIPE_PAYMENT_ID',
        status: 'STRIPE_PAYMENT_STATUS',
      },
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/bookings',
        bookingData,
        config
      );

      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    dispatch(getBookedDates(id));

    toast.error(error);
    dispatch(clearErrors());

    return () => {
      dispatch({ type: CHECK_BOOKING_RESET });
    };
  }, [dispatch, id]);

  return (
    <div
      style={{
        width: '100%',
        // height: '800px',
        position: 'absolute',
        top: '0%',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
      }}
    >
      <Carousel
        hover="pause"
        fade
        indicators={false}
        nextLabel=""
        prevLabel=""
      >
        {room.images &&
          room.images.map((image) => (
            <Carousel.Item key={image.public_id}>
              <div
                style={{
                  position: 'relative',
                  top: '0%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  height: '700px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  className="d-block m-auto"
                  src={image.url}
                  alt={room.name}
                  layout="fill"
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0%',
                    left: '0%',
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(360deg, rgba(40,40,40,1) 0%, rgba(255,255,255,0) 100%)',
                    padding: '50px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      height: '100%',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ flexDirection: 'column' }}>
                      <div>
                        <h6
                          style={{
                            fontSize: '32px',
                            letterSpacing: '2px',
                            fontWeight: 'lighter',
                          }}
                        >
                          {room.name.slice(0, 20)}
                        </h6>
                      </div>

                      <div
                        style={{
                          borderRadius: '15px',
                          border: '1px solid white',
                          width: '180px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '8px',
                        }}
                      >
                        <span
                          style={{
                            letterSpacing: '2px',
                            fontWeight: 'lighter',
                          }}
                        >
                          ${room.pricePerNight}/night
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        backgroundColor: '#282828',
                        padding: '15px',
                        width: '300px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: '15px',
                      }}
                    >
                      <div>
                        <HiOutlineHome size={25} />
                      </div>
                      <button
                        className="btn"
                        style={{
                          backgroundColor: '#EEA86C',
                          color: 'white',
                          width: '200px',
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>

      <div style={{ width: '90%', margin: '10px auto' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            alt="Bedroom icon"
            src="/images/Locate.svg"
            height={20}
            width={20}
          />
          <span
            style={{
              marginLeft: '10px',
              letterSpacing: '2px',
              fontWeight: 'lighter',
            }}
          >
            {room.address}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '10px',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              alt="Bedroom icon"
              src="/images/Bedroom.svg"
              height={20}
              width={20}
            />
            <span
              style={{
                marginLeft: '10px',
                letterSpacing: '2px',
                fontWeight: 'lighter',
                marginTop: '5px',
              }}
            >
              {room.numOfBeds}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '20px',
            }}
          >
            <Image
              alt="Bedroom icon"
              src="/images/Star.svg"
              height={20}
              width={20}
            />
            <span
              style={{
                marginLeft: '10px',
                letterSpacing: '2px',
                fontWeight: 'lighter',
              }}
            >
              {room.numOfReviews}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '90%',
          margin: '100px auto 0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3 style={{ fontWeight: 'lighter', letterSpacing: '3px' }}>
            Description
          </h3>
          <div
            style={{
              width: '500px',
              fontWeight: 'lighter',
              lineHeight: '2',
              letterSpacing: '2px',
              marginTop: '30px',
            }}
          >
            {room.description}
          </div>
          <h3
            style={{
              marginTop: '50px',
              fontWeight: 'lighter',
              letterSpacing: '3px',
            }}
          >
            Facilities
          </h3>
          <RoomFacilities room={room} />
        </div>
        <div className="py-4">
          <p
            style={{
              fontWeight: 'lighter',
              letterSpacing: '3px',
            }}
          >
            ${room.pricePerNight} / night
          </p>

          <hr />

          <p
            className="mt-5 mb-3"
            style={{
              fontWeight: 'lighter',
              letterSpacing: '3px',
            }}
          >
            Pick Check In & Check Out Date
          </p>

          <DatePicker
            className="w-100"
            selected={checkInDate}
            onChange={onChange}
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            excludeDates={excludedDates}
            selectsRange
            inline
          />

          {available === true && (
            <div className="alert alert-success my-3 font-weight-bold">
              Room is available. Book now.
            </div>
          )}

          {available === false && (
            <div className="alert alert-danger my-3 font-weight-bold">
              Room not available. Try different dates.
            </div>
          )}

          {available && !user && (
            <div className="alert alert-danger my-3 font-weight-bold">
              Login to book room.
            </div>
          )}

          {available && user && (
            <button
              className="btn btn-block py-2 booking-btn"
              style={{ backgroundColor: '#eea86c', color: 'white' }}
              onClick={newBookingHandler}
              disabled={
                bookingLoading || paymentLoading ? true : false
              }
            >
              Pay - ${daysOfStay * room.pricePerNight}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
