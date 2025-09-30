import about from "../../assets/about.png";
import SectionTitle from "../../components/SectionTitle";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";
import { whatwedo } from "../../utils/constants";

export default function About() {
  return (
    <main className="font-montserrat px-5 lg:px-20 py-10 bg-bg">
      <section className="flex lg:flex-row flex-col-reverse items-center py-10 gap-10">
        <div>
          <div className="grid gap-10">
            <SectionTitle subtitle="who we are" title="about us" />
            <p className="lg:w-[90%]  lg:text-base text-sm font-medium">
              Learn with George Foundation is more than a nonprofit. We empower
              Africans and Africans in the diaspora with the skills to thrive in
              a technology-driven world. We believe talent is everywhere, but
              opportunity is not. Our mission is to bridge that gap through
              free, practical learning, mentorship and real-world project,
              preparing learners to turn knowledge into jobs, entrepreneurship
              and lasting impact.
            </p>
          </div>
        </div>
        <div>
          <div className="lg:w-[456px] w-full lg:h-[456px]">
            <img className="w-full h-full object-contain" src={about} alt="" />
          </div>
        </div>
      </section>

      <section className="py-10 gap-10">
        <div className="flex items-center gap-2 mb-10">
          <p className="lg:text-lg capitalize">What we do</p>
          <div className="lg:w-[80px] w-[40px] h-[1px] bg-black"></div>
        </div>
        <div className="flex flex-wrap gap-10">
          {whatwedo?.map((item) => (
            <div
              key={item?.id}
              className="bg-white p-5 rounded-2xl lg:w-[30%] w-full"
            >
              <p className="mb-2 font-bold lg:text-2xl text-lg">{item?.name}</p>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex lg:flex-row flex-col-reverse items-center py-10 gap-10">
        <div>
          <div className="grid gap-10">
            <SectionTitle subtitle="who we are" title="OUR MISSION" />
            <p className="lg:w-[90%]  lg:text-base text-sm font-medium">
              Our Mission To empower, educate and inspire Africans with
              technology and future-ready skills that open doors to jobs,
              entrepreneurship and meaningful impact. Through learning, we aim
              to transform not just individuals, but also families, communities
              and nations.
            </p>
          </div>
        </div>
        <div>
          <div className="lg:w-[456px] w-full lg:h-[456px]">
            <img
              className="w-full h-full object-contain"
              src={mission}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col items-center py-10 gap-10">
        <div>
          <div className="lg:w-[456px] w-full lg:h-[456px]">
            <img className="w-full h-full object-contain" src={vision} alt="" />
          </div>
        </div>
        <div>
          <div className="grid gap-10">
            <SectionTitle subtitle="who we are" title="OUR vision" />
            <p className="lg:w-[90%] lg:text-base text-sm font-medium">
              Our Vision We envision a future where Africans are not just
              consumers of technology, but leaders, innovators and creators
              driving solutions, shaping industries and solving some of the
              world’s toughest challenges.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
