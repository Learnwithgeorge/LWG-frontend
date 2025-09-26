import DetailBlocks from "../../components/DetailBlocks";
import ProgramCard from "../../components/ProgramCard";
import CourseContent from "../../components/CourseContent";
import FounderMessage from "../../components/FounderMessage";
import { useParams } from "react-router-dom";
import { programs } from "../../utils/constants";
import GoBack from "../../components/GoBack";

export default function Details() {
  const params = useParams();

  const currentProgram = programs?.filter(
    (program) => program.name === params?.id
  );

  return (
    <main className="font-monserrat bg-bg">
      <GoBack />
      <div className="px-5 lg:px-20 pt-20 bg-bg">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 mb-20 lg:mb-0 lg:min-h-[670px]">
          <div>
            <p className="uppercase text-[#10111A] lg:text-[30px] text-2xl font-semibold">
              PROGRAMS
            </p>
            <p className="lg:text-lg capitalize">Data Analysis with Excel</p>
          </div>
          <div className="lg:absolute lg:w-[420px] w-full lg:translate-x-1/2 lg:right-1/2">
            <ProgramCard details {...currentProgram[0]} />
          </div>
        </div>
        <div className="grid lg:gap-10 gap-5">
          <DetailBlocks block="Overview" text={currentProgram[0]?.overview} />
          <DetailBlocks
            block="Who this course is for"
            list={currentProgram[0]?.audience}
          />
          <DetailBlocks
            block="Why take this course"
            list={currentProgram[0]?.offer}
          />
          <DetailBlocks
            block="requirements"
            list={currentProgram[0]?.requirements}
          />
        </div>
        <div className="my-10">
          <CourseContent
            link={currentProgram[0]?.link}
            contents={currentProgram[0]?.content}
          />
        </div>
        <FounderMessage />
      </div>
    </main>
  );
}
