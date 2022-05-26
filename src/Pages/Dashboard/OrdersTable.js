import React from 'react';
import { Link } from 'react-router-dom';

const OrdersTable = ({ singleorder, index }) => {
    const { image, order, price, quantity } = singleorder;
    return (

        <>
            <tr>
                <th>{index + 1}</th>
                <td>{order}</td>
                <td>${price}</td>
                <td>{quantity} Peces</td>
                <td>
                    {(singleorder.price && !singleorder.paid) && <Link to={`/dashboard/payment/${singleorder._id}`}><button className='btn btn-success'>Pay</button></Link>}
                    {(singleorder.price && singleorder.paid) && <span className='text-success'>Paid</span>}
                </td>
            </tr>


        </>



    );
};

export default OrdersTable;