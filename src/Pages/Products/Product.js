import React from 'react';

const Product = ({ product, setOrder }) => {
    const { name, price, quantity, image, description } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-xl text-secondary text-center">{name}</h2>
                <p>{description}</p>


                <h3 className='text-center text-xl'>

                    <p>
                        <p>Order=(min-100 and max-200)</p>
                        {

                            quantity < 100 ?
                                <span className='text-red-500'>Try again</span>
                                :
                                <span>{quantity[0]}</span>
                        }
                    </p>
                    <p>{quantity} {quantity > 1 ? 'unites' : 'unite'} availble </p>
                </h3>
                <div className="text-xl text-center">${price}</div>
                <div className="card-actions justify-center mt-2">
                    <label htmlhtmlFor="booking-modal"
                        disabled={quantity <= 99}
                        onClick={() => setOrder(product)}
                        className="btn btn-secondary text-white uppercase">Order Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;