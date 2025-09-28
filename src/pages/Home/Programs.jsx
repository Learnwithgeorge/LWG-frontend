import ProgramCard from "../../components/ProgramCard";
import WhiteBtn from "../../components/WhiteBtn";
import SectionTitle from "../../components/SectionTitle";
import { programs } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

export default function Programs() {
  const navigate = useNavigate();
  return (
    <div className="px-5 lg:px-20 py-20 bg-white">
      <SectionTitle subtitle="what we offer" title="programs" />
      <div className="flex lg:flex-row flex-col items-stretch lg:gap-10 gap-5 mt-10">
        {programs?.slice(0, 3).map((program, i) => (
          <ProgramCard {...program} key={i} />
        ))}
      </div>
      <div className="grid place-items-center mt-10">
        <WhiteBtn onClick={() => navigate("/program")} text="View more" />
      </div>
    </div>
  );
}
