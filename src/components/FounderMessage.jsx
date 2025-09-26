import founder from "../assets/founder.png";

export default function FounderMessage() {
  return (
    <div className="lg:w-[800px] w-full mx-auto text-center">
      <p className="lg:text-[30px] text-[20px] font-bold">FOUNDER’S MESSAGE</p>
      <div className="mx-auto lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] my-5 rounded-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={founder}
          alt="George Okata"
        />
      </div>
      <p className="lg:text-[24px] text-lg font-semibold">George Okata</p>
      <p className="text-[#333333] lg:text-base text-sm mt-5">
        Your journey to impact starts here. At Learn with George Foundation, we
        believe in your potential to turn skills into real-world opportunities.
        Through practical projects, mentorship and community support. You will
        gain the confidence, knowledge and experience to launch a career in tech
        and build portfolio-ready projects. Join a cohort today and take the
        first step toward transforming your skills into a meaningful future.
      </p>
    </div>
  );
}
