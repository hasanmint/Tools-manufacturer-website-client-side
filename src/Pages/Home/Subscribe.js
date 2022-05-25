import React from 'react';

const Subscribe = () => {
    return (
        <>
            <div></div>
            <div className='my-28'>
                <section class="footer p-10 bg-base-200 text-base-content p-20">
                    <div className='mx-12'>
                        <h4 className=''>30% Discount For Your First Order</h4>
                        <h2 className='text-2xl'>Subscribe To Our Newsletter</h2>
                        <p className=''>Subscribe to the newsletter for all the latest updates</p>
                    </div>
                    <div>
                        <span class="footer-title">Newsletter</span>
                        <div class="form-control w-80">
                            <label class="label">
                                <span class="label-text">Enter your email address</span>
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Subscribe;