/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  const icons = [
    {
      href: "https://chat.whatsapp.com/GK2IbeGPbwOH77rgMXN3aZ",
      icon: <IoLogoWhatsapp size={20} />,
    },
    {
      href: "https://www.tiktok.com/@learnwithgeorgejnr/",
      icon: <AiFillTikTok size={20} />,
    },
    {
      href: "https://www.youtube.com/@Learnwithgeorgejnr",
      icon: <FaYoutube size={20} />,
    },
    {
      href: "https://www.linkedin.com/company/learnwithgeorge/",
      icon: <FaLinkedin size={20} />,
    },
  ];

  return (
    <div className="flex items-center gap-5 mt-5 lg:mt-0">
      {icons.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-black hover:text-accent transition-colors duration-300"
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
