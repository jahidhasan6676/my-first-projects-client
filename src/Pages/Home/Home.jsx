import React from 'react';
import Banner from './Banner/Banner';
import CategorySection from './HomeSection/CategorySection';
import LatestProduct from './HomeSection/LatestProduct';
import Service from './HomeSection/Service';
import SubscriptionForm from './HomeSection/SubscriptionForm';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategorySection></CategorySection>
            <LatestProduct></LatestProduct>
            <Service></Service>
            <SubscriptionForm></SubscriptionForm>
        </div>
    );
};

export default Home;