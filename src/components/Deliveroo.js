import React from 'react';
import Deliveroo from './Deliveroo.svg';

const DeliverooButton = () => {
  return (
    <button className="flex flex-col items-center  px-4 py-4 space-x-2 bg-white text-black rounded-lg shadow">
      <img src={Deliveroo} alt="Deliveroo" className="" />
    </button>
  );
};

export default DeliverooButton;
