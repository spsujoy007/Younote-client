import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

  const menuitem = <>
    <li className='rounded-none'><NavLink to='/'>Home</NavLink></li>
    <li className='rounded-none'><NavLink to='/element'>Element</NavLink></li>
  </>

    return (
      <div className="navbar bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="bg-primary uppercase font-semibold text-base-100 menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
            {menuitem}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl uppercase text-white">YouNote</Link>
      </div>
      <div className="navbar-center hidden lg:flex uppercase font-semibold">
        <ul className="menu menu-horizontal px-1 text-white">
          {menuitem}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="avatar">
  <div className="w-8 rounded">
    <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
      </div>
    </div>
    );
};

export default Header;