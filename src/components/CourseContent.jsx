import { useState } from "react";
import { CgRadioCheck } from "react-icons/cg";
import { IoChevronForward } from "react-icons/io5";
import WhiteBtn from "./WhiteBtn";

export default function CourseContent({ contents, link }) {
  const [selected, setSelected] = useState(null);

  function toggle(i) {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  const item = contents?.map((item, i) => {
    return (
      <div
        key={i}
        className="item w-full rounded-[13px] py-2 duration-200 ease-linear transition-all font-montserrat"
      >
        <div
          className={`title flex justify-between lg:items-center items-start cursor-pointer bg-[#123D6F] lg:px-10 px-5 py-5 transition-all duration-500 ease-in-out ${
            selected === i ? "rounded-t-2xl" : "rounded-2xl"
          }`}
          onClick={() => toggle(i)}
        >
          <h3 className="font-bold text-white md:w-auto lg:text-lg text-sm">
            {`Week ${i + 1}`} - {item.name}
          </h3>
          <div
            className={`w-[28px] h-[28px] rounded-full grid place-items-center duration-200 ease-linear transition-all text-white`}
          >
            <IoChevronForward
              className={`${
                selected === i ? "rotate-90" : ""
              } duration-200 ease-linear transition-all`}
            />
          </div>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out grid gap-2 overflow-hidden ${
            selected === i
              ? "max-h-[500px] opacity-100 mt-2"
              : "max-h-0 opacity-0"
          }`}
        >
          {item?.lessons?.map((lesson, i) => (
            <div
              key={i}
              className={`flex items-start lg:gap-5 gap-2 py-4 lg:px-5 px-3 bg-white ${
                item?.lessons?.length === i + 1 ? "rounded-b-2xl" : "rounded-md"
              }`}
            >
              <CgRadioCheck size={20} color="#E2E7ED" />
              <p className="text-[#6F6C8F] lg:text-base text-xs font-medium">
                {lesson}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  });
  return (
    <div className="lg:w-[800px] w-full mx-auto lg:px-10 py-10 px-5 drop-shadow-sm rounded-lg bg-bg">
      <p className="text-2xl text-[#333333] font-semibold mb-10">
        Course Content
      </p>
      <div>{item}</div>
      <div className="grid place-items-center mt-10">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <WhiteBtn text="Register" />
        </a>
      </div>
    </div>
  );
}
