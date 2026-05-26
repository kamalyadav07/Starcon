import { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { legacyRedirects, pages, serviceTiles } from "./siteData";

const serviceItems = Object.values(pages).filter((page) => page.kind === "service");
const contactEndpoint = import.meta.env.VITE_CONTACT_API_URL || "http://localhost/starcon-api/contact.php";
const clientImages = [
  [39, "Tata Projects"],
  [44, "Uttarakhand Jal Vidyut Nigam Limited"],
  [10, "DLF"],
  [1, "Adani"],
  [23, "L&T"],
  [17, "IREO"],
  [24, "Maruti Suzuki"],
  [9, "Delhi Metro Rail Corporation"],
  [27, "NHPC"],
  [26, "BHEL"],
  [29, "Jaypee"],
  [32, "PWD"],
  [31, "IIT"],
  [35, "Chennai Metro Rail Limited"],
  [3, "Indian Oil"],
  [4, "NBCC"],
  [46, "Uflex"],
  [33, "Shipra"],
  [43, "Sparktown"],
  [38, "Ireo Waterfront"],
  [47, "ETA Engineering"],
  [19, "M.G. Housing"],
  [18, "Jaiprakash Associates"],
  [20, "Lucknow Metro Rail"],
  [15, "Engineered Construction Company"],
  [12, "Associated Container Terminal"],
  [2, "Adani Logistics"],
  [7, "DMRC"],
  [8, "Bharat Heavy Electricals"],
  [40, "UJVN"],
  [25, "NHPC Limited"],
  [41, "Delhi Metro"],
  [36, "Tata"],
  [45, "Larsen & Toubro"],
  [48, "Maruti"],
  [49, "DLF Homes"],
  [6, "Client"],
  [11, "Client"],
  [14, "Client"],
  [16, "Client"],
  [21, "Client"],
  [22, "Client"],
  [28, "Client"],
  [34, "Client"],
];
const financeImages = [
  [2, "Bank of India"],
  [3, "HDFC"],
  [4, "ICICI Bank"],
  [5, "Kotak Mahindra Bank"],
  [6, "L&T Finance"],
  [7, "Magma"],
  [9, "SREI"],
  [10, "Tata Capital"],
  [11, "Tata Motor Finance"],
];
const equipmentBankImages = [19, 21, 9, 10, 11, 2, 12, 14];

function LegacySite({ page }) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 36);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [pathname]);

  if (!page && legacyRedirects[pathname]) {
    return <Navigate to={legacyRedirects[pathname]} replace />;
  }

  return (
    <div className={`legacy-site ${page.kind === "home" ? "home-shell" : ""}`}>
      <Helmet>
        <title>Starcon Infra Projects (I) Pvt. Ltd.| {page.title}</title>
        <meta name="description" content="Starcon Infra Projects India Private Limited" />
      </Helmet>
      {page.kind !== "service" && <FloatingButtons />}
      <Header activePath={page.path} isHome={page.kind === "home"} isScrolled={isScrolled} />
      {page.kind === "home" ? <HomePage /> : <InnerPage page={page} />}
      <Footer />
      <a className="scrollup" href="#top">Scroll</a>
    </div>
  );
}

function Header({ activePath, isHome, isScrolled }) {
  return (
    <header id="top" className={`true-header ${isHome ? "home-header" : "inner-header"} ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" id="logo" aria-label="Starcon Infra Projects" />
        <nav className="access">
          <Link className={activePath === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={activePath === "/about" ? "active" : ""} to="/about">Know Us</Link>
          <div className="menu-parent">
            <span>Services <i className="menu-arrow" aria-hidden="true" /></span>
            <div className="submenu">
              {serviceItems.map((item) => (
                <Link key={item.path} to={item.path}>{item.title}</Link>
              ))}
            </div>
          </div>
          <Link className={activePath === "/she-policy" ? "active" : ""} to="/she-policy">S.H.E. Policy</Link>
          <Link className={activePath === "/clients" ? "active" : ""} to="/clients">Clients</Link>
          <Link className={activePath === "/our-finance-partners" ? "active" : ""} to="/our-finance-partners">Our Finance Partners</Link>
          <Link className={activePath === "/our-strengths" ? "active" : ""} to="/our-strengths">Our Strength</Link>
          <Link className={activePath === "/contact" ? "active" : ""} to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

function FloatingButtons() {
  return (
    <div className="floating-actions" aria-label="Quick links">
      <a className="floating-action floating-youtube" href="https://www.youtube.com/watch?v=_oxwJgb1Tn8" target="_blank" rel="noreferrer" aria-label="Watch Starcon on YouTube">
        <span className="floating-icon">▶</span>
        <span className="floating-label">YouTube</span>
      </a>
      <a className="floating-action floating-pdf" href="/images/Company-Profile-StarCon-Infra.pdf" target="_blank" rel="noreferrer" aria-label="Open company profile PDF">
        <span className="floating-icon">PDF</span>
        <span className="floating-label">Profile</span>
      </a>
      <a className="floating-action floating-pdf" href="/pdfs/CSR-Annexure-III.pdf" target="_blank" rel="noreferrer" aria-label="Open CSR Annexure III PDF">
        <span className="floating-icon">PDF</span>
        <span className="floating-label">CSR</span>
      </a>
      <a className="floating-action floating-pdf" href="/pdfs/MGT-7-AB9618382-Signed.pdf" target="_blank" rel="noreferrer" aria-label="Open MGT-7 signed PDF">
        <span className="floating-icon">PDF</span>
        <span className="floating-label">MGT-7</span>
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <main className="home-stage">
        <section className="quote-section">
          <div className="container">
            <h1><span>What we think, <strong>We become</strong></span><small>-BUDDHA-</small></h1>
          </div>
        </section>
        <section className="container service-grid-wrap">
          <div className="service-grid">
            {serviceTiles.map(([title, path, image]) => (
              <Link className="tile" to={path} key={title}>
                <img src={image} alt={title} />
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <GraphLine />
    </>
  );
}

function InnerPage({ page }) {
  if (page.kind === "about") {
    return (
      <>
        <main className="about-page">{renderPage(page)}</main>
        <GraphLine />
      </>
    );
  }

  if (page.kind === "service") {
    return (
      <>
        <main className="service-page-wrap">
          <Service page={page} />
        </main>
        <GraphLine />
      </>
    );
  }

  return (
    <>
      <main className={`standard-page-wrap ${page.kind}-page-wrap`}>
        <section className={`standard-card ${page.kind}-card`}>
          {renderPage(page)}
        </section>
      </main>
      <GraphLine />
    </>
  );
}

function renderPage(page) {
  if (page.kind === "about") return <About />;
  if (page.kind === "service") return <Service page={page} />;
  if (page.kind === "she") return <ShePolicy />;
  if (page.kind === "clients") return <LogoGrid folder="/images/media/client" items={clientImages} />;
  if (page.kind === "finance") return <LogoGrid folder="/images/media/financial" items={financeImages} />;
  if (page.kind === "strength") return <Strength />;
  if (page.kind === "contact") return <Contact />;
  return null;
}

function About() {
  const movingImages = [...equipmentBankImages, ...equipmentBankImages];

  return (
    <section className="about-card">
      <article className="about-copy">
        <h2>Who <strong>We Are</strong></h2>
        <p><strong>In the year of 1995, a partnership firm named as Star Constructions was formed by Sh. Amit Lakhanpal and Sh. Baswant Singh to execute various construction works on contract basis. This firm was converted into Private Limited Company in the year of 2006. Later Sh. Raj Kamal Bhatia and Sh. Satish Sharma also joined the company in the year 2006.</strong></p>
        <p>The entrepreneurs worked together and moved ahead while creating a success story, on the route of mutual respect and understanding. Relentless hard work, commitment to maintain best quality standards in the construction industry and honesty has been the key factor in the phenomenal growth of our company. We marched a long way since then and got rewards & recognition for our contribution in infrastructural growth of our country. Company's Registered Office is situated at C 101-102, II Floor Lajpat Nagar, New Delhi-110024.</p>
        <p>Today our company is executing a large variety of construction projects with specialization in <b>Heavy Earth / Rock Excavation, Roads, Civil & Mechanical Construction / Erection, Ground Engineering works etc.</b> We are also equipped with whole range of construction & material handling equipment, earth movers and other support equipment of our own along with possessing expertise in their operation and repair maintenance. This looks after our in-house requirements and puts us ahead with an edge over others in the industry.</p>
        <p>We undertake complete responsibility & ownership of a project including management, coordination, liaison and execution. Also, we are committed to complete our orders within the time schedule and budgetary limits without any escalation. In this regards, our performance have received appreciations from all quarters.</p>
        <h2>THE DYNAMIC <strong>COOPERATION</strong></h2>
        <p>At the heart, Star's momentum lay with a thorough understanding of constantly changing difficult working conditions & environment, never get contended with past performance / appreciations. Star's hallmark has throughout been its rock solid firm belief in own abilities and endeavor to persistently updating ourselves with forward and lateral thinking.</p>
        <p>Pledge to stand ahead of times, readiness to adopt new technologies & upgrade the existing one, bringing about novel structural reforms based upon systemic approach, quality control concepts, upgrading skills of professionals & laborers parallel with latest scientific developments and human HR approach is our constant source of energy.</p>
      </article>

      <aside className="equipment-bank" aria-label="Our equipment bank">
        <p>Our</p>
        <h3>Equipment Bank</h3>
        <div className="equipment-window">
          <div className="equipment-track">
            {movingImages.map((id, index) => (
              <img key={`${id}-${index}`} src={`/images/mar/${id}.jpg`} alt="" />
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}

function Service({ page }) {
  const equipmentImages = [...equipmentBankImages, ...equipmentBankImages];

  return (
    <section className="service-card">
      <article className="service-main">
        <img className="service-banner" src={page.image} alt={page.title} />
        <p className="service-description"><strong>{page.description}</strong></p>
        <table className="projects-table service-projects-table">
          <thead>
            <tr>{(page.headers || ["S.No.", "Name of the work", "Principal Client", "Location"]).map((header) => <th key={header}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {page.projects.map((row) => (
              <tr key={row.join("-")}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </article>

      <aside className="service-sidebar">
        <div className="service-contact">
          <h3>Get in Touch With Us</h3>
          <a href="tel:01146588660"><span>☎</span>011-4658 8660</a>
          <a href="mailto:info@starconinfra.in"><span>✉</span>info@starconinfra.in</a>
        </div>

        <div className="service-equipment" aria-label="Our equipment bank">
          <p>Our</p>
          <h3>Equipment Bank</h3>
          <div className="service-equipment-window">
            <div className="service-equipment-track">
              {equipmentImages.map((id, index) => (
                <img key={`${id}-${index}`} src={`/images/mar/${id}.jpg`} alt="" />
              ))}
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

function ShePolicy() {
  return (
    <>
      <img className="she-banner" src="/images/she1.jpg" alt="We value life" />
      <section className="policy-section">
        <h2>Safety:-</h2>
        <p>We follow an approved standard documented procedure to define and meet the requirement for Occupational Health and Safety (OH&S) Management system. The company is accredited to <b>OHSAS 18001:2007 CERTIFICATION for Occupational Health and Safety System has been obtained from DAC.</b> This gives us confidence to eliminate or minimize risk to our employees and other parties involved in execution at sites. We plan, act upon and take corrective measures while operating on ground by checks and balance system. Also, we do continuous review and update / improvement in our existing procedures and measures.</p>
      </section>
      <section className="policy-section">
        <h2>Environmental Policy:-</h2>
        <p>Environmental Conservation: We at <b>Starcon Infra</b> Projects always put in our best efforts for conservation of environment and have this precedence while evaluating the projects.</p>
        <h3>We are committed to follow:</h3>
        <ul className="arrow-list">
          <li>Environmental friendly construction methodologies</li>
          <li>Use of non-conventional sources of energy to extent feasible</li>
          <li>Make all efforts for protecting and enhancing greenery of the crust</li>
          <li>Also, create awareness amongst employees and all other parties that come across. Our motto is Example is better than precept in preserving the existing ecological balance of the earth.</li>
        </ul>
      </section>
      <section className="policy-section">
        <h2>Quality Assurance:-</h2>
        <p><b>Our Company is an ISO 9001:2008 certified company.</b> We have a system approach to <b>Quality Management System Standard</b> that addresses customer satisfaction by its effective application. We have documented quality policy objectives. The results are audited to ensure conformance and control of nonconformity. Employees are trained to get them acquainted for strict adherence to establish quality assurance system and achieve and maintain the required standards. Starcon Infra have never been averse to adopt these measures.</p>
      </section>
    </>
  );
}

function LogoGrid({ folder, items }) {
  return (
    <div className="logo-grid">
      {items.map(([id, name]) => (
        <figure className="logo-item" key={id}>
          <img src={`${folder}/${id}.jpg`} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Strength() {
  return (
    <>
      <div className="strength-intro">
        <img className="strength-image" src="/images/strengths.jpg" alt="Our Strength" />
        <div>
          <p>At the heart, Star's momentum lay with a thorough understanding of constantly changing difficult working conditions & environment, never get contended with past performance / appreciations. Star's hallmark has throughout been its rock solid firm belief in own abilities and endeavor to persistently updating ourselves with forward and lateral thinking.</p>
          <p>Pledge to stand ahead of times, readiness to adopt new technologies & upgrade the existing ones, bringing about novel structural reforms based upon systemic approach, quality control concepts, upgrading skills of professionals & laborers parallel with latest scientific developments and human HR approach is our constant source of energy.</p>
        </div>
      </div>
      <p>Company has been diversifying its activities according to changing needs. In <b>2011</b> we entered in the field of Ground engineering through our subsidiary <b>M/S IPEX Infrastructure Pvt. Ltd.</b> and executed various contract works related to Metro Projects in Chennai and Delhi. In <b>2014</b> company entered in the field of Hydropower projects and at present executing various contract works in this sector in <b>J & K, Uttarakhand and Assam.</b> In <b>2015</b> company also got contract for Tunnel works in Hydropower projects through a joint Venture <b>Starcon-HKS JV.</b></p>
      <p>Company is equipped with whole range of construction & material handling equipment, earth movers and other support equipment of our own along with possessing expertise in their operation and repair maintenance. This looks after our in-house requirements and puts us ahead with an edge over others in the industry. In addition, our big pool of equipment, plants are also provide services in the projects outside our company.</p>
      <p>Company undertakes complete responsibility & ownership of a project including management, coordination, liaison and execution. Also, company is committed to complete the orders within the time schedule and budgetary limits without any escalation. In this regards, company's performance have received appreciations from all quarters.</p>
    </>
  );
}

function Contact() {
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setSubmitState("sending");
    setSubmitMessage("");
    setShowThankYou(false);

    const form = new FormData(formElement);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const phone = form.get("phone") || "";
    const message = form.get("message") || "";
    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Submission failed. Please try again.");
      }

      formElement.reset();
      setSubmitState("sent");
      setShowThankYou(true);
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error.message || "Submission failed. Please try again.");
    }
  };

  return (
    <div className="contact-layout">
      <form className="query-form" onSubmit={handleSubmit}>
        <h3>Raise a Query</h3>
        <label htmlFor="contact-name">Your Name*</label><input id="contact-name" name="name" required />
        <label htmlFor="contact-email">E-Mail*</label><input id="contact-email" name="email" type="email" required />
        <label htmlFor="contact-phone">Phone</label><input id="contact-phone" name="phone" />
        <label htmlFor="contact-message">Your Message*</label><textarea id="contact-message" name="message" rows="10" required />
        <button type="submit" disabled={submitState === "sending"}>
          {submitState === "sending" ? "Submitting..." : "Submit"}
        </button>
        {submitMessage && <p className={`form-response ${submitState === "error" ? "is-error" : ""}`}>{submitMessage}</p>}
      </form>
      {showThankYou && (
        <div className="thank-you-overlay" role="dialog" aria-modal="true" aria-labelledby="thank-you-title">
          <div className="thank-you-popup">
            <h3 id="thank-you-title">Thank You</h3>
            <p>Your query has been submitted successfully.</p>
            <button type="button" onClick={() => setShowThankYou(false)}>OK</button>
          </div>
        </div>
      )}
      <aside>
        <div className="address-card">
          <h3>Address Info</h3>
          <p><strong>STARCON INFRA PROJECTS INDIA PRIVATE LIMITED</strong><br />C-101, 102, 2nd Floor,<br />Lajpat Nagar - 1<br />New Delhi - 110024<br />Tel - 011 - 46588660, 61, 62, 63, 64<br />Fax - 011 - 46588667<br />Email: info@starconinfra.in<br />Email: starcon_infra@yahoo.co.in</p>
        </div>
        <h3>Locate Us</h3>
        <iframe title="Starcon location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.73041250689!2d77.23684231487685!3d28.577856982439425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce255159271bf%3A0x8bf54199e6391c77!2sStarCon+Infra+Projects+India+Private+Limited!5e0!3m2!1sen!2s!4v1484289862610" />
      </aside>
    </div>
  );
}

function GraphLine() {
  return <div className="graph-lines" />;
}

function Footer() {
  return (
    <footer className="copyright-info">
      <img src="/images/ms.png" alt="" />
      <b>© 2016 Starcon Infra Projects (I) Pvt. Ltd. | All rights reserved.</b>
    </footer>
  );
}

export default LegacySite;
