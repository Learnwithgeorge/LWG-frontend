import { useNavigate } from "react-router-dom";
import WhiteBtn from "./WhiteBtn";
import WaitlistModal from "./WaitlistModal";

export default function ProgramCard({ details, img, name, brief, status }) {
  const navigate = useNavigate();

  return (
    <div className="hover:bg-[#e2f2ff] border border-[#FAFAFA] hover:border-[#134074] transition-all duration-200 ease-in-out cursor-pointer bg-[#FAFAFA] lg:p-10 p-5 rounded-2xl w-fit flex flex-col">
      <div className="w-full h-[219px] rounded-2xl overflow-hidden">
        <img className="w-full h-full object-cover" src={img} alt="" />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="px-3 py-1 text-[#008000] lg:text-xs text-[8px] mt-5 rounded-full bg-[#EFE5DC] w-fit">
            <p>{status}</p>
          </div>

          <div className="mt-5">
            <p className="lg:text-2xl font-bold text-[#30312C]">{name}</p>
            <p className="mb-5 text-sm lg:text-base">{brief}</p>
          </div>
        </div>
        {!details && status.toLowerCase() === "active" ? (
          <WhiteBtn
            onClick={() => {
              if (status.toLowerCase() === "active") {
                navigate(`/program/${encodeURIComponent(name)}`);
              }
            }}
            text="Learn more"
          />
        ) : (
          !details && <WaitlistModal name={name} />
        )}
      </div>
    </div>
  );
}
