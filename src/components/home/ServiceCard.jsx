import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <Link
      to={service.slug}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
    >

      {/* Image */}
      <div className="overflow-hidden h-60">

        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-2xl font-bold text-[#1b365d] leading-snug group-hover:text-orange-500 transition">
          {service.title}
        </h3>

      </div>

    </Link>
  );
}

export default ServiceCard;