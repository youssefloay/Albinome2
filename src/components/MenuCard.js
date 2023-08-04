import React from 'react';

function MenuCard(props) {
  return (
    
    <div className="flex flex-col md:flex-row w-full rounded-md px-4 py-4 justify-between gap-3 border-2 border-gray-300 my-2 mx-2">
      <div className="flex flex-col flex-grow">
        <div className="flex items-center">
          {props.isVegetarian && (
            <span className="bg-green-500 text-white rounded-full p-1 mr-2">V</span>
          )}
          <h3 className="font-bold text-lg text-Cool-Gray">{props.name}</h3>
        </div>
        <p className="text-sm font-serif" style={{ wordWrap: 'break-word', wordBreak: 'break-all', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {props.ingredients.toString().split(' ').join(' ')}
        </p>
      </div>
      <div className="flex items-center justify-end mt-4 md:mt-0">
        <p className="font-bold text-lg">{props.price} €</p>
      </div>
    </div>
  );
}

export default MenuCard;
