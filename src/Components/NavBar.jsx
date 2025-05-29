import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='nav flex gap-5 text-base-500'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>

            </div>
            <div className='login-btn flex gap-2'>
                <img src={user} alt="" />
                <button className='btn bg-[#403F3F] text-white px-10'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;