import React from 'react';

const Summary = () => {
    return (
        <>
            <section>
                <div className='mt-36 mb-20'>
                    <h3 className='text-secondary text-4xl font-bold text-center'>Our Bussines Summary</h3>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-12 border rounded'>
                    <div className="card w-112 bg-base-100">
                        <div className='text-center'>
                            <div className="stat-figure text-primary mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-primary">100 +</div>
                                <div>Happy Client</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-112 bg-base-100">
                        <div className='text-center'>
                            <div className="stat-figure text-primary mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"></path></svg>

                            </div>

                            <div className="stat">
                                <div className="stat-value text-primary">120M+</div>
                                <div> Annual Revenue</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-112 bg-base-100">
                        <div className='text-center'>
                            <div className="stat-figure text-primary mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>

                            </div>
                            <div className="stat">
                                <div className="stat-value text-primary">33.3K</div>
                                <div>Reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-112 bg-base-100">
                        <div className='text-center'>
                            <div className="stat-figure text-primary mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path></svg>

                            </div>
                            <div className="stat">
                                <div className="stat-value text-primary">50+</div>
                                <div>Tools</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-112 bg-base-100">
                        <div className='text-center'>
                            <div className="stat-figure text-primary mt-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-primary">1K +</div>
                                <div>Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Summary;