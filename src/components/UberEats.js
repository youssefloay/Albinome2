import React from 'react';
import UberEats from './ubereats.svg';

const UberEatsButton = () => {
  return (
    <button className="flex flex-col items-center my-4 px-4 py-4 space-x-2 bg-white text-black rounded-lg shadow">
      <img src={UberEats} alt="Uber Eats" className="h-12 w-18 text-red-500" />
     
    </button>
  );
};

export default UberEatsButton;
