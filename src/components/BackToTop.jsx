import { useEffect, useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBtn(true);
      } else setShowBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBtn, window.scrollY]);

  return (
    <div className="fixed bottom-[32px] right-5 md:right-[60px] cursor-pointer flex flex-col items-end gap-2 z-50">
      {showBtn ? (
        <button
          onClick={scroll}
          className="bg-white z-20 shadow-md inline-flex items-center justify-center w-[48px] h-[48px] rounded-full cursor-pointer"
        >
          <IoChevronUpSharp size={20} />
        </button>
      ) : null}
    </div>
  );
};

export default BackToTop;
