import { useParams } from "react-router-dom";
import DetailBlocks from "../../components/DetailBlocks";
import { servicesRendered } from "../../utils/constants";
import WhiteBtn from "../../components/WhiteBtn";
import GoBack from "../../components/GoBack";
import { useState } from "react";

export default function ServicesDetails() {
  const params = useParams();
  const [btn, setBtn] = useState(false);

  const currentService = servicesRendered?.filter(
    (program) => program.name === params?.id
  );

  const { name, description, notes, steps } = currentService[0];

  return (
    <main className="font-monserrat bg-bg pt-5 lg:pt-0">
      <GoBack />
      <div className="px-5 lg:px-20 py-20 bg-bg">
        <div className="lg:w-[800px] w-full mx-auto">
          <p className="text-center lg:text-[64px] text-3xl font-bold text-[#222222] lg:w-[670px] w-full mx-auto mb-2">
            {name}
          </p>
          <p className="text-center">{description}</p>
        </div>
        <div className="mt-10">
          <div className="lg:w-[800px] w-full mx-auto mb-10">
            <div className="bg-[#EEEEEE] rounded-lg lg:py-5 py-3 lg:px-10 px-5">
              <p className="lg:text-[35px] text-[20px] font-bold capitalize">
                How It Works
              </p>
            </div>
            <div className="lg:py-5 py-3 lg:px-10 px-5 lg:text-base text-sm">
              {name.includes("Certification") && (
                <p>
                  To make sure you get your certificate quickly and without
                  stress, please follow these steps:
                </p>
              )}
              <ol className="list-decimal grid gap-5 translate-x-5 mt-5">
                {steps?.map((step, i) => (
                  <li key={i} className="font-semibold">
                    <div>
                      <p>{step?.title}</p>
                      <ul className="font-normal lg:translate-x-5">
                        {step?.step?.map((item, i) => (
                          <li
                            key={i}
                            className={`${
                              item.list?.length === 0 ? "" : "list-disc"
                            }`}
                          >
                            <p>{item.list}</p>
                            <div>
                              <ul className="">
                                {item?.sublist?.map((list, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2"
                                  >
                                    <div className="w-2 h-2 bg-[#333333]"></div>
                                    <p className="flex-1">{list}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="grid place-items-center mt-10">
                <div className="relative group">
                  {name.includes("Certification") ? (
                    <WhiteBtn onClick={() => setBtn(!btn)} text="Book a Call" />
                  ) : (
                    <WhiteBtn
                      onClick={() => setBtn(!btn)}
                      text="Book an Appointment"
                    />
                  )}

                  {btn && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-14 bg-black text-white text-sm px-3 py-1 rounded-lg transition-opacity duration-300 whitespace-nowrap">
                      <span className="animate-pulse text-sm">
                        Coming soon...
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <DetailBlocks block="Important Notes" list={notes} />
        </div>
      </div>
    </main>
  );
}
