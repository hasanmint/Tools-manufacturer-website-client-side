import React from 'react';

const ProductTable = ({ product, index, refetch, setDeleteProduct }) => {
    const { image, name, quantity, price } = product;

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div class="flex items-center space-x-3">
                        <div class="avatar">
                            <div class="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>

                <th>
                    <label onClick={() => setDeleteProduct(product)} for="delete-confirm-modal" class="btn btn-error">Delete</label>

                </th>
            </tr>
        </>
    );
};

export default ProductTable;