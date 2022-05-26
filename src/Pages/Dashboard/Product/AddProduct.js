import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const AddProduct = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const imageStorageKey = '82bd68c688b4f0ac0676845ecacab923';


    const onSubmit = async data => {
        // console.log('data', data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(Response => Response.json())
            .then(result => {
                // console.log('imagedb',result);
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        email: user.email,
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        description: data.description,
                        image: img
                    }
                    //send to databse
                    fetch('https://secret-fjord-61926.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(product)

                    })
                        .then(response => response.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product Data Added Successfully');
                                reset();
                            } else {
                                toast.error('Fail to Add Product Data');
                            }
                        })
                }
                console.log('imgbb', result);
            })

    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-28">
                    <div className="card-body">
                        <label className="text-center">
                            <span className="label-text text-3xl text-bold">Add Product</span>
                        </label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>

                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Price</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("price", {
                                        required: {
                                            value: true,
                                            message: 'Price is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                                </label>
                            </div>

                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'quantity is Required'
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Minimum 100'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}

                                </label>

                            </div>
                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input
                                    type="file"
                                    placeholder="Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                                </label>
                            </div>

                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>


                                <textarea
                                    type="text"
                                    className="textarea textarea-bordered w-full max-w-xs"
                                    placeholder="Description"
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: 'Description is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                                </label>
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white" type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;