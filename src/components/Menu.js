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
      name: 'FROMAGE',
      price: 6.50,
      ingredients: ["Sauce tomate, Emmental, Olives"]
    },
    {
      name: 'CHORIZO',
      price: 8.50,
      ingredients: ["Sauce tomate, Chorizo, Emmental"]
    },
    {
      name: 'ANCHOIS',
      price: 8.50,
      ingredients: ["Sauce tomate, Anchois, Olives, Emmental"]
    },
    {
      name: 'JAMBON',
      price: 8.50,
      ingredients: ["Sauce tomate, Jambon, Olives, Emmental"]
    },
    {
      name: 'REINE',
      price: 9.00,
      ingredients: ["Sauce tomate, Jambon, Champignons, Emmental"]
    },
    {
      name: '4 FROMAGES',
      price: 10.00,
      ingredients: ["Sauce tomate, Chèvre, Roquefort, Mozzarella, Emmental"]
    },
    {
      name: 'VESUVIO',
      price: 10.00,
      ingredients: ["Sauce tomate, Chorizo, Poivrons frais, Emmental"]
    },
    {
      name: 'CAPRICCIOSA',
      price: 10.00,
      ingredients: ["Sauce tomate, Champignons, Jambon, Lardons, Oignons confits, Emmental"]
    },
    {
      name: 'BOLO',
      price: 10.00,
      ingredients: ["Sauce tomate, Viande façon bolognaise, Emmental"]
    },
    {
      name: 'BASQUAISE',
      price: 10.00,
      ingredients: ["Sauce tomate, Oignons confits, Poulet, Poivrons frais, Emmental"]
    },
    {
      name: 'ORIENTALE',
      price: 10.00,
      ingredients: ["Sauce tomate, Merguez, Poivrons frais, Emmental"]
    },
    {
      name: 'VÉGÉTARIENNE',
      price: 10.00,
      ingredients: ["Sauce tomate, Champignons, Oignons confits, Poivrons frais, Emmental"]
    },
    {
      name: 'LARDONS CHÈVRE',
      price: 10.00,
      ingredients: ["Sauce tomate, Lardons, Chèvre, Emmental"]
    },
  ];

  const whitePizzas = [
    {
      name: 'FROMAGÈRE',
      price: 10.00,
      ingredients: ["Crème fraiche, Chèvre, Roquefort, Mozzarella, Emmental"]
    },
    {
      name: 'TARTIFLETTE',
      price: 10.00,
      ingredients: ["Crème fraiche, Oignons confits, Lardons, Fromage à Tartiflette, Pomme de terre, Emmental"]
    },
    {
      name: "L'ALBIQUETTE",
      price: 10.00,
      ingredients: ["Crème fraiche, Chèvre, Amandes, Miel, Emmental"]
    },
    {
      name: 'LA COQUETTE',
      price: 10.00,
      ingredients: ["Crème fraiche, Jambon, 2 oeufs, Emmental"]
    },
    {
      name: 'REINE BLANCHE',
      price: 10.00,
      ingredients: ["Crème fraiche, Champignons, Jambon, Mozzarella, Emmental"]
    },
    {
      name: 'ALSACIENNE',
      price: 10.00,
      ingredients: ["Crème fraiche, Lardons, Oignons confits, Emmental"]
    },
    {
      name: 'HAWAIENNE',
      price: 10.50,
      ingredients: ["Crème fraiche, Poulet, Ananas, Emmental"]
    },
    {
      name: 'NORVÉGIENNE',
      price: 10.00,
      ingredients: ["Crème fraiche, Saumon frais, Emmental"]
    },
    
    
    
  ];
  const rosePizzas = [
    {
      name: '81',
      price: 10.00,
      ingredients: ["Sauce tomate, Crème fraiche, Chorizo, Roquefort, Mozzarella, Emmental"]
    },
    {
      name: 'PIC DE NORE',
      price: 12.00,
      ingredients: ["Sauce tomate, Crème fraiche, Bolognaise, Oignons confits, Poivrons frais, Piment, Emmental"]
    },
    {
      name: 'LA TARNAISE',
      price:12.00,
       ingredients:["Sauce tomate, Crème fraiche, Champignons, Poitrine fumée, Fourme d'ambert, Mozzarella, Olives, Oignons frits, Emmental"]
    },
    
  ];
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