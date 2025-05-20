import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-[#706F6F]'>{format(new Date(), 'EEEE, PP')}</p>
        </div>
    );
};

export default Header;