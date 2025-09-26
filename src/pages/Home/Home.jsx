import About from "./About";
import Hero from "./Hero";
import Programs from "./Programs";
import Reviews from "./Reviews";
import Services from "./Services";
import Volunteer from "./Volunteer";

export default function Home() {
  return (
    <section className="font-montserrat">
      <div className="px-5 lg:px-20 py-10 bg-bg">
        <Hero />
        <About />
      </div>
      <Programs />
      <div className="px-5 lg:px-20 py-10 bg-bg">
        <Services />
        <Volunteer />
      </div>
      <Reviews />
    </section>
  );
}
