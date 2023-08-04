import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import Button from '../Button';
function Contact() {
  return (
    
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coordonnées de contact */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4">Coordonnées de contact</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <p>123 Rue du Food Truck, 75001 Paris</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-gray-500 mr-2" />
              <p>01 23 45 67 89</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-gray-500 mr-2" />
              <p>contact@foodtruck.com</p>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4">Formulaire de contact</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Adresse e-mail</label>
                <input type="email" id="email" name="email" placeholder="Votre adresse e-mail" className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" name="message" placeholder="Votre message" rows={5} className="w-full border border-gray-300 py-2 px-3 rounded-md focus:outline-none focus:ring focus:ring-blue-500"></textarea>
              </div>
              
                
            
            
            </form>
          </motion.div>
        </div>
        <div className="data-container bg-rose-100  flex justify-center items-center">
                  <Button />
                </div>
        {/* Carte */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="my-8"
        >
          <h2 className="text-xl font-semibold mb-4">Emplacement actuel</h2>
          <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' />
            <Marker position={[48.8566, 2.3522]}>
              <Popup>123 Rue du Food Truck, 75001 Paris</Popup>
            </Marker>
          </MapContainer>
        </motion.div>

        {/* Heures d'ouverture et jours de la semaine */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white p-4 rounded-md shadow-md mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Horaires d'ouverture</h2>
          <table className="w-full">
            <thead>
             
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>11h - 19h</td>
              </tr>
              <tr>
                <td>Mardi</td>
                <td>11h - 19h</td>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>11h - 19h</td>
              </tr>
              <tr>
                <td>Jeudi</td>
                <td>11h - 19h</td>
              </tr>
              <tr>
                <td>Vendredi</td>
                <td>11h - 19h</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>11h - 19h</td>
              </tr>
              <tr>
                <td>Dimanche</td>
                <td>Fermé</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Liens vers les profils de médias sociaux */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center items-center mb-8"
        >
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors mx-4"><FaFacebook /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors mx-4"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors mx-4"><FaInstagram /></a>
        </motion.div>

        {/* Informations sur les événements à venir ou les promotions spéciales */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Événements à venir et promotions spéciales</h2>

          {/* Exemple d'événement */}
          <motion.div className="flex items-center mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="bg-blue-500 text-white rounded-md mr-4 flex justify-center items-center w-12 h-12"
            >
              20<br />Juil
            </motion.div>
            <div>
              <p className="font-medium">Soirée à volonté !</p>
              <p>Le jeudi 22 juillet de 18h à 21h, venez déguster nos délicieux burgers à volonté pour seulement 15€ !</p>
            </div>
          </motion.div>

          {/* Exemple de promotion */}
          <motion.div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              className="bg-green-500 text-white rounded-md mr-4 flex justify-center items-center w-12 h-12"
            >
              -20%
            </motion.div>
            <div>
              <p className="font-medium">Promotion de l'été !</p>
              <p>Jusqu'au 31 août, profitez d'une réduction de 20% sur tous nos menus.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
