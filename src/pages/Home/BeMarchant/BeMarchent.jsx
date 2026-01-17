import React from 'react';
import merchantLogo from '../../../assets/location-merchant.png'

const BeMerchent = () => {
    return (
        <div data-aos="fade-down"  className="bg-[url('assets/be-a-merchant-bg.png')] bg-[#03373D] bg-no-repeat p-20 rounded-4xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={merchantLogo}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold text-white">Merchant and cutomer satisfaction is our First Priority</h1>
      <p className="py-6 text-gray-300">
            We deliver as fast as you want. Satisfaction is the first priority. We deliver Beyond your imagination Level. We are make sure your products are protected. No compromise with the quality....
      </p>
      <button className="btn bg-pink-400 hover:bg-orange-300 rounded-2xl ">Become a Merchant</button>
      <button className="btn btn-outline btn-secondary rounded-2xl ms-4">Earn with FastOut Courier</button>
    </div>
  </div>
</div>
    );
};

export default BeMerchent;