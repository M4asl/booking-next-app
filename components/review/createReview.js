import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiFillStar } from 'react-icons/ai';

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import {
  newReview,
  clearErrors,
} from '../../redux/actions/roomActions';
import { NEW_REVIEW_RESET } from '../../redux/constants/roomConstants';

const NewReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, success } = useSelector((state) => state.newReview);

  const { id } = router.query;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success('Review is posted.');
      dispatch({ type: NEW_REVIEW_RESET });

      router.push(`/room/${id}`);
    }
  }, [dispatch, success, error, id]);

  const submitHandler = () => {
    const reviewData = {
      rating,
      comment,
      roomId: id,
    };

    dispatch(newReview(reviewData));
  };

  function setUserRatings() {
    console.log('hey');
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
      star.starValue = index + 1;

      ['click', 'mouseover', 'mouseout'].forEach(function (e) {
        star.addEventListener(e, showRatings);
      });
    });

    function showRatings(e) {
      stars.forEach((star, index) => {
        if (e.type === 'click') {
          if (index < this.starValue) {
            star.classList.add('orange');

            setRating(this.starValue);
          } else {
            star.classList.remove('oragne');
          }
        }

        if (e.type === 'mouseover') {
          if (index < this.starValue) {
            star.classList.add('light-orange');
          } else {
            star.classList.remove('light-orange');
          }
        }

        if (e.type === 'mouseout') {
          star.classList.remove('light-orange');
        }
      });
    }
  }

  return (
    <div className="mx-auto" style={{ width: '90%' }}>
      <button
        id="review_btn"
        type="button"
        className="btn btn-primary mt-4 mb-5"
        data-toggle="modal"
        data-target="#ratingModal"
        style={{ backgroundColor: '#eea86c' }}
        onClick={setUserRatings}
      >
        Submit Your Review
      </button>
      <div
        className="modal fade"
        id="ratingModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ratingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="ratingModalLabel"
                style={{ color: 'black' }}
              >
                Submit Review
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="stars">
                <li className="star">
                  <AiFillStar />
                </li>
                <li className="star">
                  <AiFillStar />
                </li>
                <li className="star">
                  <AiFillStar />
                </li>
                <li className="star">
                  <AiFillStar />
                </li>
                <li className="star">
                  <AiFillStar />
                </li>
              </ul>

              <textarea
                name="review"
                id="review"
                className="form-control mt-3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>

              <button
                className="btn btn-primary my-3 float-right review-btn px-4 text-white"
                data-dismiss="modal"
                aria-label="Close"
                style={{ backgroundColor: '#eea86c' }}
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewReview;
