import servicesData from "../../data/servicesData";
import ServicePage from "../../components/services/ServicePage";

function Hydropower() {
  const service = servicesData.find(
    (item) => item.slug === "hydropower"
  );

  return <ServicePage service={service} />;
}

export default Hydropower;