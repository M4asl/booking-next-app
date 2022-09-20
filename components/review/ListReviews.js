import React from 'react';

const ListReviews = ({ reviews }) => {
  return (
    <>
      <div className="mx-auto" style={{ width: '90%' }}>
        <h3
          style={{
            marginTop: '50px',
            fontWeight: 'lighter',
            letterSpacing: '3px',
          }}
        >
          Reviews:
        </h3>
        <hr />

        {reviews &&
          reviews.map((review) => (
            <div
              key={review._id}
              style={{
                backgroundColor: '#006666',
                width: '300px',
                padding: '10px',
                borderRadius: '15px',
              }}
            >
              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(review.rating / 5) * 100}%` }}
                ></div>
              </div>
              <p className="review_user">by {review.name}</p>
              <p
                style={{
                  backgroundColor: 'white',
                  padding: '10px 20px 20px 10px',
                  color: 'black',
                  borderRadius: '15px',
                }}
              >
                {review.comment}
              </p>

              <hr />
            </div>
          ))}
      </div>
    </>
  );
};

export default ListReviews;
