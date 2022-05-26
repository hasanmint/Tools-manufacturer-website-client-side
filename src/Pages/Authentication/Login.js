import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        errorMessage = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }



    return (
        <div className="hero min-h-screen bg-base-200 my-14">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-14">
                <div className="card-body">
                    <label className="text-center">
                        <span className="label-text text-3xl text-bold">Login </span>
                    </label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must 6 Character Or Longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                            <label className="label">
                                <Link to='/resetpassword' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white" type='submit'>Login</button>
                        </div>
                    </form>
                    <p>New to manufacturer?  <Link to='/signup' className='text-secondary' >Create new account</Link></p>
                    {errorMessage}
                    <div className="divider">OR</div>

                    <div className='form-control'>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary text-white">Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;