const images = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2070&auto=format&fit=crop",
];

function EquipmentGallery() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-orange-500 uppercase tracking-[5px] mb-4">
            Machinery
          </p>

          <h2 className="text-5xl font-bold text-[#1b365d]">
            Our Equipment Bank
          </h2>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
            >

              <img
                src={img}
                alt="equipment"
                loading="lazy"
                className="w-full h-72 object-cover hover:scale-110 transition duration-700"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default EquipmentGallery;