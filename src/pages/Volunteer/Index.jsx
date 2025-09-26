import peer from "../../assets/peer.png";
import mentor from "../../assets/mentor.png";
import tutor from "../../assets/tutor.png";
import content from "../../assets/content.png";
import community from "../../assets/community.png";
import WhiteBtn from "../../components/WhiteBtn";
import SectionTitle from "../../components/SectionTitle";
import { NavLink } from "react-router-dom";

export default function Volunteer() {
  return (
    <main className="font-montserrat">
      <div className="px-5 lg:px-20 py-10 bg-bg">
        <SectionTitle subtitle="What you can offer" title="VOLUNTEER" />
        <div className="lg:w-[608px] mx-auto my-10">
          <p className="text-center lg:text-[48px] text-4xl font-bold text-[#222222]">
            Interested in joining our volunteer team?
          </p>
        </div>
        <section className="flex lg:flex-row flex-col-reverse items-center lg:gap-40">
          <div className="grid gap-10">
            <p className="uppercase text-[#10111A] lg:text-[30px] text-2xl font-semibold">
              Become a Volunteer.
            </p>
            <div className="font-medium lg:text-base text-sm">
              <p>
                At Learn with George, our community thrives because people like
                you choose to give their time, skills and heart. We welcome
                volunteers from diverse backgrounds who want to empower learners
                across Africa, Africans in the diaspora and underrepresented
                communities worldwide. Whether you are a teacher, a mentor, a
                storyteller or someone helping build community spirit, you play
                a vital role in shaping futures. Here’s how you can get
                involved:
              </p>
            </div>
            <a
              href="https://forms.gle/qK9EsNDvdLAyUCTd8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhiteBtn text="Join Us" />
            </a>
          </div>
          <div>
            <div className="lg:w-[400px] w-full h-[400px]">
              <img className="w-full h-full object-contain" src={peer} alt="" />
            </div>
          </div>
        </section>

        <section className="flex lg:flex-row flex-col items-center lg:gap-40 my-20">
          <div>
            <div className="lg:w-[400px] w-full h-[400px]">
              <img
                className="w-full h-full object-contain"
                src={mentor}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-10">
            <p className="uppercase text-[#10111A] lg:text-[30px] text-2xl font-semibold">
              Become a Mentor.
            </p>
            <div className="font-medium lg:text-base text-sm">
              <p>
                <span className="font-semibold">Mentors</span> - The Guides and
                Encouragers
              </p>
              <ul className="list-disc translate-x-5 grid gap-2 mt-2">
                <li>
                  What you will do: Offer career advice, review projects, share
                  your journey and provide one-on-one or small-group guidance.
                </li>
                <li>
                  Time commitment: Just 1-2 hours per week can open up a
                  lifetime of opportunity for a learner.
                </li>
                <li>
                  Impact: You will help learners stay motivated, focused and
                  confident as they navigate challenges and dream of bigger
                  futures.
                </li>
              </ul>
            </div>
            <a
              href="https://forms.gle/qK9EsNDvdLAyUCTd8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhiteBtn text="Join Us" />
            </a>
          </div>
        </section>

        <section className="flex lg:flex-row flex-col-reverse items-center lg:gap-40">
          <div className="grid gap-10">
            <p className="uppercase text-[#10111A] lg:text-[30px] text-2xl font-semibold">
              Tutor / Facilitator
            </p>
            <div className="font-medium lg:text-base text-sm">
              <p>
                <span className="font-semibold">Tutors & Instructors</span> -
                The Knowledge Sharers
              </p>
              <ul className="list-disc translate-x-5 grid gap-2 mt-2">
                <li>
                  What you will do: Teach live sessions, design practical
                  challenges, create guides or templates and run workshops.
                </li>
                <li>
                  Skills we are looking for: Excel, SQL, Power BI, Python, data
                  storytelling or general data literacy.
                </li>
                <li>
                  Impact: You will directly transfer skills to learners who may
                  be taking their very first steps into data and tech, building
                  confidence and employ-ability along the way.
                </li>
              </ul>
            </div>
            <a
              href="https://forms.gle/qK9EsNDvdLAyUCTd8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhiteBtn text="Join Us" />
            </a>
          </div>
          <div>
            <div className="lg:w-[400px] w-full h-[400px]">
              <img
                className="w-full h-full object-contain"
                src={tutor}
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="flex lg:flex-row flex-col items-center lg:gap-40 my-20">
          <div>
            <div className="lg:w-[400px] w-full h-[400px]">
              <img
                className="w-full h-full object-contain"
                src={community}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-10">
            <p className="uppercase text-[#10111A] lg:text-[30px] text-2xl font-semibold">
              Community Support
            </p>
            <div className="font-medium lg:text-base text-sm">
              <p>
                <span className="font-semibold">Community Support Team</span> -
                The Builders of Belonging
              </p>
              <ul className="list-disc translate-x-5 grid gap-2 mt-2">
                <li>
                  What you will do: Welcome new members, moderate discussions,
                  answer questions and make sure WhatsApp/Telegram spaces remain
                  safe, respectful, and engaging.
                </li>
                <li>
                  Skills we are looking for: Communication, empathy, patience
                  and organization.
                </li>
                <li>
                  Impact: You will be the friendly face that makes people feel
                  at home, keeping our community buzzing with energy and
                  positivity.
                </li>
              </ul>
            </div>
            <a
              href="https://forms.gle/qK9EsNDvdLAyUCTd8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhiteBtn text="Join Us" />
            </a>
          </div>
        </section>

        <section className="flex lg:flex-row flex-col-reverse items-center lg:gap-40 mb-20">
          <div className="grid gap-10">
            <p className="uppercase text-[#10111A] lg:text-[30px] text-2xl font-semibold">
              Content Creator
            </p>
            <div className="font-medium lg:text-base text-sm">
              <p>
                <span className="font-semibold">
                  Content Creators & Storytellers
                </span>{" "}
                - The Voices of the Movement
              </p>
              <ul className="list-disc translate-x-5 grid gap-2 mt-2">
                <li>
                  What you will do: Create videos, info graphics, blog posts, or
                  social content that educate, inspire and celebrate learner
                  wins.
                </li>
                <li>
                  Skills we are looking for: Writing, visual design, video
                  editing or a passion for storytelling.
                </li>
                <li>
                  Impact: You will help us amplify our mission, attract new
                  learners and volunteer and show the world what’s possible when
                  communities come together.
                </li>
              </ul>
            </div>
            <a
              href="https://forms.gle/qK9EsNDvdLAyUCTd8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhiteBtn text="Join Us" />
            </a>
          </div>
          <div>
            <div className="lg:w-[400px] w-full h-[400px]">
              <img
                className="w-full h-full object-contain"
                src={content}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
