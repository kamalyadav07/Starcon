import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";
import ScrollTop from "../components/layout/ScrollTop";

const contactEndpoint = import.meta.env.VITE_CONTACT_API_URL || "http://localhost/starcon-api/contact.php";

function Contact() {
  const [submitState, setSubmitState] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSubmitState("sending");
    setSubmitMessage("");

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name") || "",
          email: form.get("email") || "",
          phone: form.get("phone") || "",
          message: form.get("message") || "",
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Submission failed. Please try again.");
      }

      formElement.reset();
      setSubmitState("sent");
      setSubmitMessage("Your query has been submitted successfully.");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error.message || "Submission failed. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <FloatingButtons />

      {/* PAGE BG */}
      <section className="bg-[#c8bfd6] py-16 min-h-screen">

        <div className="max-w-7xl mx-auto px-4">

          {/* WHITE CONTAINER */}
          <div className="bg-[#f7f7f7] p-8 md:p-10">

            {/* TITLE */}
            <h1 className="text-[40px] font-bold text-black uppercase mb-12">
              Contact Us
            </h1>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* FORM */}
              <div>

                <form className="space-y-6" onSubmit={handleSubmit}>

                  {/* NAME */}
                  <div>

                    <label className="block mb-2 font-semibold">
                      Name *
                    </label>

                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#1b365d]"
                    />

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="block mb-2 font-semibold">
                      E-Mail *
                    </label>

                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#1b365d]"
                    />

                  </div>

                  {/* PHONE */}
                  <div>

                    <label className="block mb-2 font-semibold">
                      Phone
                    </label>

                    <input
                      name="phone"
                      type="text"
                      className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#1b365d]"
                    />

                  </div>

                  {/* MESSAGE */}
                  <div>

                    <label className="block mb-2 font-semibold">
                      Message *
                    </label>

                    <textarea
                      name="message"
                      rows="6"
                      required
                      className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#1b365d]"
                    ></textarea>

                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={submitState === "sending"}
                    className="bg-[#1b365d] text-white px-8 py-3 hover:bg-[#122744] transition"
                  >
                    {submitState === "sending" ? "Submitting..." : "Submit"}
                  </button>

                  {submitMessage && (
                    <p className={submitState === "error" ? "text-red-700" : "text-green-700"}>
                      {submitMessage}
                    </p>
                  )}

                </form>

              </div>

              {/* CONTACT INFO */}
              <div>

                <div className="bg-[#24395d] text-white p-8 mb-8">

                  <h2 className="text-[28px] font-light uppercase mb-6">
                    STARCON INFRA PROJECTS INDIA PRIVATE LIMITED
                  </h2>

                  <p className="mb-4 leading-8">
                    C-101, 102, 2nd Floor,
                    <br />
                    Lajpat Nagar - 1,
                    <br />
                    New Delhi - 110024
                  </p>

                  <p className="mb-3">
                    Tel: 011-46588660
                  </p>

                  <p className="mb-3">
                    Fax: 011-46588667
                  </p>

                  <p className="mb-3">
                    info@starconinfra.in
                  </p>

                  <p>
                    starcon_infra@yahoo.co.in
                  </p>

                </div>

                {/* MAP */}
                <div className="overflow-hidden">

                  <iframe
  src="https://www.google.com/maps?q=StarCon+Infra+Projects+India+Private+Limited,+New+Delhi&output=embed"
  width="100%"
  height="350"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Starcon Map"
></iframe>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <ScrollTop />

      <Footer />
    </>
  );
}

export default Contact;
