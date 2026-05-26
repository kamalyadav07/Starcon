function ClientCard({ client }) {
  return (
    <div className="bg-white p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center">

      <img
        src={client.logo}
        alt={client.name}
        className="h-24 object-contain mb-5"
      />

      <h3 className="text-[16px] font-semibold text-center text-[#1b365d]">
        {client.name}
      </h3>

    </div>
  );
}

export default ClientCard;