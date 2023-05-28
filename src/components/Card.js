import React from 'react';
import { ReactComponent as Pizzaslice } from './pizza-slice.svg';


const CardSection = () => {
  return (
     <div className='bg-orange-200	w-full	h-60	flex justify-around items-center	'>
        <div className=' w-3/5 flex justify-around items-center text-amber-500	'>
        <div className='hover:bg-amber-500	h-20 flex items-center py-12 px-8 pr-8 rounded-lg border border-amber-500 hover:text-white flex justify-center'>
        <Pizzaslice className='svghover'/>
          <p>Pizza Blanches</p>
        </div>
        <div className='hover:bg-amber-500 h-20 flex items-center py-12 px-8 pr-8 rounded-lg border border-amber-500  hover:text-white flex justify-around'	>
        <Pizzaslice className='svghover'/>
        <p> Pizza Rouges</p>
         
      </div>
      <div className='hover:bg-amber-500 h-20 flex items-center py-12 px-8 Pr-8 rounded-lg border border-amber-500  hover:text-white flex justify-around'	>
        <Pizzaslice className='svghover'/>
    <p>Pizza Roses</p>
      </div>
        </div>
      </div>
  );
};

export default CardSection;
