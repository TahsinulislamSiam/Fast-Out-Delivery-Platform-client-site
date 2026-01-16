import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from '../clientLogos/ClientLogos';
import Features from '../Features/Features';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogos></ClientLogos>
            <Features></Features>
           
        </div>
    );
};

export default Home;