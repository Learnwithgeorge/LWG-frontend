import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="lg:text-lg capitalize">{subtitle}</p>
        <div className="lg:w-[80px] w-[40px] h-[1px] bg-black"></div>
      </div>
      <p className="uppercase text-[#10111A] lg:text-[30px] text-2xl font-semibold">
        {title}
      </p>
    </div>
  );
}
