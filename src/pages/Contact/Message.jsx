import { useForm } from "@formspree/react";
import { RiMailCheckFill } from "react-icons/ri";
import WhiteBtn from "../../components/WhiteBtn";

export default function Message() {
  const [state, handleSubmit] = useForm("xvgwgjnj");

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white grid gap-5 rounded-2xl px-5 py-10 lg:w-fit w-full"
    >
      <div className="w-full">
        <label className="block mb-2 text-accent font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="border-[2px] border-[#123D6E] lg:w-[436px] w-full p-3 rounded-2xl placeholder:italic"
          type="text"
          placeholder="John Doe"
          name="name"
          id="name"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-accent font-bold" htmlFor="email">
          Email Address
        </label>
        <input
          className="border-[2px] border-[#123D6E] lg:w-[436px] w-full p-3 rounded-2xl placeholder:italic"
          type="email"
          placeholder="Johndoe@example.com"
          name="email"
          id="email"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-accent font-bold" htmlFor="message">
          Your Message
        </label>
        <textarea
          className="border-[2px] border-[#123D6E] lg:w-[436px] w-full p-3 rounded-2xl placeholder:italic"
          name="message"
          id="message"
          rows={5}
          required
        ></textarea>
      </div>
      <input type="hidden" name="subject" value="Contact Message" />

      <WhiteBtn text="Submit" loading={state.submitting} />
      {state.succeeded && (
        <div className="flex gap-2 items-center mt-2 text-green-500">
          <div className="">
            <RiMailCheckFill size={20} />
          </div>
          <p>Message Sent!</p>
        </div>
      )}
    </form>
  );
}
