import React from 'react';
import Typed from 'react-typed';
import UberEatsButton from './UberEats';

import MenuIcon from './MenuIcon.svg';
import NousContacter from './nousContacter.svg';
const Hero = () => {
  return (
  
  <div className="text-white">
    <div className="max-w-[700px]  mt-7 w-full h-fit mx-auto text-center flex flex-col justify-center">
      {/* Hero section content */}
      <div className="max-w-[700px] mt-7 w-full h-fit mx-auto text-center flex flex-col justify-center">
        <img src="/img/lgnoir.png" alt="lgnoir" className="mx-auto md:w-2/5 sm:w-3/5 w-3/5 hover:animate-pulse" />
        
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Une pizza base
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["crème?", "tomate?"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        
        <p className="md:text-5xl text-xl font-bold text-[#DDC69F]"> {/* Add margin-bottom */}
          Réservez au&nbsp;
          <a href="tel:07-83-81-43-74" className="text-[#DDC69F]">
            07 83 81 43 74
          </a>
        </p>
        
        <div className="flex flex-col items-center my-4 text-xl">
  <svg className="w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
  <a href="https://www.google.com/maps/search/?api=1&query=11%20Rue%20Jean%20Rostand,%2081000%20Albi" target="_blank" rel="noopener noreferrer" className="address-link text-lg">11 Rue Jean Rostand, 81000 Albi</a>
</div>

      </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center">
      <div class="mr-4 mb-4 md:mb-0 md:mr-6"><a href="https://www.ubereats.com/" target="_blank" rel="noopener"><UberEatsButton class="h-3 w-3"/></a></div>




 {/* <div><a href="https://deliveroo.fr/" target="_blank"><DeliverooButton/></a></div>*/} 
</div>




<div class="flex flex-col md:flex-row justify-center text-4xl md:text-5xl sm:text-4xl ">
  
<button class="bg-white hover:bg-Albi text-black font-bold my-4 mx-4 md:mx-9 px-4 md:px-9 py-3 space-x-5 rounded inline-flex items-center">    <img src={MenuIcon} alt="React Logo" />
    <span>La carte</span>
  </button>
  <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold my-4 mx-4 md:mx-9 px-4 md:px-9 py-3 space-x-5 rounded inline-flex items-center">
    <img src={NousContacter} alt="React Logo" />
    <span>Nous Contacter</span>
  </button>

  
</div>




    

  


</div>




     
    
  );
};

export default Hero;
