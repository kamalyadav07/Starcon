import { Link } from "react-router-dom";

const services = [
  {
    title: "Hydropower Dams & Tunnelling",
    href: "/hydropower",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=620&q=80",
  },
  {
    title: "Roadworks",
    href: "/roadworks",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=620&q=80",
  },
  {
    title: "Township Development",
    href: "/township-development",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=620&q=80",
  },
  {
    title: "Ground Engineering",
    href: "/ground-engineering",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=620&q=80",
  },
  {
    title: "Warehouse Construction",
    href: "/warehouse-construction",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=620&q=80",
  },
  {
    title: "Public Health Engineering",
    href: "/public-health-engineering",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=620&q=80",
  },
  {
    title: "Metros",
    href: "/metros",
    image:
      "https://images.unsplash.com/photo-1517422240428-a5a00ad493e8?auto=format&fit=crop&w=620&q=80",
  },
  {
    title: "Earthworks",
    href: "/earthworks",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=620&q=80",
  },
];

function Hero() {
  return (
    <main className="relative overflow-hidden bg-[#55548a]">
      <section
        className="relative mx-auto min-h-[710px] max-w-[1500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=2200&q=90')",
        }}
      >
        <div className="absolute inset-0 bg-[#9b86c4]/18" />

        <div className="absolute inset-x-0 top-[58px] z-10 text-center text-white">
          <h1 className="text-[28px] font-normal uppercase leading-none tracking-[.8px] md:text-[36px]">
            What We Think, <span className="font-extrabold">We Become</span>
          </h1>
          <p className="mt-[14px] text-[14px] font-extrabold uppercase">
            -Buddha-
          </p>
        </div>

        <div className="relative z-10 mx-auto grid w-[calc(100%_-_40px)] max-w-[1088px] grid-cols-1 gap-x-[26px] gap-y-[34px] px-5 pt-[198px] sm:grid-cols-2 lg:w-[calc(100%_-_160px)] lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group relative h-[176px] overflow-hidden bg-white shadow-[0_1px_2px_rgba(0,0,0,.35)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_34px_rgba(0,0,0,.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#17365d]/0 transition duration-300 group-hover:bg-[#17365d]/18" />
              <div className="absolute inset-x-0 bottom-0 flex h-[55px] items-center justify-center bg-black/82 px-3 text-center text-[14px] font-bold text-white transition duration-300 group-hover:h-[64px] group-hover:bg-black/90">
                {service.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Hero;
