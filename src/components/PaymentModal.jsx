/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import WhiteBtn from "./WhiteBtn";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PaymentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    amount: "",
    email: "",
  });

  function formatAmount(amount) {
    if (!amount) return "";
    let [integerPart, decimalPart] = amount.toString().split(".");
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  }

  const handleAmountChange = (e) => {
    // Remove commas before saving raw number
    const rawValue = e.target.value.replace(/,/g, "");
    // Only allow numbers and optional decimal
    if (/^\d*\.?\d*$/.test(rawValue)) {
      setData((prev) => ({ ...prev, amount: rawValue }));
    }
  };

  const handlePayment = (data) => {
    const handler = window.PaystackPop.setup({
      key: "pk_test_cace99d1c75a7ae590009409e039b6a6aaa3a066",
      email: data.email,
      amount: parseInt(Number(data.amount), 10) * 100,
      callback: function (response) {
        console.log(response);
      },
    });

    handler.openIframe();
  };

  return (
    <div>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-accent text-white w-[162px] py-3 rounded-full text-lg font-extrabold flex items-center justify-center gap-2"
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

              <h2 className="text-xl font-bold text-center mb-2">Donation</h2>
              <p className="text-black text-center mb-6">
                Please provide your email for your receipt
              </p>

              <div className="flex flex-col gap-4">
                <div className="w-full">
                  <label
                    className="block text-accent font-bold"
                    htmlFor="amount"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    name="amount"
                    id="amount"
                    onChange={handleAmountChange}
                    value={formatAmount(data.amount)}
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
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) =>
                      setData((prev) => {
                        return { ...prev, email: e.target.value };
                      })
                    }
                    value={data.email}
                    placeholder="johndoe@example.com"
                    className="border border-accent rounded-lg px-4 py-2 w-full outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="mx-auto">
                  <WhiteBtn
                    onClick={() => handlePayment(data)}
                    text="Make Donation"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
