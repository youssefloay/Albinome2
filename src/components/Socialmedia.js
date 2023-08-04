import FacebookIcon from './facebook.svg';
import InstagramIcon from './instagram.svg';

const SocialButtons = () => {
  return (
    <div className="flex space-x-4">
      <button className=" hover:bg-blue-600 text-white rounded-full p-2">
        <img src={FacebookIcon} alt="Facebook" className="w-12 h-12" />
      </button>
      <button className=" hover:bg-purple-600 text-white rounded-full p-2">
        <img src={InstagramIcon} alt="Instagram" className="w-12 h-12" />
      </button>
    </div>
  );
};

export default SocialButtons;
