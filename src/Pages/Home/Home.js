import React from 'react';
import Products from '../Products/AvailableProducts';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;