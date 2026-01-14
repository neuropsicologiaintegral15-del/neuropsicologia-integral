import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import vivianaSolis from "../../assets/img/doctor/viviana_solis.jpg";
import AnimatedCounter from "../../components/animated-counter/AnimatedCounter";

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="equipo" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center my-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Quién está detrás del Centro?
            </h2>
            <motion.div
              className="w-20 h-1 bg-primary-200 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-20px" }}
            />
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="flex flex-col sm:flex-row items-center">
              <motion.div
                className="md:w-1/3 bg-blue-50 flex items-center justify-center p-8"
                variants={imageVariants}
              >
                <motion.img
                  className="rounded-xl shadow-lg w-full max-w-xs"
                  src={vivianaSolis}
                  alt="Neuropsicóloga Viviana Solís Arcila"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div className="md:w-2/3 p-8" variants={itemVariants}>
                <motion.h3
                  className="text-2xl font-bold text-primary-dark"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Neuropsicóloga: Viviana Solís Arcila
                </motion.h3>
                <motion.p
                  className="text-primary-200 font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Directora y Fundadora
                </motion.p>

                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Profesional especializada e idónea con calidad humana,
                  experiencia laboral y profesional para brindar a sus usuarios
                  un servicio de calidad con una mirada integral, clínica y
                  analítica.
                </motion.p>

                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Su trayectoria profesional le permite abordar las diferentes
                  situaciones de los niños, niñas y adolescentes de manera
                  integral, generando cambios importantes en sus procesos de
                  desarrollo siempre integrando a su núcleo familiar y entorno
                  escolar.
                </motion.p>

                <motion.p
                  className="text-gray-700 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Permite responder de manera acertada a las necesidades de los
                  niños, niñas, adolescentes y sus familias.
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Estadísticas profesionales con contadores animados */}
          <motion.div
            className="my-8 bg-white rounded-xl shadow-lg p-6 md:p-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Experiencia y trayectoria
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Años de experiencia */}
              <div className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-primary-200 text-3xl md:text-4xl font-bold mb-2 h-12 flex items-center justify-center">
                  <AnimatedCounter
                    value={20}
                    duration={2500}
                    prefix="+"
                    className="text-primary-200"
                  />
                </div>
                <div className="text-gray-700 text-sm md:text-base">
                  Años de experiencia clínica y educativa
                </div>
              </div>

              {/* Niños atendidos */}
              <div className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-primary-200 text-3xl md:text-4xl font-bold mb-2 h-12 flex items-center justify-center">
                  <AnimatedCounter
                    value={500}
                    duration={3000}
                    suffix="+"
                    className="text-primary-200"
                  />
                </div>
                <div className="text-gray-700 text-sm md:text-base">
                  Niños y adolescentes atendidos
                </div>
              </div>

              {/* Ciudades como conferencista */}
              <div className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-primary-200 text-3xl md:text-4xl font-bold mb-2 h-12 flex items-center justify-center">
                  <AnimatedCounter
                    value={20}
                    duration={2000}
                    suffix="+"
                    className="text-primary-200"
                  />
                </div>
                <div className="text-gray-700 text-sm md:text-base">
                  Ciudades como conferencista
                </div>
              </div>

              {/* Participaciones internacionales */}
              <div className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="text-primary-200 text-3xl md:text-4xl font-bold mb-2 h-12 flex items-center justify-center">
                  <AnimatedCounter
                    value={3}
                    duration={1500}
                    className="text-primary-200"
                  />
                </div>
                <div className="text-gray-700 text-sm md:text-base">
                  Participaciones en eventos internacionales
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOTÓN para ver equipo completo */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true, margin: "-30px" }}
          >
            <motion.button
              onClick={() => {
                window.location.href = "/equipo-completo";
              }}
              className="inline-flex items-center justify-center bg-primary-dark hover:bg-white text-white hover:text-black border-2 border-primary-dark hover:border-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoce a nuestro equipo
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <p className="text-gray-600 mt-4 text-sm">
              Descubre todos nuestros especialistas y sus áreas de experiencia
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
