import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import { FaTimes, FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import Footer from "../../components/footer/Footer";
import BackButton from "../../components/back-button/BackButton";
import { teamMembers, type ProfessionalMember } from "./data/teamMembers";
import AnimatedCounter from "../../components/animated-counter/AnimatedCounter";

// Variantes para animaciones
const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
};

const staggerContainer: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInScale: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    },
  },
};

export default function Professionals() {
  const [selectedMember, setSelectedMember] = useState<ProfessionalMember | null>(null);
  const featuredRef = useRef(null);
  const statsRef = useRef(null);
  
  // Solo para featured y stats
  const isFeaturedInView = useInView(featuredRef, { once: true, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMember]);

  const openModal = (member: ProfessionalMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const featuredMember = teamMembers.find((member) => member.featured);
  const otherMembers = teamMembers.filter((member) => !member.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Botón de regreso */}
      <div className="container sticky top-0 mx-auto z-50">
        <BackButton
          className="inline-flex items-center text-white bg-primary-dark font-medium m-4 px-4 py-2 rounded-lg cursor-pointer shadow-xl"
          title="Volver"
          section="equipo"
        />
      </div>

      {/* Contenido principal */}
      <main className="container mx-auto px-4">
        {/* Introducción - Animación inmediata */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12 pt-4"
        >
          <div className="w-24 h-1 bg-primary-200 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            "Somos un centro especializado en neuropsicología y salud mental,
            con un enfoque interdisciplinario, basado en evidencia científica y
            orientado al bienestar integral de niños, adolescentes y adultos."
          </p>
        </motion.div>

        {/* VIVIANA DESTACADA */}
        <div ref={featuredRef}>
          {featuredMember && (
            <motion.div
              initial="hidden"
              animate={isFeaturedInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="mb-16"
            >
              <motion.div variants={fadeInUp} className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                  Directora y Fundadora
                </h3>
                <p className="text-gray-600">
                  Liderazgo y experiencia al servicio de tu bienestar
                </p>
              </motion.div>

              <motion.div
                variants={fadeInScale}
                className="bg-gradient-to-r from-blue-50 to-primary-50 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="p-8">
                  {/* IMAGEN CENTRADA */}
                  <div className="flex flex-col items-center mb-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={
                        isFeaturedInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.9 }
                      }
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <img
                        src={featuredMember.image}
                        alt={featuredMember.name}
                        className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-8 border-white shadow-2xl"
                      />
                    </motion.div>

                    {/* INFORMACIÓN CENTRADA */}
                    <motion.div
                      initial="hidden"
                      animate={isFeaturedInView ? "visible" : "hidden"}
                      variants={staggerContainer}
                      className="mt-8 text-center max-w-2xl"
                    >
                      <motion.h3
                        variants={fadeInUp}
                        className="text-2xl font-bold text-gray-800 mb-2"
                      >
                        {featuredMember.name}
                      </motion.h3>
                      <motion.p
                        variants={fadeInUp}
                        className="text-primary-200 font-bold text-xl mb-2"
                      >
                        {featuredMember.title}
                      </motion.p>
                      <motion.p
                        variants={fadeInUp}
                        className="text-gray-700 mb-4"
                      >
                        {featuredMember.specialty}
                      </motion.p>
                      <motion.p
                        variants={fadeInUp}
                        className="text-gray-600 text-lg mb-6"
                      >
                        {featuredMember.shortDescription}
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* BOTONES CENTRADOS */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isFeaturedInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-8"
                  >
                    <button
                      onClick={() => openModal(featuredMember)}
                      className="bg-primary-200 hover:bg-primary-300 text-black font-medium py-3 px-6 rounded-lg transition-colors flex items-center text-lg shadow-lg hover:shadow-xl cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
                    >
                      <IoIosPaper className="mr-3" />
                      Ver Perfil Completo
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* TRUCO: Elemento invisible para activar animaciones antes */}
        <div className="h-20 -mt-20" /> {/* Este espacio hace que las animaciones se activen antes */}

        {/* Título para el resto del equipo - CON whileInView DIRECTO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-100px" }} // ¡MARGEN NEGATIVO!
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Nuestro Equipo Especializado
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesionales altamente capacitados en diferentes áreas de la salud mental
          </p>
        </motion.div>

        {/* Grid de los otros profesionales - CON whileInView INDIVIDUAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1, margin: `-${50 + index * 10}px` }} // Margen escalonado
              variants={fadeInUp}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex flex-col items-center text-center mb-4 flex-grow">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-200 font-medium mb-2">
                      {member.title}
                    </p>
                    <p className="text-gray-700 line-clamp-3 text-sm mb-4">
                      {member.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(member);
                    }}
                    className="w-full inline-flex items-center justify-center bg-primary-dark hover:bg-white text-white hover:text-black border-2 hover:border-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  >
                    <IoIosPaper className="mr-2" />
                    Ver Perfil Completo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Información del equipo */}
        <div ref={statsRef} className="my-16">
          <motion.div
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-2xl font-bold text-gray-800 mb-6 text-center"
            >
              Nuestro Equipo Multidisciplinario
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                {
                  value: teamMembers.length,
                  text: "Profesionales especializados",
                },
                { value: 5, text: "Áreas de especialidad" },
                { value: 80, text: "Años experiencia colectiva" },
                { value: 100, text: "Trabajo en equipo coordinado" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-3 md:p-4"
                >
                  <div className="text-primary-200 text-3xl md:text-4xl font-bold mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      duration={1000 + index * 300}
                      prefix={index === 2 ? "+" : ""}
                      suffix={index === 3 ? "%" : ""}
                    />
                  </div>
                  <div className="text-gray-700 text-sm md:text-base">
                    {stat.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-center mt-6 max-w-3xl mx-auto text-sm md:text-base"
            >
              Cada profesional aporta su experiencia específica, trabajando de
              manera coordinada bajo la dirección de la profesional especializada Viviana Solís para
              ofrecerte una atención integral y personalizada. Nuestro equipo
              multidisciplinario cubre todas las etapas del ciclo vital, desde
              la primera infancia hasta la adultez.
            </motion.p>
          </motion.div>
        </div>
      </main>

      {/* Modal para detalles completos */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                      {selectedMember.name}
                    </h2>
                    <p className="text-primary-200 font-medium text-sm md:text-base">
                      {selectedMember.title}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {selectedMember.specialty}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:w-1/3"
                  >
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full rounded-xl shadow-lg mb-6"
                    />
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">
                          Descripción Profesional
                        </h3>
                        <p className="text-gray-700">
                          {selectedMember.shortDescription}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:w-2/3 space-y-6 md:space-y-8"
                  >
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">
                        Perfil Profesional Completo
                      </h3>
                      <div className="text-gray-700 whitespace-pre-line text-justify text-sm md:text-base">
                        {selectedMember.fullDescription}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                          <FaGraduationCap className="mr-2 text-primary-200" />
                          Formación Académica
                        </h4>
                        <ul className="space-y-2 pl-6 list-disc">
                          {selectedMember.education.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.05 }}
                              className="text-gray-600 marker:text-primary-200 text-sm md:text-base"
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                          <FaBriefcase className="mr-2 text-primary-200" />
                          Experiencia
                        </h4>
                        <ul className="space-y-2 pl-6 list-disc">
                          {selectedMember.experience.map((item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.05 }}
                              className="text-gray-600 marker:text-primary-200 text-sm md:text-base"
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                        <FaStar className="mr-2 text-primary-200" />
                        Especialidades
                      </h4>
                      <ul className="space-y-2 pl-6 list-disc">
                        {selectedMember.specialties.map((specialty, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                            className="text-gray-600 marker:text-primary-200 text-sm md:text-base"
                          >
                            {specialty}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}