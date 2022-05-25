import React from 'react';

const Reviews = () => {
    return (
        <>
            <section>
                <div className='my-28'>
                    <h3 className='text-secondary text-4xl font-bold text-center '>Our Review</h3>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="avatar flex justify-center mt-5">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">5 Star Review</h2>
                            <p>Parts came on time fit like original parts.I like this products form this website.</p>
                            <div >
                                <p><b>By</b> Donald Vought</p>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="avatar flex justify-center mt-5">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">5 Star Review</h2>
                            <p>Parts came on time fit like original parts.I like this products form this website.</p>
                            <div >
                                <p><b>By</b> Donald Vought</p>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="avatar flex justify-center mt-5">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">5 Star Review</h2>
                            <p>Parts came on time fit like original parts.I like this products form this website.</p>
                            <div >
                                <p><b>By</b> Donald Vought</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
};

export default Reviews;