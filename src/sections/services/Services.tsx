import {
  FaUserMd,
  FaBrain,
  FaChild,
  FaHospital,
  FaLightbulb,
  FaComments,
  FaBookMedical,
  FaGraduationCap,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "psicologia",
      icon: <FaUserMd className="text-primary-dark" size={28} />,
      title: "Psicología",
      description:
        "Atención psicológica especializada para todas las edades con enfoque integral y personalizado.",
    },
    {
      id: "neuropsicologia-infantil",
      icon: <FaChild className="text-primary-dark" size={28} />,
      title: "Neuropsicología infantil",
      description:
        "Evaluación e intervención neuropsicológica integral para el desarrollo cognitivo infantil.",
    },
    {
      id: "neuropsicologia-clinica",
      icon: <FaHospital className="text-primary-dark" size={28} />,
      title: "Neuropsicología clínica",
      description:
        "Evaluación clínica especializada en trastornos neurológicos y neuropsicológicos en adultos.",
    },
    {
      id: "pruebas-cognitivas",
      icon: <FaLightbulb className="text-primary-dark" size={28} />,
      title: "Pruebas cognitivas",
      description:
        "Evaluación completa de funciones cognitivas mediante pruebas estandarizadas y validadas.",
    },
    {
      id: "fonoaudiologia",
      icon: <FaComments className="text-primary-dark" size={28} />,
      title: "Fonoaudiología",
      description:
        "Evaluación y tratamiento especializado de trastornos del lenguaje, habla y comunicación.",
    },
    {
      id: "terapia-ocupacional",
      icon: <FaHandHoldingHeart className="text-primary-dark" size={28} />,
      title: "Terapia ocupacional",
      description:
        "Intervención para mejorar la autonomía y participación en actividades cotidianas y laborales.",
    },
    {
      id: "neurologia-pediatrica",
      icon: <FaBookMedical className="text-primary-dark" size={28} />,
      title: "Neurología Pediátrica",
      description:
        "Diagnóstico y tratamiento especializado de trastornos neurológicos en población infantil.",
    },
    {
      id: "terapia-rehabilitacion-cognitiva",
      icon: <FaBrain className="text-primary-dark" size={28} />,
      title: "Terapia de rehabilitación cognitiva",
      description:
        "Programas de rehabilitación personalizados para la recuperación de funciones cognitivas.",
    },
    {
      id: "asesorias-charlas-talleres",
      icon: <FaGraduationCap className="text-primary-dark" size={28} />,
      title: "Asesorías, talleres y seminarios",
      description:
        "Formación especializada para familias, profesionales y organizaciones educativas.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center my-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2, // Más lento
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1], // Curva de easing más suave
          }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <motion.div
            className="w-20 h-1 bg-primary-dark mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con una amplia gama de servicios para niños, niñas,
            adolescentes, adultos y adultos mayores. Nuestro equipo humano
            garantiza la atención y satisfacción de sus necesidades.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-primary-dark transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={`/servicios/${service.id}`} className="block">
                <motion.div
                  className="flex items-center mb-4"
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="mr-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </motion.div>
                <p className="text-gray-600 text-sm">{service.description}</p>
                <div className="mt-4 text-primary-dark font-medium flex items-center">
                  <span>Ver más detalles</span>
                  <span className="ml-2">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
