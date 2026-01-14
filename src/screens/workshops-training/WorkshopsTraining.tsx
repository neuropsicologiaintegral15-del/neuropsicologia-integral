import { motion } from "framer-motion";
import { FaCalendarAlt, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
import BackButton from "../../components/back-button/BackButton";

export default function WorkShopsTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Mensaje principal */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-primary-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-row items-start">
              <div className="bg-primary-50 p-3 rounded-lg">
                <FaCalendarAlt
                  size={20}
                  className="text-primary-dark text-2xl"
                />
              </div>
              <div className="flex flex-col gap-4 text-sm sm:text-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  ¡Próximamente Nuevas Capacitaciones!
                </h2>
                <p className="text-gray-700 text-justify">
                  Estamos trabajando en la preparación de talleres,
                  capacitaciones y charlas especializadas para brindarte el
                  mejor contenido en neuropsicología, educación inclusiva y
                  desarrollo profesional.
                </p>
                <p className="text-gray-700 text-justify">
                  Nuestro equipo está diseñando experiencias de aprendizaje
                  innovadoras, basadas en evidencia científica y adaptadas a las
                  necesidades actuales de profesionales, educadores y familias.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaChalkboardTeacher className="text-primary-200 text-2xl mr-3" />
                  <h3 className="font-bold text-gray-800">
                    Talleres Especializados
                  </h3>
                </div>
                <p className="text-gray-600">
                  Sesiones prácticas enfocadas en herramientas aplicables en tu
                  labor profesional.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-primary-200 text-2xl mr-3" />
                  <h3 className="font-bold text-gray-800">
                    Capacitaciones Grupales
                  </h3>
                </div>
                <p className="text-gray-600">
                  Formación en equipo para instituciones educativas y
                  organizaciones.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-gray-800">
                  <h3 className="font-bold mb-4">Próximo Lanzamiento</h3>
                  <p className="text-gray-600">
                    Mantente atento a nuestras redes sociales y página web para
                    conocer las fechas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BackButton
              className="bg-primary-dark text-white px-4 py-2 rounded-lg"
              title="Volver"
              section="capacitaciones"
            />
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}