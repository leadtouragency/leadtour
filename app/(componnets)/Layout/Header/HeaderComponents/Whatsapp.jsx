import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <a
      href="#"
      className="flex items-center gap-2 capitalize bg-[--bg-green-wp] text-[--colorWhite] w-max py-2 px-8 rounded-lg"
    >
      <FaWhatsapp />
      WhatsApp
    </a>
  );
};

export default Whatsapp;
