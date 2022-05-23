import React from 'react';

const Product = ({ product }) => {
    const { name, price, quantity, image, description } = product;

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 className="text-xl text-secondary text-center">{name}</h2>
                <p>{description}</p>
                <h3 className='text-center text-xl'>{quantity} Available (min-100)</h3>
                <div class="text-xl text-center">${price}</div>
                <div class="card-actions justify-center mt-2">
                    <div className="btn btn-secondary text-white uppercase w-m">Purchase</div>
                </div>
            </div>
        </div>
    );
};

export default Product;