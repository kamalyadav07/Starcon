import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";

import clientsData from "../data/clientsData";

import ClientCard from "../components/clients/ClientCard";

import ScrollTop from "../components/layout/ScrollTop";

function Clients() {
  return (
    <>
      <Navbar />
      <FloatingButtons />

      {/* PAGE BG */}
      <section className="bg-[#c8bfd6] py-16 min-h-screen">

        <div className="max-w-7xl mx-auto px-4">

          {/* WHITE BOX */}
          <div className="bg-[#f7f7f7] p-8 md:p-10">

            {/* TITLE */}
            <h1 className="text-[40px] font-bold text-black mb-12 uppercase">
              Our Clients
            </h1>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              {clientsData.map((client) => (
                <ClientCard
                  key={client.id}
                  client={client}
                />
              ))}

            </div>

          </div>

        </div>

      </section>

      <ScrollTop />

      <Footer />
    </>
  );
}

export default Clients;