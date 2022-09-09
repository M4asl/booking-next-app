import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineUserGroup, HiOutlineWifi } from 'react-icons/hi';
import { IoBedOutline, IoSnowOutline } from 'react-icons/io5';
import {
  MdOutlineBreakfastDining,
  MdOutlinePets,
  MdOutlineCleaningServices,
} from 'react-icons/md';

const RoomFacilities = ({ room }) => {
  const iconStyle = { color: '#EEA86C', size: '20px' };
  const roomFacilitiesContainerStyle = {
    display: 'flex',
    maxWidth: '500px',
    flexWrap: 'wrap',
  };
  const roomFacilitiesStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 10px 5px 0px',
    fontWeight: '300',
    letterSpacing: '2px',
    backgroundColor: '#ffffff',
    width: 'fit-content',
    padding: '10px',
    borderRadius: '15px',
    color: '#282828',
  };
  return (
    <div style={roomFacilitiesContainerStyle}>
      <div style={roomFacilitiesStyle}>
        <IconContext.Provider value={iconStyle}>
          <HiOutlineUserGroup />
        </IconContext.Provider>
        <span className="ml-3">{room.guestCapacity} Guests</span>
      </div>

      <div style={roomFacilitiesStyle}>
        <IconContext.Provider value={iconStyle}>
          <IoBedOutline />
        </IconContext.Provider>
        <span className="ml-3">{room.numOfBeds} Beds</span>
      </div>

      {room.breakfast && (
        <div style={roomFacilitiesStyle}>
          <IconContext.Provider value={iconStyle}>
            <MdOutlineBreakfastDining />
          </IconContext.Provider>
          <span className="ml-3">Breakfast</span>
        </div>
      )}

      {room.internet && (
        <div style={roomFacilitiesStyle}>
          <IconContext.Provider value={iconStyle}>
            <HiOutlineWifi />
          </IconContext.Provider>
          <span className="ml-3">Internet</span>
        </div>
      )}

      {room.airConditioned && (
        <div style={roomFacilitiesStyle}>
          <IconContext.Provider value={iconStyle}>
            <IoSnowOutline />
          </IconContext.Provider>
          <span className="ml-3">Air Conditioned</span>
        </div>
      )}
      {room.petsAllowed && (
        <div style={roomFacilitiesStyle}>
          <IconContext.Provider value={iconStyle}>
            <MdOutlinePets />
          </IconContext.Provider>
          <span className="ml-3">Pets Allowed</span>
        </div>
      )}
      {room.roomCleaning && (
        <div style={roomFacilitiesStyle}>
          <IconContext.Provider value={iconStyle}>
            <MdOutlineCleaningServices />
          </IconContext.Provider>
          <span className="ml-3">Room Cleaning</span>
        </div>
      )}
    </div>
  );
};

export default RoomFacilities;
