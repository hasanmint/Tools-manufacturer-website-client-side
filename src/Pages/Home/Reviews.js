import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('https://secret-fjord-61926.herokuapp.com/review', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(Response => Response.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            <section>
                <div className='my-28'>
                    <h3 className='text-secondary text-4xl font-bold text-center '>Our Review :{reviews.length}</h3>
                </div>


                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12'>


                    {
                        reviews.map((review, index) =>
                            <Review
                                key={review._id}
                                review={review}
                                index={index}
                                refetch={refetch}
                            ></Review>)
                    }

                </div>
            </section>

        </>


    );
};

export default Reviews;