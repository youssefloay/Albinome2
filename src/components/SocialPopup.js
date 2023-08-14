import React, { useState } from 'react';

const SocialPopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={togglePopup}
        onBlur={closePopup} // Close the popup when focus is lost (clicked outside)
        className="bg-black text-Albi py-2 px-2 underline font-bold hover:bg-white focus:outline-none"
      >
nos réseaux sociaux      </button>
      {isOpen && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
       <div className="bg-white p-4 rounded shadow-lg">
         <ul className="py-1">
           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
             <a
               href="https://www.instagram.com/"
               target="_blank"
               rel="noopener noreferrer"
             >
               Instagram
             </a>
           </li>
           <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
             <a
               href="https://www.facebook.com/"
               target="_blank"
               rel="noopener noreferrer"
             >
               Facebook
             </a>
           </li>
         </ul>
       </div>
        </div>
      )}
      </div>
  );
};

export default SocialPopupButton;
