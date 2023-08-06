import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function SocialButtons() {
  return (
    <div className="flex space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white rounded-full p-2">
        <FaFacebook className="w-12 h-12" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white rounded-full p-2">
        <FaInstagram className="w-12 h-12" />
      </a>
    </div>
  );
}

export default SocialButtons;
