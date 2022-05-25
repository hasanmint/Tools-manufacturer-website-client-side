import React from 'react';
import bg3 from '../../assets/slider/bg-1.jpg';

const Banner = () => {
    return (
        <section>
            <div className="hero min-h-screen bg-neutral my-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1">
                        <img src={bg3} className="max-w rounded-lg shadow-2xl" alt='banner-image' />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Best Collection Premium Quality Tools</h1>
                        <p className="py-6 text-xl">Free shipping & discount 40% on products.</p>
                        <button className="btn btn-primary text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;