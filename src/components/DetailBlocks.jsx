export default function DetailBlocks({ block, text, list }) {
  return (
    <div className="lg:w-[800px] w-full mx-auto">
      <div className="bg-[#EEEEEE] rounded-lg lg:py-5 py-3 lg:px-10 px-5">
        <p className="lg:text-[35px] text-[20px] font-bold capitalize">
          {block}
        </p>
      </div>
      <div className="lg:py-5 py-3 lg:px-10 px-5 lg:text-base text-sm">
        <p>{text}</p>
        <ul className="list-disc">
          {list?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
