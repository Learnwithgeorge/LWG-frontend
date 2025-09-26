/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import learners from "../../assets/learners.png";
import Count from "../../components/Count";
import WhiteBtn from "../../components/WhiteBtn";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <motion.div
        className="w-full lg:h-[561px] bg-gradient-to-b to-accent from-primary rounded-[80px] p-5 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex lg:flex-row flex-col items-center gap-10 justify-between lg:pl-20 py-5 lg:py-0">
          <motion.div
            className="lg:w-[60%]"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3, delayChildren: 1 },
              },
            }}
          >
            <motion.p
              className="text-white lg:text-[40px] text-2xl mb-4 font-semibold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Empowering Africans with Free Data & Tech Skills
            </motion.p>

            <motion.p
              className="text-white text-xs lg:text-base"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Learn with George Foundation is a nonprofit data school providing
              free training in data analytics, data science and tech skills. We
              equip Africans, Africans in the diaspora and underrepresented
              communities worldwide with practical skills, real-world projects
              and confidence to build careers in tech.
            </motion.p>

            <motion.div
              className="flex lg:flex-row flex-col lg:items-center gap-5 mt-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 1.5,
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <NavLink to="/program">
                  <WhiteBtn text="Start a program" />
                </NavLink>
              </motion.div>

              <motion.p
                className="text-white text-sm font-black"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://chat.whatsapp.com/GK2IbeGPbwOH77rgMXN3aZ"
                >
                  JOIN OUR COMMUNITY
                </a>
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-[40%] lg:h-[425px] lg:translate-x-5 translate-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <img
              src={learners}
              className="w-full h-full object-contain"
              alt=""
            />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-[30%] bg-bg h-[120px] rounded-t-[80px] outline-bg border-bg">
          <div className="first"></div>
          <div className="second relative">
            <div className="absolute bg-bg lg:w-[100px] w-[110px] lg:h-[100px] h-[110px]"></div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-evenly gap-3 lg:py-20 py-14">
        <Count num={500} text="Number of Learners Trained" />
        <div className="lg:h-[70px] h-[30px] bg-black w-[2px]"></div>
        <Count num={90} text="Program Completion Rate" />
        <div className="lg:h-[70px] h-[30px] bg-black w-[2px]"></div>
        <Count num={1000} text="Community Members" />
        <div className="lg:h-[70px] h-[30px] bg-black w-[2px]"></div>
        <Count num={8} text="Global Reach" />
      </div>
    </div>
  );
}
