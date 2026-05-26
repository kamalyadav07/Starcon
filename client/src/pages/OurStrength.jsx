import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";
import ScrollTop from "../components/layout/ScrollTop";

function OurStrength() {
  return (
    <>
      <Navbar />
      <FloatingButtons />

      {/* PAGE BG */}
      <section className="bg-[#c8bfd6] py-16 min-h-screen">

        <div className="max-w-7xl mx-auto px-4">

          {/* WHITE BOX */}
          <div className="bg-[#f7f7f7] p-8 md:p-10">

            {/* BANNER */}
            <img
              src="/images/common/strengths.jpg"
              alt="Our Strength"
              className="w-full h-[320px] object-cover mb-10"
            />

            {/* TITLE */}
            <h1 className="text-[40px] font-bold uppercase mb-12">
              Our Strength
            </h1>

            {/* CONTENT */}
            <div className="space-y-8 text-[15px] leading-8 text-[#333]">

              <p>
                Starcon Infra Projects has established itself as a trusted
                infrastructure company through years of commitment,
                technical expertise and project execution capabilities.
              </p>

              <p>
                The company owns and operates a large equipment bank,
                enabling efficient and timely completion of projects across
                India.
              </p>

              <p>
                Starcon Infra diversified into Ground Engineering works
                in 2011 through M/S IPEX Infrastructure and strengthened
                its capabilities in specialized infrastructure projects.
              </p>

              <p>
                In 2014, the company entered Hydropower projects in
                Jammu & Kashmir, Uttarakhand and Assam, successfully
                executing tunnelling and excavation works.
              </p>

              <p>
                In 2015, tunnel construction works were expanded through
                Starcon-HKS JV, enhancing the company’s expertise in
                underground infrastructure development.
              </p>

              <p>
                Our highly experienced management team, skilled workforce,
                modern machinery and dedication towards quality execution
                remain the key strengths of the organization.
              </p>

              <p>
                Starcon Infra continues to deliver infrastructure solutions
                with focus on safety, quality and timely project completion.
              </p>

            </div>

          </div>

        </div>

      </section>

      <ScrollTop />

      <Footer />
    </>
  );
}

export default OurStrength;