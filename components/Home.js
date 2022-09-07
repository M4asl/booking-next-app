import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import RoomItem from './room/RoomItem';

const Home = () => {
  const { rooms } = useSelector((state) => state.allRooms);
  return (
    <div className="container mt-5 ">
      <Link href="/search">
        <a className="ml-2 back-to-search">
          <i className="fa fa-arrow-left"></i> Back to Search
        </a>
      </Link>
      <div className="row d-flex justify-content-center">
        {rooms && rooms.length === 0 ? (
          <div className="alert alert-danger mt-5 w-100">
            <b>No Rooms.</b>
          </div>
        ) : (
          rooms &&
          rooms.map((room) => <RoomItem key={room._id} room={room} />)
        )}
      </div>
    </div>
  );
};

export default Home;
