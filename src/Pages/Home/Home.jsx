import React from 'react';
import Banner from './Banner/Banner';
import CategorySection from './HomeSection/CategorySection';
import LatestProduct from './HomeSection/LatestProduct';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <LatestProduct></LatestProduct>
        </div>
    );
};

export default Home;