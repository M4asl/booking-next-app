import Image from 'next/image';
import React from 'react';

const RoomItem = () => {
  return (
    <div
      style={{
        width: '240px',
        height: '285px',
        border: '2px solid #006666',
        borderRadius: '10px',
        boxShadow: '3px 3px 10px rgba(0,102,102,50)',
        padding: '10px 0px',
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
          src="/images/room1.jpg"
          width={240}
          height={200}
        />
      </div>
      <div
        style={{
          width: '195px',
          height: '95px',
          // border: '1px solid white',
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
          Minimalism Room
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
              $12.50/night
            </span>
          </div>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 'lighter',
              letterSpacing: '1px',
            }}
          >
            Phu Nhuan
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
              5.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
