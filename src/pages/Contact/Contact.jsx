import contact from "../../assets/contact.png";
import WhiteBtn from "../../components/WhiteBtn";

export default function Contact() {
  return (
    <main className="font-montserrat">
      <div className="px-5 lg:px-20 py-10 bg-bg">
        <div id="form" className="lg:w-[708px] mx-auto my-10">
          <p className="text-center lg:text-[48px] text-4xl font-bold text-[#222222]">
            Let's make impact together!
          </p>
          <p className="text-center">
            Join us in shaping the future of tech education! Whether you want to
            volunteer, partner, or support,{" "}
            <span className="font-bold">LEARNWITHGEORGE</span> welcomes you to
            make a difference. Together, we can empower more people with the
            skills to thrive in a digital world.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-10">
          <div className="w-full">
            <div className="bg-white grid gap-5 rounded-2xl px-5 py-10 lg:w-fit w-full">
              <div className="w-full">
                <label
                  className="block mb-2 text-accent font-bold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border-[2px] border-[#123D6E] lg:w-[436px] w-full p-3 rounded-2xl placeholder:italic"
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  id="name"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-accent font-bold"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="border-[2px] border-[#123D6E] lg:w-[436px] w-full p-3 rounded-2xl placeholder:italic"
                  type="text"
                  placeholder="Johndoe@example.com"
                  name="email"
                  id="email"
                />
              </div>

              <div>
                <label
                  className="block mb-2 text-accent font-bold"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  className="border-[2px] border-[#123D6E] lg:w-[436px] w-full p-3 rounded-2xl placeholder:italic"
                  name="message"
                  id="message"
                  rows={5}
                ></textarea>
              </div>

              <WhiteBtn text="Submit" />
            </div>
          </div>
          <div>
            <div className="lg:w-[650px]">
              <img
                className="w-full h-full object-contain"
                src={contact}
                alt="contact icon"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
