import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ReviewTable from './Review/ReviewTable';

const MyReview = () => {
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
            <div>
                My Review {reviews.length}
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Avada</th>
                            <th>User Name</th>
                            <th>Rating</th>
                            <th>Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, index) =>
                                <ReviewTable
                                    key={review._id}
                                    review={review}
                                    index={index}
                                    refetch={refetch}
                                ></ReviewTable>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyReview;