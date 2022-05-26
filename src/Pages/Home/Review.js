import React from 'react';

const Review = ({ review, index }) => {
    const { name, rating, description, image } = review;
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="avatar flex justify-center mt-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{rating} Star Review</h2>
                    <p>{description}</p>
                    <div >
                        <p><b>By</b> {name}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;