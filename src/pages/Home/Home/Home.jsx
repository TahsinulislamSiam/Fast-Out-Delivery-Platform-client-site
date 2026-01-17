import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogos from '../clientLogos/ClientLogos';
import Features from '../Features/Features';
import BeMarchent from '../BeMarchant/BeMarchent';
import CustomerReviews from '../ReveiwsCard/CustomerReviews';
import FrequentlyAsked from '../FrequentlyAsked/FrequentlyAsked';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogos></ClientLogos>
            <Features></Features>
            <BeMarchent></BeMarchent>
            <CustomerReviews></CustomerReviews>
            <FrequentlyAsked></FrequentlyAsked>
           
        </div>
    );
};

export default Home;