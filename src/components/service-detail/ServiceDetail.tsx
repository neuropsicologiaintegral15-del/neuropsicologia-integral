import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import BackButton from "../back-button/BackButton";
import type { IconBaseProps } from "react-icons";
import {
  getRelatedServices,
  type ServiceData,
  type IconName,
} from "../../screens/service/data/services";
import ServiceNavigation from "../service-navigation/ServiceNavigation";

interface ServiceDetailProps {
  service: ServiceData;
}

// Mapa de iconos tipado
const iconComponents: Record<IconName, React.ComponentType<IconBaseProps>> = {
  FaUserMd: Icons.FaUserMd,
  FaStethoscope: Icons.FaStethoscope,
  FaBrain: Icons.FaBrain,
  FaClipboardCheck: Icons.FaClipboardCheck,
  FaChartBar: Icons.FaChartBar,
  FaHandsHelping: Icons.FaHandsHelping,
  FaComments: Icons.FaComments,
  FaCogs: Icons.FaCogs,
  FaChalkboardTeacher: Icons.FaChalkboardTeacher,
  FaCheckCircle: Icons.FaCheckCircle,
  FaClock: Icons.FaClock,
  FaUsers: Icons.FaUsers,
  FaWhatsapp: Icons.FaWhatsapp,
  FaBullseye: Icons.FaBullseye,
  FaQuestionCircle: Icons.FaQuestionCircle,
};

// Componente helper para iconos dinámicos
interface DynamicIconProps extends IconBaseProps {
  name: IconName;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconComponents[name];
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback`);
    return <Icons.FaQuestionCircle {...props} />;
  }
  return <IconComponent {...props} />;
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const relatedServices = getRelatedServices(service.slug);

  // Funciones de contacto
  const handleWhatsApp = () => {
    window.open("https://wa.me/573163413345", "_blank");
  };

  return (
    <div id={service.id} className="min-h-screen bg-gray-50">
      {/* Header con navegación entre servicios */}
      <div className="bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <BackButton
            title="Volver"
            section="servicios"
            className="pt-8 text-lg"
          />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-4">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {service.title}
              </h1>
              <p className="text-gray-200 text-lg">{service.subtitle}</p>
            </div>
            <div className="mt-4 md:mt-0 bg-white p-4 rounded-lg shadow-md">
              {/* Icono dinámico */}
              <DynamicIcon
                name={service.icon}
                className="text-primary-dark"
                size={48}
              />
            </div>
          </div>

          {/* Navegación horizontal entre servicios */}
          <ServiceNavigation currentService={service.slug} />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* ¿Qué se hace? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <DynamicIcon
                  name="FaClipboardCheck"
                  className="mr-3 text-primary-dark"
                  size={24}
                />
                ¿Qué se hace?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.whatIsDone}
              </p>
            </motion.div>

            {/* Objetivos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Objetivos del Servicio
              </h2>
              <ul className="space-y-3">
                {service.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <DynamicIcon
                      name="FaBullseye"
                      className="text-primary-dark mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700 text-lg">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ¿Qué trabaja? */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                ¿Qué se trabaja?
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.whatItWorksOn.map((item, index) => (
                  <span
                    key={index}
                    className="bg-primary-dark/10 text-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Enfoques terapéuticos (solo para psicología) */}
            {service.approaches && service.approaches.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Enfoques Terapéuticos
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.approaches.map((enfoque, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {enfoque}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Información del servicio */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                  Información del Servicio
                </h3>

                <div className="space-y-6">
                  {service.duration && (
                    <div className="flex items-start">
                      <DynamicIcon
                        name="FaClock"
                        className="text-primary-dark mr-3 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-medium text-gray-800">Duración</p>
                        <p className="text-gray-600">{service.duration}</p>
                      </div>
                    </div>
                  )}

                  {service.modalities && service.modalities.length > 0 && (
                    <div className="flex items-start">
                      <DynamicIcon
                        name="FaUsers"
                        className="text-primary-dark mr-3 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <p className="font-medium text-gray-800">Modalidades</p>
                        <p className="text-gray-600">
                          {service.modalities.join(", ")}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Botones de acción */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <button
                    onClick={handleWhatsApp}
                    className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <DynamicIcon name="FaWhatsapp" className="mr-2" size={20} />
                    Consultar por WhatsApp
                  </button>
                </div>
              </div>

              {/* Servicios relacionados */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Servicios relacionados
                  </h3>
                  <div className="space-y-3">
                    {relatedServices.map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        to={`/servicios/${relatedService.slug}`}
                        className="block p-3 rounded-lg bg-white hover:bg-primary-dark/5 transition-colors duration-200 border border-gray-100 hover:border-primary-dark/20"
                      >
                        <div className="flex items-center">
                          <span className="flex-shrink-0 w-2 h-2 bg-primary-dark rounded-full mr-3"></span>
                          <span className="font-medium text-gray-700 hover:text-primary-dark">
                            {relatedService.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
