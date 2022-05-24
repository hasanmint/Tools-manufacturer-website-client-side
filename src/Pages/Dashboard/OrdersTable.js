import React from 'react';

const OrdersTable = ({ singleorder, index }) => {
    const { image, order, price, quantity } = singleorder;
    return (

        <>
            <tr>
                <th>{index + 1}</th>
                <td>{order}</td>
                <td>${price}</td>
                <td>{quantity} Peces</td>
            </tr>


        </>



    );
};

export default OrdersTable;