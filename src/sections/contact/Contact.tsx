import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
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
    hidden: { y: 20, opacity: 0 }, // Reducido de 30 a 20 para móviles
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contacto" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2, // Reducido de 0.3 para activarse antes
            margin: "-50px 0px -50px 0px", // Margen solo arriba/abajo, no laterales
          }}
          variants={containerVariants}
        >
          <motion.div
            className="text-center my-8 sm:my-12"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Contáctanos
            </h2>
            <motion.div
              className="w-20 h-1 bg-primary-200 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.1 }} // Sin margen negativo
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 overflow-hidden">
            {/* Columna izquierda */}
            <motion.div
              variants={itemVariants}
              className="text-sm sm:text-lg overflow-hidden"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* DIRECCIÓN */}
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ willChange: "transform" }}
                >
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-200" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800">Dirección</h4>
                    <p className="text-gray-600 break-words">
                      Carrera 30 # 5b-31 San Fernando, Cali, Valle del Cauca
                    </p>
                  </div>
                </motion.div>

                {/* HORARIO */}
                <motion.div
                  className="flex items-start text-sm sm:text-lg"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ willChange: "transform" }}
                >
                  <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FaClock className="text-primary-200" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800">
                      Horario de Atención
                    </h4>
                    <p className="text-gray-600">
                      Lunes a Viernes 8:30 am a 12:00 pm y 2:00 pm a 6:30 pm
                    </p>
                    <p className="text-gray-600">Sábados 8:30 am a 12:30 pm</p>
                  </div>
                </motion.div>

                {/* BOTÓN de WhatsApp */}
                <motion.a
                  href="https://api.whatsapp.com/send?phone=573163413345&text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios%20de%20neuropsicología"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center p-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                    <div className="bg-green-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaWhatsapp className="text-green-600" size={24} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm sm:text-lg">
                        Escríbenos por WhatsApp
                      </h4>
                      <p className="text-gray-600">(316) 3413345</p>
                    </div>
                    <div className="text-green-600 font-semibold flex-shrink-0">
                      →
                    </div>
                  </div>
                </motion.a>

                {/* BOTÓN de Email */}
                <motion.a
                  href="mailto:neuropsicologiaintegral15@gmail.com?subject=Consulta%20Neuropsicología%20Integral&body=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20sus%20servicios."
                  className="block rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 border-2 border-primary-dark rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaEnvelope className="text-primary-dark" size={24} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-gray-800 text-sm sm:text-lg">
                        Envíanos un correo
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-lg break-all sm:break-normal">
                        neuropsicologiaintegral15@gmail.com
                      </p>
                    </div>
                    <div className="text-primary-dark font-semibold flex-shrink-0">
                      →
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Columna derecha - Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} // Reducido de 50 a 30
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{
                once: true,
                amount: 0.2, // Activar con solo 20% visible
                margin: "0px 0px -100px 0px", // Solo margen inferior
              }}
              className="overflow-hidden"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
                Visítanos
              </h3>

              <div className="space-y-4">
                {/* Mapa */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.697433260676!2d-76.5337787!3d3.451647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1b2c9d6b5a5%3A0x9e3c8b5b5b5b5b5b!2sCarrera%2030%20%235b-31%2C%20Cali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1ses!2ses!4v1640000000000!5m2!1ses!2ses"
                    width="600"
                    height="450"
                    style={{
                      width: "100%",
                      border: 0,
                      display: "block",
                    }}
                    loading="lazy"
                    allowFullScreen
                    title="Ubicación de Neuropsicología Integral en Cali"
                    className="h-[300px] sm:h-[400px] w-full"
                  ></iframe>
                </div>

                {/* BOTÓN para Google Maps */}
                <motion.a
                  href="https://maps.app.goo.gl/tysXDHZ32s9cZam76"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center justify-center p-4 bg-primary-200 hover:bg-primary-300 border-2 border-primary-300 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                    <FaMapMarkerAlt
                      className="text-black mr-3 flex-shrink-0"
                      size={20}
                    />
                    <span className="font-bold text-black text-sm sm:text-lg text-center break-words">
                      Ver ubicación en Google Maps
                    </span>
                  </div>
                </motion.a>

                {/* Instrucción */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <p className="text-gray-600 text-sm text-center">
                    <span className="font-semibold text-primary-200">
                      💡 Tip:
                    </span>{" "}
                    Haz clic en el botón para ver la ubicación exacta y obtener
                    indicaciones
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
