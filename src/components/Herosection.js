import React from "react";
import Typed from "react-typed";
import UberEatsButton from "./UberEats";
import { Link } from 'react-router-dom';

import MenuIcon from "./MenuIcon.svg";
import NousContacter from "./nousContacter.svg";
import DeliverooButton  from "./Deliveroo"
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[700px]  mt-7 w-full h-fit mx-auto text-center flex flex-col justify-center">
        {/* Hero section content */}
        <div className="max-w-[700px] mt-7 w-full h-fit mx-auto text-center flex flex-col justify-center">
          <img
            src="/img/lgblanc.png"
            alt="lgnoir"
            className="mx-auto md:w-2/5 sm:w-3/5 w-3/5 hover:animate-pulse"
          />

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

          <p className="md:text-5xl text-xl font-bold text-[#DDC69F]">
            {" "}
            {/* Add margin-bottom */}
            Réservez au&nbsp;
            <a href="tel:07-83-81-43-74" className="text-[#DDC69F] hover:text-white">
              07 83 81 43 74
            </a>
          </p>

          <div className="flex flex-col items-center my-4 text-xl">
            <svg
              className="w-8 h-8 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <a
              href="https://www.google.com/maps/search/?api=1&query=11%20Rue%20Jean%20Rostand,%2081000%20Albi"
              target="_blank"
              rel="noopener noreferrer"
              className="address-link text-lg hover:text-Albi"
            >
              11 Rue Jean Rostand, 81000 Albi
            </a>
          </div>
        </div>
      </div>
 
      {/* lg:w-4/6 lg:m-auto lg:flex lg:justify-around lg:items-center */}

      <div class=" sm:flex-row mx-10 align-center space-y-2 lg:w-4/6 lg:m-auto lg:flex lg:justify-around lg:items-center lg:mt-20  space-x-5  ">
      <div></div>
        
 
  
      <div className=" rounded-lg	mx-4 bg-white flex justify-center  hover:bg-Albi sm:w-screen lg:w-1/5   ">
        <UberEatsButton/>
    </div>
      
    

    <div className=" rounded-lg	mx-4 bg-white flex justify-center  hover:bg-Albi sm:w-screen lg:w-1/5   "><DeliverooButton/></div>

        <div class=" sm:w-screen   lg:w-1/5 bg-white hover:bg-Albi h-20    text-black font-bold rounded items-center flex justify-center	 space-x-5 ">
          
      <Link to='/Carte' className="flex items-center space-x-2">
        <img src={MenuIcon} alt="La carte" />
        <span>La carte</span>
      </Link>
    </div>

     
  
  <div class="sm:w-screen   lg:w-1/5 bg-white hover:bg-Albi h-20 text-black font-bold rounded  items-center flex justify-center space-x-5	">
          
          <Link to='/Nouscontacter' className="flex items-center space-x-2">
          <img src={NousContacter} alt="nous contacter"  />
          <span>Nous contacter</span>
          </Link>
  </div>
        

      </div>
    </div>
  );
};

export default Hero;
