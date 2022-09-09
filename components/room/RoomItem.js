import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RoomItem = ({ room }) => {
  return (
    <Link href={`/rooms/${room._id}`}>
      <div
        style={{
          width: '240px',
          height: '285px',
          border: '2px solid #006666',
          borderRadius: '10px',
          boxShadow: '3px 3px 10px rgba(0,102,102,50)',
          padding: '10px 0px',
          margin: '20px',
        }}
      >
        <div
          style={{
            width: '215px',
            height: '150px',
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <Image
            alt="Room"
            src={room.images[0].url}
            width={240}
            height={200}
          />
        </div>
        <div
          style={{
            width: '195px',
            height: '95px',
            margin: '0 auto',
            marginTop: '15px',
          }}
        >
          <h6
            style={{
              fontSize: '16px',
              fontWeight: 'lighter',
              letterSpacing: '2px',
            }}
          >
            {room.name.slice(0, 20)}
          </h6>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                width: 'fit-content',
                border: '2px solid #006666',
                borderRadius: '10px',
                padding: '5px 10px',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 'lighter',
                  letterSpacing: '1px',
                }}
              >
                ${room.pricePerNight}/night
              </span>
            </div>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 'lighter',
                letterSpacing: '1px',
              }}
            >
              {room.address.slice(0, 10)}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <Image
                alt="Bedroom icon"
                src="/images/Bedroom.svg"
                height={16}
                width={16}
              />
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 'lighter',
                  marginLeft: '10px',
                }}
              >
                {room.numOfBeds}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                alt="Bathroom icon"
                src="/images/Bathroom.svg"
                height={16}
                width={16}
              />
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 'lighter',
                  marginLeft: '10px',
                }}
              >
                1
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                alt="Star icon"
                src="/images/Star.svg"
                height={16}
                width={16}
              />
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 'lighter',
                  marginLeft: '10px',
                }}
              >
                {room.numOfReviews}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomItem;
