import React from "react";
import WhiteBtn from "./WhiteBtn";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ name, img, brief }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAFAFA] rounded-2xl lg:w-[306px] drop-shadow-2xl">
      <div className="w-full h-[194px] rounded-t-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={img}
          alt=""
        />
      </div>

      <div className="p-5">
        <p className="lg:text-lg font-bold text-[#30312C] mb-2">{name}</p>
        <p className="mb-5 text-xs lg:text-sm">{brief}</p>
        <WhiteBtn
          onClick={() => navigate(`/service/${encodeURIComponent(name)}`)}
          text="Learn more"
        />
      </div>
    </div>
  );
}
