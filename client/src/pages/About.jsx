import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";
import ScrollTop from "../components/layout/ScrollTop";

const equipmentImages = [
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=380&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=380&q=80",
  "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=380&q=80",
];

function About() {
  return (
    <>
      <Navbar />
      <FloatingButtons />

      <section className="min-h-[675px] bg-[#b4b1d0] px-4 py-[80px]">
        <div className="mx-auto w-[calc(100%_-_40px)] max-w-[680px] bg-[#fafafa] px-[30px] py-[31px] shadow-sm lg:w-[calc(100%_-_160px)]">
          <div className="grid gap-[32px] lg:grid-cols-[1fr_160px]">
            <article className="text-[10px] leading-[1.85] text-black">
              <h1 className="mb-[19px] text-[18px] font-normal uppercase tracking-[.3px]">
                WHO <span className="font-extrabold">WE ARE</span>
              </h1>

              <p className="mb-[24px] font-bold">
                In the year of 1995, a partnership firm named as Star
                Constructions was formed by Sh. Amit Lakhanpal and Sh. Baswant
                Singh to execute various construction works on contract basis.
                This firm was converted into Private Limited Company in the year
                of 2006. Later Sh. Raj Kamal Bhatia and Sh. Satish Sharma also
                joined the company in the year 2006.
              </p>

              <p className="mb-[18px]">
                The entrepreneurs worked together and moved ahead while creating
                a success story, on the route of mutual respect and
                understanding. Relentless hard work, commitment to maintain best
                quality standards in the construction industry and honesty has
                been the key factor in the phenomenal growth of our company.
              </p>

              <p className="mb-[18px]">
                We marched a long way since then and got rewards & recognition
                for our contribution in infrastructural growth of our country.
                Company&apos;s Registered Office is situated at C 101-102, II
                Floor Lajpat Nagar, New Delhi-110024.
              </p>

              <p className="mb-[22px]">
                Today our company is executing a large variety of construction
                projects with specialization in{" "}
                <strong>
                  Heavy Earth / Rock Excavation, Roads, Civil & Mechanical
                  Construction / Erection, Ground Engineering works etc.
                </strong>{" "}
                We are also equipped with whole range of construction & material
                handling equipment, earth movers and other support equipment of
                our own along with possessing expertise in their operation and
                repair maintenance.
              </p>

              <p className="mb-[26px]">
                We undertake complete responsibility & ownership of a project
                including management, coordination, liaison and execution. Also,
                we are committed to complete our orders within the time schedule
                and budgetary limits without any escalation.
              </p>

              <h2 className="mb-[15px] text-[18px] font-normal uppercase tracking-[.2px]">
                THE DYNAMIC <span className="font-extrabold">COOPERATION</span>
              </h2>

              <p className="mb-[18px]">
                At the heart, Star&apos;s momentum lay with a thorough
                understanding of constantly changing difficult working conditions
                & environment, never get contended with past performance /
                appreciations. Star&apos;s hallmark has throughout been its rock
                solid firm belief in own abilities and endeavor to persistently
                updating ourselves with forward and lateral thinking.
              </p>

              <p>
                Pledge to stand ahead of times, readiness to adopt new
                technologies & upgrade the existing one, bringing about novel
                structural reforms based upon systemic approach, quality control
                concepts, upgrading skills of professionals & laborers parallel
                with latest scientific developments and human HR approach is our
                constant source of energy.
              </p>
            </article>

            <aside className="bg-[#2f3e5b] p-[12px]">
              <p className="text-[9px] font-bold uppercase leading-none text-white">
                Our
              </p>
              <h2 className="mb-[16px] text-[13px] font-normal uppercase leading-none text-white">
                Equipment Bank
              </h2>

              <div className="space-y-[18px]">
                {equipmentImages.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    className="h-[75px] w-full object-cover"
                  />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <ScrollTop />
      <Footer />
    </>
  );
}

export default About;
