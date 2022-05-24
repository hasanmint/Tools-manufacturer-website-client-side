import React, { useEffect, useState } from 'react';
import OrderForm from './OrderDetails';
import Product from './Product';

const AvailableProducts = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState(null)


    useEffect(() => {
        fetch('http://localhost:5000/product')
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
                                setOrder={setOrder}
                            ></Product>)
                    }
                </div>

                {order && <OrderForm
                    order={order}
                    setOrder={setOrder}
                ></OrderForm>}
            </div>

        </>
    );
};

export default AvailableProducts;