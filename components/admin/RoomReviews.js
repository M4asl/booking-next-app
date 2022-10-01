import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { MDBDataTable } from 'mdbreact';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import {
  getRoomReviews,
  clearErrors,
} from '../../redux/actions/roomActions';

const RoomReviews = () => {
  const [roomId, setRoomId] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, error, reviews } = useSelector(
    (state) => state.roomReviews
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (roomId !== '') {
      dispatch(getRoomReviews(roomId));
    }
  }, [dispatch, error, roomId]);

  const setReviews = () => {
    const data = {
      columns: [
        {
          label: 'Review ID',
          field: 'id',
          sort: 'asc',
        },
        {
          label: 'Rating',
          field: 'rating',
          sort: 'asc',
        },
        {
          label: 'Comment',
          field: 'comment',
          sort: 'asc',
        },
        {
          label: 'User',
          field: 'user',
          sort: 'asc',
        },
        {
          label: 'Actions',
          field: 'actions',
          sort: 'asc',
        },
      ],
      rows: [],
    };

    reviews &&
      reviews.forEach((review) => {
        data.rows.push({
          id: review._id,
          rating: review.rating,
          comment: review.comment,
          user: review.name,
          actions: (
            <button className="btn btn-danger mx-2">
              <i className="fa fa-trash"></i>
            </button>
          ),
        });
      });

    return data;
  };

  return (
    <div className="container container-fluid">
      <div className="row justify-content-center mt-5">
        <div className="col-5">
          <form>
            <div className="form-group">
              <label htmlFor="roomId_field">Enter Room ID</label>
              <input
                type="email"
                id="roomId_field"
                className="form-control"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      {reviews && reviews.length > 0 ? (
        <MDBDataTable
          data={setReviews()}
          style={{ color: 'white' }}
          className="px-3"
          bordered
          striped
        />
      ) : (
        <div className="alert alert-danger mt-5 text-center">
          No Reviews
        </div>
      )}
    </div>
  );
};

export default RoomReviews;