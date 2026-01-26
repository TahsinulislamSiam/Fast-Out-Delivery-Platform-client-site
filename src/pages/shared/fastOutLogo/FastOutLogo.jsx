import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router';

const FastOutLogo = () => {
    return (
       <Link to="/">
        <div className='flex items-end btn btn-ghost text-xl'>
            <img className='mb-2' src={logo} alt="" />
            <p className='text-3xl -ml-2 font-extrabold'>FastOut</p>
        </div>
       </Link>
    );
};

export default FastOutLogo;