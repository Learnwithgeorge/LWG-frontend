import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex gap-2 items-center text-sm font-bold px-5 w-fit lg:hidden"
    >
      <div className="shadow p-2 rounded-lg">
        <RiArrowGoBackFill size={16} />
      </div>
      <p>Go back</p>
    </button>
  );
}
