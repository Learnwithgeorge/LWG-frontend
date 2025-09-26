import peer from "../../assets/peer.png";
import SectionTitle from "../../components/SectionTitle";
import WhiteBtn from "../../components/WhiteBtn";
import { useNavigate } from "react-router-dom";

export default function Volunteer() {
  const navigate = useNavigate();

  return (
    <div className="py-10">
      <SectionTitle subtitle="Want to Join the movement" title="VOLUNTEER" />
      <section className="flex lg:flex-row flex-col items-center lg:gap-40">
        <div>
          <div className="lg:w-[400px] w-full h-[400px]">
            <img className="w-full h-full object-contain" src={peer} alt="" />
          </div>
        </div>
        <div>
          <div className="grid gap-10">
            <div className="grid gap-5 font-medium lg:text-base text-sm">
              <p>
                Volunteer with Us Join our team to make an impact! You can
                mentor learners, facilitate training sessions, or support our
                community, helping others grow while sharing your skills and
                experience.
              </p>
              <p>
                Become a Volunteer Join Learn with George Foundation and help us
                empower learners across Africa and the diaspora. Share your
                expertise, guide learners, or support our growing community
                there’s a role for you!
              </p>
              <p>
                Mentor Guide learners through challenges, provide career advice,
                and help them apply skills in real-world projects. Flexible
                commitment 1-2 hours per week.
              </p>
              <p>
                Tutor / Facilitator Teach sessions, run workshops, or create
                learning content. Share your knowledge in Excel, SQL, Power BI,
                Python, data science, or other tech skills.
              </p>
              <p>
                Community Support Help manage WhatsApp/Telegram groups, moderate
                discussions and organize events. Ensure our community is
                welcoming, engaging and thriving.
              </p>
            </div>
            <WhiteBtn
              onClick={() => navigate("/volunteer")}
              text="Become a Volunteer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
