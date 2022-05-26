import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const AddReview = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const reviewImgStorageKey = '82bd68c688b4f0ac0676845ecacab923';


    const onSubmit = async data => {
        console.log('data', data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${reviewImgStorageKey
            }`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(Response => Response.json())
            .then(result => {
                // console.log('imagedb', result);
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: user.displayName,
                        rating: data.rating,
                        description: data.description,
                        image: img
                    }
                    //send to databse
                    fetch('https://secret-fjord-61926.herokuapp.com/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(review)

                    })
                        .then(response => response.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Review Data Added Successfully');
                                reset();
                            } else {
                                toast.error('Fail to Add Review Data');
                            }
                        })
                } console.log('imgbb', result);
            })

    };




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-28">
                    <div className="card-body">
                        <label className="text-center">
                            <span className="label-text text-3xl text-bold">Add Review</span>
                        </label>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Rating"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: 'Rating is Required'
                                        },

                                        maxLength: {
                                            value: 2,
                                            message: 'Maximum 5',
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}

                                    {errors.rating?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}

                                </label>

                            </div>


                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Photo</span>
                                </label>
                                <input
                                    type="file"
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
                                    <span className="label-text">Review Description</span>
                                </label>


                                <textarea
                                    type="text"
                                    class="textarea textarea-bordered"
                                    placeholder="Description"
                                    className="textarea textarea-bordered w-full max-w-xs"
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

export default AddReview;