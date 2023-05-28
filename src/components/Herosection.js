import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white mt-12'>
      <div className='max-w-[700px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        
      <img src='/img/lgnoir.png' alt='lgnoir' className=' mx-auto md:w-2/5 sm:w-3/5 w-3/5 hover:animate-pulse'/>
        
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Une pizza base
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['crème?', 'tomate?', ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        {/*<p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>*/}
        <button className='regular-bg w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black inline-block'> La Carte</button>
        <button className='regular-bg w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-blackinline-block'>UberEats</button>
      
      </div>
     
    </div>
  );
};

export default Hero;
