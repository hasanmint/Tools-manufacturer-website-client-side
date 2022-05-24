import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const OrderDetails = ({ order, setOrder }) => {
    const { _id, name, price, quantity, image } = order;
    const [user, loading, error] = useAuthState(auth);


    const handleOrder = (event) => {
        event.preventDefault();
        console.log(_id, name, price, quantity);



        const ordering = {
            orderId: _id,
            order: name,
            price: price,
            quantity: quantity,
            userEmail: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,
        }

        fetch('http://localhost:5000/ordering', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ordering)
        })
            .then(Response => Response.json())
            .then(data => {

                console.log(data);
                if (!data.success) {
                    toast.success(`Successully ${name} is ordering`)
                } else {
                    toast.error(`You already have an Added`)
                }

                setOrder(null);
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="flex justify-center">
                        <div className="avatar">
                            <div className="w-22 h-20 rounded">
                                <img src={image} />
                            </div>
                        </div>
                    </div>
                    <h3 className="font-bold  text-secondary text-center">Order For: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" name='price' disabled value={price} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='quantity' disabled value={quantity} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='name' disabled value={user?.displayName} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email} name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;