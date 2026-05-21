import servicesData from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

function ServicesGrid() {
  return (
    <section className="py-24 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-orange-500 uppercase tracking-[6px] text-sm mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1b365d] leading-tight">
            Infrastructure
            <br />
            Solutions
          </h2>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesGrid;