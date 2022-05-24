import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrdersTable from './OrdersTable';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/ordering?userEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <>
            <div>
                My MyOrders:{orders.length}
            </div>
            <div >
                <div class="overflow-x-auto">
                    <table class="table w-full table-auto table-fixed">

                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                orders.map((singleorder, index) =>
                                    <OrdersTable
                                        key={singleorder._id}
                                        singleorder={singleorder}
                                        index={index}
                                    ></OrdersTable>

                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyOrder;