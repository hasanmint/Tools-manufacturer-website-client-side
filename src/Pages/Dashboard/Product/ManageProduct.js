import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductTable from './ProductTable';

const ManageProduct = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/product', {
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
                Manage Product : {products.length}
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Avada</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <ProductTable
                                    key={product._id}
                                    product={product}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteProduct={setDeleteProduct}
                                ></ProductTable>)
                        }

                    </tbody>
                </table>
            </div>

            {deleteProduct && <DeleteConfirmModal
                deleteProduct={deleteProduct}
                setDeleteProduct={setDeleteProduct}
                refetch={refetch}
            ></DeleteConfirmModal>}
        </>
    );
};

export default ManageProduct;