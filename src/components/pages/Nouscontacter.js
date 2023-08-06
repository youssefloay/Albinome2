import React from 'react';
import SocialButtons from '../Socialmedia';
function ContactPage() {
  return (
    <div className="flex flex-wrap justify-center text-white">
      <div className="w-full md:w-1/2 p-4 flex items-center">
        <img src="/img/lgblanc.png" alt="Logo" className="max-auto md:w-auto mb-4 md:mb-0" />
      </div>

      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl mb-4 text-Albi mt-20">Où nous trouver</h1>
        <p className="mb-4">Notre emplacement fixe est au :</p>
        <p className="mb-4 font-bold">11 Rue Jean Rostand</p>
        <p className="mb-4">81000 ALBI</p>
        <h1 className="text-2xl mb-4  text-Albi">Nous contacter</h1>
        <p className="mb-4">Vous êtes professionnel ? Particulier ? Organisateur d’évènements ? Convention ? Festival ?..</p>
        <p className="mb-4">Nous nous déplaçons là où vous en avez besoin tout en s’adaptant à vos envies.</p>
        <p className="mb-4">Nous avons la capacité et surtout la volonté de venir vous rencontrer, contactez nous au :</p>
        <a href="tel:+33683814374" className="bg-white hover:bg-Albi text-black font-bold py-2 px-4 rounded mb-4 inline-block">
          07 83 81 43 74
        </a>
        <p className="mb-4">ou sur nos réseaux sociaux pour parler de vos envies.</p>
        <span><SocialButtons/> </span>
      </div>
    </div>
  );
}

export default ContactPage;
