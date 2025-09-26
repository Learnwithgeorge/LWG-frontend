/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { AiFillTikTok } from "react-icons/ai";
import { FaArrowRightLong, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdMailUnread } from "react-icons/io";
import WhiteBtn from "./WhiteBtn";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <section className="bg-bg px-5 lg:px-20 py-10 flex lg:flex-row flex-col items-center justify-center gap-20">
        <div>
          <p className="lg:text-[48px] text-[28px] font-bold">
            LearnwithGeorge
          </p>
          <p className="lg:w-[411px] lg:text-xl mb-5">
            Learn with George Foundation provides free training in data
            analytics, data science and tech skills for Africans, Africans in
            the diaspora and underrepresented communities worldwide..
          </p>
          <HashLink smooth to="/contact#form">
            <motion.button
              className="cursor-pointer bg-accent text-white w-[162px] py-3 rounded-full text-lg font-extrabold flex items-center justify-center gap-2"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>Connect</p>
              <FaArrowRightLong />
            </motion.button>
          </HashLink>

          <div className="mt-10 flex flex-col lg:gap-5 gap-2">
            <div className="flex items-center text-accent gap-5">
              <div className="bg-white w-[50px] h-[50px] rounded-full grid place-items-center">
                <IoLogoWhatsapp size={25} />
              </div>
              <a
                className="font-bold"
                target="_blank"
                rel="noopener noreferrer"
                href="https://chat.whatsapp.com/GK2IbeGPbwOH77rgMXN3aZ"
              >
                +234 706 290 3225
              </a>
            </div>
            <div className="flex items-center text-accent gap-5">
              <div className="bg-white w-[50px] h-[50px] rounded-full grid place-items-center">
                <IoMdMailUnread size={25} />
              </div>
              <a
                href="mailto:learnwithgeorgejnr@gmail.com"
                className="font-bold"
              >
                learnwithgeorgejnr@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="h-[458px] w-1 bg-black hidden lg:block"></div>
        <div className="grid place-items-center">
          <div className="lg:w-[419px] lg:px-12">
            <p className="lg:text-[36px] text-3xl font-semibold">
              Sign up for our newsletter
            </p>
            <p className="lg:text-xl">
              Be the first to know about releases and industry news and
              insights.
            </p>
            <input
              className="bg-white lg:w-[360px] w-full p-3 rounded-md shadow-lg mt-7  mb-5"
              type="text"
              placeholder="Enter your email"
            />
            <WhiteBtn text="Subscribe" />
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="bg-white flex lg:flex-row flex-col items-center justify-between py-5 lg:w-[60%] w-full mx-auto">
          <p className="text-xs lg:text-base">
            © {date.getFullYear()} LearnwithGeorge . All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
