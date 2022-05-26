import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Error 404</h1>
                        <p className="py-6">Oops! The page you're looking for isn't here.</p>
                        <Link to="/" >
                            <button className="btn btn-primary text-white">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>


        </>
    );
};

export default NotFound;