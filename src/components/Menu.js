import React, { useState } from 'react';
import MenuCard from './MenuCard';
import PizzaSize from './Pizzasize.svg'
import Plusicon from './plusicon.svg'
import CanIcon from './canicon.svg'
import SocialButtons from './Socialmedia';
const Pizzas = () => {
  const [pizzaType, setPizzaType] = useState('red');

  const redPizzas = [
    {
      name: 'MARGHERITA',
      price: 6.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Olives'],
      
    },
    {
      
      name: 'CHORIZO',
      price: 8.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Chorizo'],
    },
    {
      
      name: 'JAMBON',
      price: 8.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Jambon', 'Olives'],
    },
    {
      
      name: 'ANCHOIS',
      price: 8.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Anchois', 'Olives'],
    },
    {
 
      name: 'REINE',
      price: 9.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Jambon', 'Champignons'],
    },
    {
    
      name: '4 FROMAGES',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Chevre', 'Roguefort', 'Mozzarella'],
    },
    {
      
      name: 'VESUVIO',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Chorizo', 'Poivrons frais'],
    },
    {
      
      name: 'CAPRI',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Champignons', 'Jambon', 'Lardons', 'Oignons confits'],
    },
    {
     
      name: 'BOLO',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Viande facon bolognaise'],
    },
    {
      
      name: 'BASQUAISE',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Poulet', 'Oignons confits', 'Poivrons frais'],
    },
  ];

  const whitePizzas = [
    { id:0,
      name: 'FROMAGERE',
      price: 9.50,
      ingredients: ['Crème fraîche', 'Emmental', 'Chèvre', 'Roquefort', 'Mozzarella'],
    },
    {
      id:1,
      name: 'TARTIFLETTE',
      price: 9.50,
      ingredients: ['Crème fraîche', 'Emmental', 'Oignons confits', 'Reblochon', 'Pomme de terre', 'Lardons'],
    },
    {
      id:2,
      name: 'ABEILLE',
      price: 9.50,
      ingredients: ['Crème fraîche', 'Emmental', 'Chèvre', 'Amandes', 'Miel'],
      isVegetarian: true
    },
    {
      id:3,
      name: 'POULETTE',
      price: 9.50,
      ingredients: ["Crème fraîche, Emmental, Jambon, 2 oeufs"],
    },
    {
      id:4,
      name: 'REINE BLANCHE',
      price: 9.50,
      ingredients: ["Crème fraîche, Emmental "],
    },
    
  ];
  const rosePizzas = [
    {
      id:1,
      name: 'FROMAGERE',
      price: 9.50,
      ingredients: [' Rose', 'Emmental', 'Chèvre', 'Roquefort', 'Mozzarella'],
    },
  ]
  const pizzas = redPizzas.concat(whitePizzas);

  function pizzacard(pizza){
    return <MenuCard id={pizza.id} name={pizza.name} ingredients={pizza.ingredients.map((ingredient, index) => (
      <span key={index} className="text-blue-500">{ingredient}</span>
    ))} price={pizza.price}/>
  }
  const filteredPizzas = pizzaType === 'red' ? redPizzas : pizzaType === 'white' ? whitePizzas : rosePizzas;

    return (

     
        
        <div>
          <h1 className="text-center text-3xl font-bold mb-8 text-white">Carte</h1>
          <h2 className="text-center italic text-xl mb-4  text-Albi">
            Pour les services quotidiens du midi, repartez avec une pizza, un plat différent chaque jour ainsi que nos desserts maison.
            <div className="mt-8">Le soir est uniquement consacré aux pizzas ! 
            <div className='mt-8'>Pour connaitre le menu de semaine, suivez-nous sur nos réseaux sociaux.</div>
            <span className="flex items-center justify-center mt-4 "> <SocialButtons/> </span>
            <img src='/img/lgnoir.png' alt='lgnoir' className=' mx-auto md:w-2/5 sm:w-3/5 w-3/5 hover:animate-pulse'/>
             </div>
             
          </h2>
          

<div className='flex justify-center'>
<div className="sm:w-full md:w-1/2 lg:w-1/4 bg-Albi rounded inline-flex shadow-md p-4 text-center my-2">
        
          <div className="flex items-center mb-2">
            <div className="mr-3 text-white text-3xl">Midi</div>
            <span>
              <img src={PizzaSize} alt="33cm Pizza" className="w-11 h-11 ml-3 mr-3" />
              33cm
            </span>
            <span className="ml-7 mr-7">ou</span>
            <span>
              <img src={PizzaSize} alt="28cm Pizza" className="w-11 h-11 ml-3" />
              28cm
            </span>
            <span>
              <img src={Plusicon} alt="Plus Pizza" className="w-5 h-5 ml-3 mr-3" />
            </span>
            <span>
              <img src={CanIcon} alt="Can Icon" className="w-11 h-11 mb-3" />
            </span>
           
      </div>
      
      </div>
      </div>
      <div className="sm:w-full md:w-1/2 lg:w-1/4 bg-Albi rounded-md inline-flex shadow-md p-4 text-center my-2 ml-4">
        
          <div className="flex items-center mb-2">
            <div className="mr-3 text-white text-3xl">Soir</div>
            <span>
              <img src={PizzaSize} alt="33cm Pizza" className="w-11 h-11 ml-3 mr-4" />
              33cm
            </span>
            <div className="ml-3 mr-3 text-black text-3xl">uniquement</div>
 </div>
 </div>
         {/* Pizza type selection */}
      <div className="flex justify-center space-x-6">
        <button
          className={`text-lg font-medium p-4 rounded-full border-2  text-white border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300`}
          onClick={() => setPizzaType('red')}
        >
          <div className="flex justify-center items-center">Base Tomate</div>
        </button>
        <button
          className={`text-lg font-medium p-4 rounded-full border-2 text-white border-white hover:bg-white hover:text-gray-700 transition-all duration-300`}
          onClick={() => setPizzaType('white')}
        >
          <div className="flex justify-center items-center">Base Crème</div>
        </button>
        <button
          className={`text-lg font-medium p-4 rounded-full border-2 text-white border-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300`}
          onClick={() => setPizzaType('pink')}
        >
          <div className="flex justify-center items-center">Base Rose</div>
        </button>
      </div>

      {/* Pizza cards */}
      
      <div className="p-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-7 text-white">
        {filteredPizzas.map((pizza) => (
          <div key={pizza.id}>
            <MenuCard id={pizza.id} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Pizzas;