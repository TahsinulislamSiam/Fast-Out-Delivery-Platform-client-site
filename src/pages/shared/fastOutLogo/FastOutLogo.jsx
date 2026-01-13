import React from 'react';
import logo from '../../../assets/logo.png'

const FastOutLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={logo} alt="" />
            <p className='text-3xl -ml-2 font-extrabold'>FastOut</p>
        </div>
    );
};

export default FastOutLogo;