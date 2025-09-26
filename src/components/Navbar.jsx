/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [btn, setBtn] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={`${
        nav ? "no-doc-scroll" : ""
      } bg-bg flex items-center justify-between px-5 lg:px-20 py-5 fixed w-full z-10`}
    >
      <NavLink to="/">
        <div className="lg:w-[183px] w-[120px] h-[32px]">
          <img className="w-full h-full object-contain" src={logo} alt="logo" />
        </div>
      </NavLink>
      <ul className="hidden lg:flex items-center gap-5">
        <li>
          <NavLink
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive
                  ? "font-bold text-accent after:w-full"
                  : "font-normal text-black after:w-0"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive
                  ? "font-bold text-accent after:w-full"
                  : "font-normal text-black after:w-0"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full`
            }
            to="/about"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive
                  ? "font-bold text-accent after:w-full"
                  : "font-normal text-black after:w-0"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full`
            }
            to="/program"
          >
            Program
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive
                  ? "font-bold text-accent after:w-full"
                  : "font-normal text-black after:w-0"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full`
            }
            to="/volunteer"
          >
            Volunteer
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive
                  ? "font-bold text-accent after:w-full"
                  : "font-normal text-black after:w-0"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full`
            }
            to="/contact"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div>
        <NavLink>
          <div className="relative group">
            <motion.button
              className="hidden cursor-pointer bg-accent text-white w-[162px] py-3 rounded-full text-lg font-extrabold lg:flex items-center justify-center gap-2"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>Donate</p>
              <FaArrowRightLong />
            </motion.button>

            {/* Tooltip */}
            <span className="absolute left-1/2 -translate-x-1/2 top-14 bg-black text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <span className="animate-pulse text-sm">Coming soon...</span>
            </span>
          </div>
        </NavLink>

        <button
          className="lg:hidden z-[999] relative"
          onClick={() => setNav(!nav)}
        >
          {nav ? <IoMdClose size={25} /> : <IoMenu size={25} />}
        </button>
      </div>
      <div
        className={
          nav
            ? "z-50 translate-y-[-90px] h-[100vh] w-full bg-bg text-black absolute top-[90px] left-0 flex transition-all duration-500 px-5 pt-[20px]"
            : "absolute translate-y-[-90px] h-[100vh] w-full bg-bg bg-opacity-20 text-black top-[90px] left-[-100%] transition-all duration-[500ms] flex px-5 overflow-hidden z-50 pt-[20px]"
        }
      >
        <div className="w-full">
          <p className="text-xl font-bold mb-10">LearnwithGeorge</p>
          <ul className="flex flex-col text-center items-center pt-20 gap-[30px] text-lg">
            <li>
              <NavLink
                onClick={handleNav}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleNav}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleNav}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
                to="/program"
              >
                Program
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleNav}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
                to="/volunteer"
              >
                Volunteer
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleNav}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-normal"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="relative">
              {/* <NavLink> */}
              <motion.button
                onClick={() => setBtn(!btn)}
                className="cursor-pointer bg-[#bbb] text-white w-[162px] py-3 rounded-full text-lg font-extrabold flex items-center justify-center gap-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p>Donate</p>
                <FaArrowRightLong />
              </motion.button>
              {btn && (
                <div className="absolute left-1/2 -translate-x-1/2 top-14 bg-black text-white text-sm px-3 py-1 rounded-lg transition-opacity duration-300 whitespace-nowrap">
                  <span className="animate-pulse text-sm">Coming soon...</span>
                </div>
              )}
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
