import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineHome } from 'react-icons/hi';
import RoomFacilities from './RoomFacilities';

const RoomDetails = () => {
  const { room, error } = useSelector((state) => state.roomDetails);
  return (
    <div
      style={{
        backgroundColor: '#006666',
        width: '100%',
        height: '800px',
        position: 'absolute',
        top: '0%',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          height: '700px',
          overflow: 'hidden',
          borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px',
        }}
      >
        <Image
          alt="room image"
          src={room.images[0].url}
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
      <div style={{ width: '90%', margin: '100px auto 0 auto' }}>
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
    </div>
  );
};

export default RoomDetails;
