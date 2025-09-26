import ServiceCard from "../../components/ServiceCard";
import SectionTitle from "../../components/SectionTitle";
import { servicesRendered } from "../../utils/constants";

export default function Services() {
  return (
    <section className="py-10">
      <SectionTitle subtitle="what we serve" title="Services" />
      <div className="flex lg:flex-row flex-col items-center gap-5 mt-10">
        {servicesRendered?.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}
