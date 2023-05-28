import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import App from '../App';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#DDC69F]'>
      <Link to='/Home'>Albinome</Link></h1>
      
      <ul className='hidden md:flex '>
        <li className='p-8 hover:text-[#DDC69F]'>
          <Link to='/Carte'>La&nbsp;Carte</Link>
        </li>
        <li className='p-8 hover:text-[#DDC69F]'>Nous&nbsp;Contacter</li>
        <li className='p-8 hover:text-[#3FC060]'>
          <a href='https://www.ubereats.com/' target='_blank' rel='noopener noreferrer'>
            UberEats
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1200' : 'ease-in-out duration-1200 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#DDC69F] m-8'>Albinome</h1>
        <li className='p-8 border-b border-gray-600'>Home</li>
        <li className='p-8 border-b border-gray-600'>
          <Link to='/Carte'>La&nbsp;Carte</Link>
        </li>
        <li className='p-8 border-b border-gray-600'>Nous&nbsp;Contacter</li>
        <li className='p-8 border-b border-gray-600'><a href="tel:+1234567890">+1234567890</a></li>
        <li className='p-8 border-b border-gray-600'><a href='https://www.ubereats.com/' target='_blank' rel='noopener noreferrer'>UberEats</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
