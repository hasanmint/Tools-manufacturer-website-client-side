import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3gWVI4877oCfKKv3RO8dYbAjtsLDOUm8qPh4ZJOWuteOQp34BLPk135Sq7TGUuqBn9gofbHvrP6d2HBQin1Toh00QRBCkcVL');

const Payment = () => {
    const { id } = useParams();
    const url = `https://secret-fjord-61926.herokuapp.com/ordering/${id}`;
    const { data: order, isLoading } = useQuery(['ordering', id], () => fetch(url, {
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
            <div className="my-28">
                <div>

                    <h2 className="text-primary">Payment: {id}</h2>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                    <div class="card w-96 bg-base-100 shadow-xl">

                        <div class="card-body">
                            <h2 class="card-title">
                                Hello, {order.userName}
                                <div class="badge badge-secondary">NEW</div>
                            </h2>
                            <p>
                                <p class="py-6">Your Order for  {order.order}.</p>
                                <p class="py-6">Your Order Quantity {order.quantity}</p>
                                <p class="py-6">Please Pay for ${order.price}</p>
                            </p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">

                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;