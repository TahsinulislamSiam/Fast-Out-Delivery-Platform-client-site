import React from 'react';
import { NavLink } from 'react-router';
import FastOutLogo from '../fastOutLogo/fastOutLogo';

const Navbar = () => {
    const navItem = <>
         <li className='hover:bg-lime-200'><NavLink>Home</NavLink></li>
         <li className='hover:bg-lime-200'><NavLink>Service</NavLink></li>
         <li className='hover:bg-lime-200'><NavLink>Coverage</NavLink></li>
         <li className='hover:bg-lime-200'><NavLink>About us</NavLink></li>
         <li className='hover:bg-lime-200'><NavLink>Pricing</NavLink></li>
         <li className='hover:bg-lime-200'><NavLink>Vlogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navItem}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <FastOutLogo></FastOutLogo>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu  menu-horizontal px-1">
    {navItem}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn bg-emerald-100 rounded-2xl">Sign in</a>
    <a className="btn bg-lime-300">LogIn</a>
  </div>
</div>
    );
};

export default Navbar;