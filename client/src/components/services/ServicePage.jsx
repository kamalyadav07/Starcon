import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FloatingButtons from "../layout/FloatingButtons";

import ProjectsTable from "../common/ProjectsTable";

function ServicePage({ service }) {
  return (
    <>
      <Navbar />
      <FloatingButtons />

      {/* PAGE BG */}
      <section className="bg-[#c8bfd6] py-16 min-h-screen">

        <div className="max-w-7xl mx-auto px-4">

          {/* MAIN WHITE BOX */}
          <div className="bg-[#f7f7f7] p-8 md:p-10">

            <div className="grid lg:grid-cols-[2fr_0.8fr] gap-10">

              {/* LEFT CONTENT */}
              <div>

                {/* BANNER */}
                <img
                  src={service.banner}
                  alt={service.title}
                  className="w-full h-[220px] md:h-[320px] object-cover mb-8"
                />

                {/* TITLE */}
                <h1 className="text-[28px] md:text-[34px] font-bold text-black mb-6 leading-tight">
                  {service.title}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-[15px] leading-8 text-[#333] mb-10">
                  {service.description}
                </p>

                {/* TABLE */}
                <ProjectsTable projects={service.projects} />

              </div>

              {/* RIGHT SIDEBAR */}
              <div>

                {/* CONTACT BOX */}
                <div className="bg-[#24395d] text-white p-6 mb-8">

                  <h3 className="text-[24px] font-light mb-5 uppercase">
                    Get in Touch
                  </h3>

                  <p className="mb-3">
                    📞 011-4658 8660
                  </p>

                  <p>
                    ✉ info@starconinfra.in
                  </p>

                </div>

                {/* EQUIPMENT */}
                <div className="bg-[#24395d] p-5">

                  <p className="text-white text-[12px] uppercase mb-1">
                    Our
                  </p>

                  <h2 className="text-white text-[26px] font-light uppercase mb-6">
                    Equipment Bank
                  </h2>

                  <div className="space-y-4">

                    <img
                      src="/images/equipment/1.jpg"
                      alt=""
                      className="w-full h-40 object-cover"
                    />

                    <img
                      src="/images/equipment/2.jpg"
                      alt=""
                      className="w-full h-40 object-cover"
                    />

                    <img
                      src="/images/equipment/3.jpg"
                      alt=""
                      className="w-full h-40 object-cover"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ServicePage;