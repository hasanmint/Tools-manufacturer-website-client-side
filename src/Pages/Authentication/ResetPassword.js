import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const ResetPassword = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const handleResetBtn = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email');
        }
        else {
            toast('Please Enter your Email Address');
        }
    }
    return (

        <>
            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <h2 className='text-3xl  text-center '>Reset Password</h2>
                            <form onSubmit={handleResetBtn}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email address</span>
                                    </label>
                                    <input ref={emailRef}  type="email" name='email' placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default ResetPassword;