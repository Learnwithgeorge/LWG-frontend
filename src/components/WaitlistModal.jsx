/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import WhiteBtn from "./WhiteBtn";
import { useForm } from "@formspree/react";
import { RiMailCheckFill } from "react-icons/ri";

export default function WaitlistModal({ name }) {
  const [state, handleSubmit] = useForm("xyznkakw");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="cursor-pointer bg-white text-accent w-fit px-5 h-[44px] rounded-lg text-lg font-extrabold flex items-center justify-center gap-2 shadow-lg"
      >
        Join waiting list
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              {state.succeeded ? (
                <div className="text-center grid gap-3 place-items-center py-6">
                  <div className="text-accent">
                    <RiMailCheckFill size={60} />
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    Thank you for joining the waitlist!
                  </p>
                  <p className="text-sm text-gray-600">
                    We’ll notify you when{" "}
                    <span className="font-bold">{name}</span> is available.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-center mb-2">
                    Join the Waiting List
                  </h2>
                  <p className="text-black text-center mb-6">
                    Be the first to access the new program when it launches.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                      type="hidden"
                      name="subject"
                      value={`Waitlist signup for ${name}`}
                    />
                    <input
                      type="hidden"
                      name="message"
                      value={`Please notify me when ${name} is available.`}
                    />

                    <div className="w-full">
                      <label
                        className="block text-accent font-bold"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="border border-accent rounded-lg px-4 py-2 w-full outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div className="w-full">
                      <label
                        className="block text-accent font-bold"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        required
                        className="border border-accent rounded-lg px-4 py-2 w-full outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div className="mx-auto">
                      <WhiteBtn loading={state.submitting} text="Notify Me" />
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
