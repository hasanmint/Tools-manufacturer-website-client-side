import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';


const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const profileImgStorageKey = '82bd68c688b4f0ac0676845ecacab923';


    const onSubmit = async data => {
        console.log('data', data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${profileImgStorageKey
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
                    const profile = {
                        name: user.displayName,
                        email: user.email,
                        phone: data.phone,
                        fburl: data.fburl,
                        address: data.address,
                        image: img
                    }
                    //send to databse
                    fetch('http://localhost:5000/profile', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`

                        },
                        body: JSON.stringify(profile)

                    })
                        .then(response => response.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Profile Data Added Successfully');
                                reset();
                            } else {
                                toast.error('Fail to Add Profile Data');
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
                            <span className="label-text text-3xl text-bold">Edit Profile</span>
                        </label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={user.displayName}
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
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={user.email}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide is a Valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Facebook URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Facebook url"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("fburl", {
                                        required: {
                                            value: true,
                                            message: 'Faeebook URL is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.fburl?.type === 'required' && <span className="label-text-alt text-red-500">{errors.fburl.message}</span>}

                                </label>
                            </div>

                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Product phone"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Price is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}

                                </label>
                            </div>

                            {/* input file */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo</span>
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
                                    <span className="label-text">Your Address</span>
                                </label>


                                <textarea
                                    type="text"
                                    class="textarea textarea-bordered"
                                    placeholder="address"
                                    className="textarea textarea-bordered w-full max-w-xs"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'address is Required'
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}

                                </label>
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white" type='submit'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;