import { useParams } from "react-router-dom";
import ServiceDetail from "../../components/service-detail/ServiceDetail";
import { getServiceBySlug } from "./data/services";

export default function Service() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  // Obtener el servicio por slug
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  // Si no se encuentra el servicio
  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Servicio no encontrado
          </h1>
          <p className="text-gray-600 mb-6">
            El servicio que buscas no está disponible.
          </p>
          <a
            href="/#servicios"
            className="bg-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark/90 transition-colors"
          >
            Ver todos los servicios 
          </a>
        </div>
      </div>
    );
  }

  return <ServiceDetail service={service} />;
}
