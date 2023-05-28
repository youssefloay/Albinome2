import React, { useState } from 'react';
import MenuCard from './MenuCard';



const Pizzas = () => {
  const [pizzaType, setPizzaType] = useState('red');

  const redPizzas = [
    {
      name: 'MARGHERITA',
      price: 6.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Olives'],
    },
    {
      id:4,
      name: 'CHORIZO',
      price: 8.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Chorizo'],
    },
    {
      id:4,
      name: 'JAMBON',
      price: 8.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Jambon', 'Olives'],
    },
    {
      id:4,
      name: 'ANCHOIS',
      price: 8.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Anchois', 'Olives'],
    },
    {
      id:4,
      name: 'REINE',
      price: 9.00,
      ingredients: ['Sauce tomate', 'Emmental', 'Jambon', 'Champignons'],
    },
    {
      id:4,
      name: '4 FROMAGES',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Chevre', 'Roguefort', 'Mozzarella'],
    },
    {
      id:4,
      name: 'VESUVIO',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Chorizo', 'Poivrons frais'],
    },
    {
      id:4,
      name: 'CAPRI',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Champignons', 'Jambon', 'Lardons', 'Oignons confits'],
    },
    {
      id:4,
      name: 'BOLO',
      price: 9.50,
      ingredients: ['Sauce tomate', 'Emmental', 'Viande facon bolognaise'],
    },
    {
      id:4,
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
    },
    {
      id:3,
      name: 'POULETTE',
      price: 9.50,
      ingredients: ['Crème fraîche', 'Emmental', 'Jambon', '2 oeufs'],
    },
    {
      id:4,
      name: 'REINE BLANCHE',
      price: 9.50,
      ingredients: ['Crème fraîche'],
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
    return <MenuCard id={pizza.id} name={pizza.name} ingredients={pizza.ingredients} price={pizza.price}/>
  }
  const filteredPizzas = pizzaType === 'red' ? redPizzas : pizzaType === 'white' ? whitePizzas : rosePizzas;

    return (

    
      <div className="px-4">
        <div>
          <h1 className="text-center text-3xl font-bold mb-8">Carte</h1>
          <h2 className="text-center italic text-xl mb-4">
            Pour les services quotidiens du midi, repartez avec une pizza, un plat différent chaque jour ainsi que nos desserts maison.
            <div className="mt-8">Le soir est uniquement consacré aux pizzas ! 
             </div>
          </h2>
          
          
    
          <div className="flex justify-center space-x-6">
            <button
              className={`text-lg font-semibold px-4 py-2 rounded ${
                pizzaType === 'red' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => setPizzaType('red')}
            >
              Base Tomate
            </button>
            <button
              className={`text-lg font-semibold px-4 py-2 rounded ${
                pizzaType === 'white' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => setPizzaType('white')}
            >
              Base Crème
            </button>

            <button
              className={`text-lg font-semibold px-4 py-2 rounded ${
                pizzaType === 'rose' ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => setPizzaType('rose')}
            >
              Base Rose
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredPizzas.map(pizzacard)}
          </div>
        </div>
      </div>
    );
  };
    
    export default Pizzas;
    
 
  