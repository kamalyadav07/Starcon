import servicesData from "../../data/servicesData";
import ServicePage from "../../components/services/ServicePage";

function TownshipDevelopment() {
  const service = servicesData.find(
    (item) => item.slug === "township-development"
  );

  return <ServicePage service={service} />;
}

export default TownshipDevelopment;