import React from 'react';
import Products from '../Products/AvailableProducts';
import Reviews from './Reviews';
import Banner from './Banner';
import Summary from './Summary';
import Subscribe from './Subscribe';
import Blog from './Blog';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Summary></Summary>
            <Blog></Blog>
            <Subscribe></Subscribe>


        </div>
    );
};

export default Home;