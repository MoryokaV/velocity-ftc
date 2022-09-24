import ig from "../assets/icons/instagram.png";
import fb from "../assets/icons/facebook.png";
import GeneralData from "../data/general";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const openLink = (link) => window.open(link);

  return (
    <footer className="mt-auto w-full bg-gray-300 text-sm p-2 flex items-center justify-center gap-6 flex-wrap text-gray-600">
      <span className="flex gap-2 h-4 grayscale opacity-75 cursor-pointer">
        <img
          src={fb}
          alt="facebook logo"
          onClick={() => openLink(GeneralData.facebook)}
        />
        <img
          src={ig}
          alt="instagram logo"
          onClick={() => openLink(GeneralData.instagram)}
        />
      </span>
      <p>Copyright © {currentYear} Velocity</p>
      <span className="hidden w-16 sm:inline-block"></span>
      <a href={`mailto:${GeneralData.email}`} className="hover:text-black">
        {GeneralData.email}
      </a>
      <a href={`tel:${GeneralData.phone}`} className="hover:text-black">
        {GeneralData.phone}
      </a>
    </footer>
  );
};

export default Footer;
