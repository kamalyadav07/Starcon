import { Link } from "react-router-dom";

function Breadcrumb({ title }) {
  return (
    <section className="bg-[#1b365d] py-20 text-white">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>

        <div className="flex items-center gap-2 text-lg">

          <Link
            to="/"
            className="hover:text-orange-400"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-orange-400">
            {title}
          </span>

        </div>

      </div>

    </section>
  );
}

export default Breadcrumb;