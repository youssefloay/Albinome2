import React from 'react';

function Button() {
  return (
    <button
      type="submit"
      className="btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors relative"
    >
      Envoyer
      <span className="absolute top-0 left-0 w-10 h-10 border-0 border-white transition-all duration-1000 after:before"></span>
      <span className="absolute bottom-0 right-0 w-10 h-10 border-0 border-white transition-all duration-1000 before:after"></span>
    </button>
  );
}

export default Button
  