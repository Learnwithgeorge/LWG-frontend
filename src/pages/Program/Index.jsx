import SectionTitle from "../../components/SectionTitle";
import ProgramCard from "../../components/ProgramCard";
import Services from "../Home/Services";
import { programs } from "../../utils/constants";

export default function Program() {
  return (
    <main className="font-monserrat">
      <div className="px-5 lg:px-20 py-20 bg-bg">
        <SectionTitle subtitle="what we offer" title="programs" />
        <div className="flex lg:flex-row flex-col items-stretch lg:gap-10 gap-5 mt-10">
          {programs?.slice(0, 3).map((program) => (
            <ProgramCard {...program} />
          ))}
        </div>
        <div className="flex lg:flex-row flex-col items-stretch lg:gap-10 gap-5 mt-10">
          {programs?.slice(3, 6).map((program) => (
            <ProgramCard {...program} />
          ))}
        </div>
      </div>
      <div className="px-5 lg:px-20 py-10 bg-bg">
        <Services />
      </div>
    </main>
  );
}
