/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { MdOutlineCheck } from "react-icons/md";
import comp from "../../assets/comp.png";
import { FaArrowRightLong } from "react-icons/fa6";
import PaymentModal from "../../components/PaymentModal";

export default function Donation() {
  return (
    <main className="font-montserrat">
      <div className="px-5 lg:px-20 py-10 bg-bg">
        <div className="lg:w-[904px] mx-auto my-10">
          <p className="text-center lg:text-[48px] text-4xl font-bold text-[#222222] lg:w-[759px] w-full mx-auto">
            Empowering Africans with Free Data & Tech Skills
          </p>
          <p className="text-center lg:text-lg">
            We support young individuals in gaining industry-relevant skills
            that open doors to sustainable employment and entrepreneurship. Our
            programs focus on making vocational training more accessible and
            inclusive, especially for underserved and marginalized communities,
            helping bridge the gap between talent and opportunity.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-center lg:gap-20 gap-10 mt-16">
          <div className="grid gap-10 bg-white lg:p-10 p-5 rounded-xl lg:w-[607px] w-full">
            <p className="text-accent lg:text-[35px] text-2xl font-semibold">
              Donation Gateways:
            </p>
            <div>
              <p className="lg:text-2xl text-lg font-semibold text-black mb-2">
                Donate Online - with Credit/Debit Card, Mobile Money
              </p>
              <PaymentModal />
            </div>
            <div className="grid gap-3">
              <p className="lg:text-2xl text-lg font-semibold text-black">
                Donate by Bank Deposit
              </p>
              <p className="text-[#333333] lg:text-xl">Bank Name: DNKKDNKNK</p>
              <p className="text-[#333333] lg:text-xl">
                Account Name: FJNKNCKSKKSM
              </p>
              <p className="text-[#333333] lg:text-xl">Account Number: 002…</p>
            </div>
          </div>
          <div className="lg:w-[462px] w-full grid gap-5">
            <div className="w-full lg:h-[307px] overflow-hidden rounded-2xl">
              <img className="w-full h-full" src={comp} alt="" />
            </div>
            <div>
              <p className="font-semibold">
                Your Support Makes It Possible To:
              </p>
              <ul className="mt-3">
                {[
                  "Help millions of Africans gain access to high value digital literacy courses for free, empowering them to becomechange-makers.",
                  "Reach everyone with digital literacy skills, irrespective of their location or background.",
                  "Fund the ever growing need of resources to deliver online literacy courses.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <MdOutlineCheck color="#0044AA" size={20} />
                    <p className="flex-1">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
