import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";
import ScrollTop from "../components/layout/ScrollTop";

function ShePolicy() {
  return (
    <>
      <Navbar />
      <FloatingButtons />

      <section className="min-h-[780px] bg-[#b4b1d0] px-4 pb-[28px] pt-[23px]">
        <div className="mx-auto max-w-[732px] bg-[#fbfbfb] px-[31px] pb-[31px] pt-[22px]">
          <div className="mb-[24px] flex h-[162px] items-center justify-center overflow-hidden border-[5px] border-[#f0f0e8] bg-[radial-gradient(circle_at_25%_42%,#eefbbf_0,#f9fae9_35%,#edf4df_100%)]">
            <div className="relative flex w-full items-center justify-center gap-[34px]">
              <div className="relative h-[108px] w-[190px]">
                <div className="absolute left-[42px] top-[20px] h-[72px] w-[72px] rounded-full bg-[#69b82d] opacity-90 [clip-path:polygon(50%_0,100%_60%,50%_100%,0_60%)]" />
                <div className="absolute left-[90px] top-[16px] h-[92px] w-[92px] rounded-full bg-[#1089c6] opacity-90 [clip-path:polygon(50%_0,100%_55%,50%_100%,0_55%)]" />
                <div className="absolute left-[74px] top-[58px] h-[54px] w-[118px] rounded-[100%] border-t-[22px] border-[#3fb4dc]" />
                <div className="absolute left-[112px] top-[2px] h-[18px] w-[18px] rounded-full bg-[#1089c6]" />
                <div className="absolute left-[139px] top-[18px] h-[12px] w-[12px] rounded-full bg-[#2db7e4]" />
              </div>

              <div>
                <h1 className="text-[43px] font-extrabold uppercase leading-none text-[#f00000]">
                  We Value Life
                </h1>
                <p className="mt-[7px] text-[16px] font-extrabold uppercase text-[#398b21]">
                  Our Health, Safety & Environment Policy
                </p>
              </div>
            </div>
          </div>

          <article className="text-[10px] leading-[1.75] text-black">
            <section className="border-b border-[#e5e5e5] pb-[30px]">
              <h2 className="mb-[13px] text-[18px] font-extrabold uppercase">
                Safety:-
              </h2>
              <p>
                We follow an approved standard documented procedure to define
                and meet the requirement for Occupational Health and Safety
                (OH&S) Management system. The company is accredited to{" "}
                <strong>
                  OHSAS 18001:2007 CERTIFICATION for Occupational Health and
                  Safety System has been obtained from DAC
                </strong>
                . This gives us confidence to eliminate or minimize risk to our
                employees and other parties involved in execution at sites. We
                plan, act upon and take corrective measures while operating on
                ground by checks and balance system. Also, we do continuous
                review and update / improvement in our existing procedures and
                measures.
              </p>
            </section>

            <section className="border-b border-[#e5e5e5] py-[30px]">
              <h2 className="mb-[15px] text-[18px] font-extrabold uppercase">
                Environmental Policy:-
              </h2>
              <p className="mb-[22px]">
                Environmental Conservation: - We at <strong>Starcon Infra</strong>{" "}
                Projects always put in our best efforts for conservation of
                environment and have this precedence while evaluating the
                projects.
              </p>
              <h3 className="mb-[13px] text-[12px] font-normal uppercase">
                We are committed to follow:
              </h3>
              <p>
                &gt; Environmental friendly construction methodologies
                <br />
                &gt; Use of non-conventional sources of energy to extent
                feasible
                <br />
                &gt; Make all efforts for protecting and enhancing greenery of
                the crust
                <br />
                &gt; Also, create awareness amongst employees and all other
                parties that come across. Our motto is Example is better than
                precept in preserving the existing ecological balance of the
                earth.
              </p>
            </section>

            <section className="border-b border-[#e5e5e5] py-[30px]">
              <h2 className="mb-[16px] text-[18px] font-extrabold uppercase">
                Quality Assurance:-
              </h2>
              <p>
                <strong>Our Company is an ISO 9001:2008 certified company.</strong>{" "}
                We have a system approach to{" "}
                <strong>Quality Management System Standard</strong> that
                addresses customer satisfaction by its effective application. We
                have documented quality policy objectives. The results are
                audited to ensure conformance and control of nonconformity.
                Employees are trained to get them acquainted for strict
                adherence to establish quality assurance system and achieve and
                maintain the required standards. Starcon Infra have never been
                averse to adopt these measures.
              </p>
            </section>
          </article>
        </div>
      </section>

      <ScrollTop />
      <Footer />
    </>
  );
}

export default ShePolicy;
