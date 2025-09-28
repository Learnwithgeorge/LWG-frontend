import { useForm } from "@formspree/react";
import WhiteBtn from "./WhiteBtn";
import { useEffect, useState } from "react";
import { RiMailCheckFill } from "react-icons/ri";

export default function NewsLetter() {
  const [state, handleSubmit] = useForm("xjkagdgb");
  const [errors, setErrors] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrors("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors("Email address is invalid");
      return;
    }
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setEmail("");
      setErrors("");
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={onSubmit} className="lg:w-[419px] lg:px-12">
      <p className="lg:text-[36px] text-3xl font-semibold">
        Sign up for our newsletter
      </p>
      <p className="lg:text-xl">
        Be the first to know about releases and industry news and insights.
      </p>
      <input type="hidden" name="subject" value="Newsletter Sign Up" />
      <input
        type="hidden"
        name="message"
        value={`Please sign me up for the newsletter.`}
      />
      <input
        className="bg-white outline-none lg:w-[360px] w-full p-3 rounded-md shadow-lg mt-7  mb-5"
        type="text"
        placeholder="Enter your email"
        name="email"
        id="email"
        onChange={handleChange}
        value={email}
      />
      <WhiteBtn loading={state.submitting} text="Subscribe" />
      {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}

      {state.succeeded && (
        <div className="flex gap-2 items-center mt-2">
          <div className="text-accent">
            <RiMailCheckFill size={20} />
          </div>
          <p>Thank you for subscribing!</p>
        </div>
      )}
    </form>
  );
}
