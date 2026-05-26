import servicesData from "../../data/servicesData";
import ServicePage from "../../components/services/ServicePage";

function Roadworks() {
  const service = servicesData.find(
    (item) => item.slug === "roadworks"
  );

  return <ServicePage service={service} />;
}

export default Roadworks;