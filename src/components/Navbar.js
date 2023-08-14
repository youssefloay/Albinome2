import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [transparent, setTransparent] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setTransparent(false);
    } else {
      setTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 ${transparent ? 'bg-opacity-0' : 'bg-black'} shadow-md flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white transition-all duration-300`}>      <h1 className='w-full text-4xl font-bold text-black-500 '>
        <Link to='/' onClick={handleLinkClick}>Albinome</Link>
      </h1>

      <ul className='hidden md:flex text-2xl '>
        <li className='p-8 hover:text-[#DDC69F]'>
          <Link to='/Carte' onClick={handleLinkClick}>La&nbsp;Carte</Link>
        </li>
        <li className='p-8 hover:text-[#DDC69F]'>
          <Link to='/Nouscontacter' onClick={handleLinkClick}>Nous&nbsp;Contacter</Link>
        </li>
        <li className='p-8 hover:text-[#3FC060]'>
          <a href='https://www.ubereats.com/' target='_blank' rel='noopener noreferrer'>
            UberEats
          </a>
        </li>
        <li className='p-8 hover:text-[#00cdbc]'>
          <a href='https://www.deliveroo.fr/fr/menu/Albi/la-plaine-des-fourches-la-renaudie/lalbinome-foodtruck/?day=tomorrow&geohash=spc9ct09ns9p&time=1215' target='_blank' rel='noopener noreferrer'>
            Deliveroo
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden '>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-600' : 'ease-in-out duration-600 fixed left-[-100%]'}>
        <h1 className='w-full md:w-auto text-3xl md:text-1xl sm:text-1xl font-bold text-[#DDC69F] m-5'>Albinome</h1>


        <li className='p-8 border-b border-Albi'>
          <Link to='/Carte' onClick={handleLinkClick}>La&nbsp;Carte</Link>
        </li>
        <li className='p-8 border-b border-Albi'>
          <Link to='/Nouscontacter' onClick={handleLinkClick}>Nous Contacter</Link>
        </li>
        {/*<li className='p-8 border-b border-Albi'><a href="tel:+33 7 83 81 43 74">07 83 81 43 74</a></li>*/}
        <li className='p-8 border-b text-[#3FC060] border-Albi'><a href='https://www.ubereats.com/' target='_blank' rel='noopener noreferrer' onClick={handleLinkClick}>UberEats</a></li>
        <li className='p-8 border-b text-[#00cdbc] border-Albi'><a href='https://www.ubereats.com/' target='_blank' rel='noopener noreferrer' onClick={handleLinkClick}>Deliveroo</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
