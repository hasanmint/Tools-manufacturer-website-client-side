import React from 'react';
import bg1 from '../../assets/slider/bg-2.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-neutral">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img src={bg1} class="max-w rounded-lg shadow-2xl" alt='banner-image' />
                </div>
                <div className='flex-1'>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;