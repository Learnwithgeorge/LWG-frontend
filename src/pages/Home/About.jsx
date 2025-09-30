import about from "../../assets/about.png";
import WhiteBtn from "../../components/WhiteBtn";
import SectionTitle from "../../components/SectionTitle";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <section className="flex lg:flex-row flex-col items-center py-10 gap-10">
      <div>
        <div className="grid gap-10">
          <SectionTitle subtitle="who we are" title="about us" />
          <p className="lg:w-[90%]  lg:text-base text-sm font-medium">
            Learn with George Foundation is more than a nonprofit. We empower
            Africans and Africans in the diaspora with the skills to thrive in a
            technology-driven world. We believe talent is everywhere, but
            opportunity is not. Our mission is to bridge that gap through free,
            practical learning, mentorship and real-world project, preparing
            learners to turn knowledge into jobs, entrepreneurship and lasting
            impact.
          </p>
          <NavLink to="/about">
            <WhiteBtn text="Learn more" />
          </NavLink>
        </div>
      </div>
      <div>
        <div className="lg:w-[456px] w-full lg:h-[456px]">
          <img className="w-full h-full object-contain" src={about} alt="" />
        </div>
      </div>
    </section>
  );
}
