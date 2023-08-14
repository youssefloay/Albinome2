// src/components/Footer.js

import React from 'react';
import SocialButtons from './Socialmedia';

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="container mx-auto text-center">
        {/* Centered and resized Social Media Buttons */}
        

        <p className="mb-2 text-2xl">Heures d'ouverture :</p>
        <p className="text-lg">Mardi - Vendredi : 12h00 - 14h00 et 18h00 - 21h30</p>
        <p className="text-lg">Dimanche : 18h00 - 21h30</p>
        <p className="text-lg">Lundi : 12h00 - 14h00</p>
        <a href="tel:+33783814374" className="bg-white hover:bg-Albi text-black font-bold py-2 px-4 rounded mb-4 inline-block">
          07 83 81 43 74</a>
        <div className="mb-4 flex justify-center items-center">
          <SocialButtons />
        </div>
        <p className="bg-Albi pt-4">&copy; {new Date().getFullYear()} Albinome. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
