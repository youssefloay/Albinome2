import React from 'react';
import Deliveroo from './Deliveroo.svg';

const DeliverooButton = () => {
  return (
    <a href="https://www.deliveroo.fr/fr/menu/Albi/la-plaine-des-fourches-la-renaudie/lalbinome-foodtruck/?day=tomorrow&geohash=spc9ct09ns9p&time=1215" target="_blank">
      <button className="flex flex-col items-center  px-4 py-4 space-x-2 bg-white text-black rounded-lg shadow">
        <img src={Deliveroo} alt="Deliveroo" className="" />
      </button>
    </a>
  );
};

export default DeliverooButton;
