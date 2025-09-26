import ReactPlayer from "react-player";

export default function Reviews() {
  return (
    <div className="px-5 lg:px-20 py-20 bg-white">
      <div className="text-center mb-10 lg:text-[36px] text-xl font-bold">
        <p>Testimonial</p>
      </div>
      <div className="grid place-items-center">
        <div className="flex items-center justify-center lg:w-[60%] w-full h-[250px] lg:h-[390px]">
          <ReactPlayer
            src="https://youtu.be/pqQ4laJGsjY?si=orGldSOFVHs3R02A"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
}
