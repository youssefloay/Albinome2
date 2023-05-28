import React from 'react';
import Hero from "../Herosection";
import CardSection from '../Card';
import ContactInfo from '../Contactinfo';

export default function Home ()  {
    return (
        <div>
            <Hero/>
            <CardSection/>
            <ContactInfo/>

        </div>
    );
}