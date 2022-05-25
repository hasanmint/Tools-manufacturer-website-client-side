import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Error 404</h1>
                        <p class="py-6">Oops! The page you're looking for isn't here.</p>
                        <Link to="/" >
                            <button class="btn btn-primary text-white">Back to Home</button>
                        </Link>
                    </div>
                </div>
            </div>


        </>
    );
};

export default NotFound;