import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
    const { name, email } = deleteProduct;
    const handleDelete = (email) => {
        fetch(`https://secret-fjord-61926.herokuapp.com/product/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(Response => Response.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is deleted`);
                    setDeleteProduct(null);
                    refetch();
                } else {
                    toast.danger(`Doctor: ${name} is not deleted`);

                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Do you want to Delete ?</h3>
                    <p class="py-4 text-primary"> <b>Product Name</b>: {name} </p>
                    <div class="modal-action ">
                        <button onClick={() => handleDelete(email)} class="btn btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn">Cancel!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;
