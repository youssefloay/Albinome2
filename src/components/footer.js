// src/components/Footer.js

import React from 'react';
import SocialButtons from './Socialmedia';

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="container mx-auto text-center">
        {/* Centered and resized Social Media Buttons */}
        

        <p className="mb-2">Heures d'ouverture :</p>
        <p>Mardi - Jeudi : 12h00 - 14h00 et 18h00 - 21h30</p>
        <p>Dimanche : 18h00 - 21h30</p>
        <p>Lundi : 12h00 - 14h00</p>
        <div className="mb-4 flex justify-center items-center">
          <SocialButtons />
        </div>
        <p className="bg-Albi py-4">&copy; {new Date().getFullYear()} Albinome. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
