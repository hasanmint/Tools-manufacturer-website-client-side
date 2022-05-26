import React from 'react';

const Subscribe = () => {
    return (
        <>
            <div></div>
            <div className='my-28'>
                <section className="footer p-10 bg-base-200 text-base-content p-20">
                    <div className='mx-12'>
                        <h4 className=''>30% Discount For Your First Order</h4>
                        <h2 className='text-2xl'>Subscribe To Our Newsletter</h2>
                        <p className=''>Subscribe to the newsletter for all the latest updates</p>
                    </div>
                    <div>
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Subscribe;