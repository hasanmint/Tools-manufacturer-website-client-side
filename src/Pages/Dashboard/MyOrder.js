import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrdersTable from './OrdersTable';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/ordering?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(response => {
                    console.log('res', response);
                    if (response.status === 401 || response.status === 403) {

                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login');
                    }
                    return response.json();
                })
                .then(data => {
                    setOrders(data);
                });
        }
    }, [user])
    return (
        <>
            <div>
                My MyOrders:{orders.length}
            </div>
            <div >
                <div className="overflow-x-auto">
                    <table className="table w-full table-auto table-fixed">

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