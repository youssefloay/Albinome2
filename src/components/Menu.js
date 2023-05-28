import React, { useState } from 'react';


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
    {
      name: 'FROMAGERE',
      price: 9.50,
      ingredients: ['Crème fraîche', 'Emmental', 'Chèvre', 'Roquefort', 'Mozzarella'],
    },
    {
      name: 'TARTIFLETTE',
      price: 9.50,
      ingredients: ['Crème fraîche', 'Emmental', 'Oignons confits', 'Reblochon', 'Pomme de terre', 'Lardons'],
    },
    {
      name: 'ABEILLE',
      price: 9.50,
      ingredients: ['Crème fraîche', 'Emmental', 'Chèvre', 'Amandes', 'Miel'],
    },
    {
      name: 'POULETTE',
      price: 9.50,
      ingredients: ['Crème fraîche', 'Emmental', 'Jambon', '2 oeufs'],
    },
    {
      name: 'REINE BLANCHE',
      price: 9.50,
      ingredients: ['Crème fraîche'],
    },
    
  ];
  const rosePizzas = [
    {
      name: 'FROMAGERE',
      price: 9.50,
      ingredients: [' Rose', 'Emmental', 'Chèvre', 'Roquefort', 'Mozzarella'],
    },
  ]
  const pizzas = redPizzas.concat(whitePizzas);
  
    return (
      <div className="px-4">
        <div>
          <h1 className="text-center text-3xl font-bold mb-8">Carte</h1>
          <h2 className="text-center italic text-xl mb-4">
            Pour les services quotidiens du midi, repartez avec une pizza, un plat différent chaque jour ainsi que nos desserts maison.
            <div className="mt-8">Le soir est uniquement consacré aux pizzas !</div>
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
            {pizzaType === 'red'
              ? redPizzas.map((pizza) => (
                  <div key={pizza.name} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold">{pizza.name}</h3>
                    <p className="text-gray-600 mt-2">Price: {pizza.price} €</p>
                    <ul className="mt-4 space-y-2">
                      {pizza.ingredients.map((ingredient) => (
                        <li key={ingredient} className="text-gray-600">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                ))
              : pizzaType === 'rose'
                ? rosePizzas.map((pizza) => (
                    <div key={pizza.name} className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold">{pizza.name}</h3>
                      <p className="text-gray-600 mt-2">Price: {pizza.price} €</p>
                      <ul className="mt-4 space-y-2">
                        {pizza.ingredients.map((ingredient) => (
                          <li key={ingredient} className="text-gray-600">{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                : whitePizzas.map((pizza) => (
                    <div key={pizza.name} className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold">{pizza.name}</h3>
                      <p className="text-gray-600 mt-2">Price: {pizza.price} €</p>
                      <ul className="mt-4 space-y-2">
                        {pizza.ingredients.map((ingredient) => (
                          <li key={ingredient} className="text-gray-600">{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  ))
            }
          </div>
        </div>
      </div>
    );
  };
    
    export default Pizzas;
    
 
  