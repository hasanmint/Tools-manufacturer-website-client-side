import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(Response => Response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <div className="mx-auto px-12 my-28">
                <div className='text-center my-10'>
                    <h3 className='text-secondary text-5xl font-bold '>Our Products:{products.length} </h3>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        products.map(product =>
                            <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                    }
                </div>
            </div>

        </>
    );
};

export default Products;