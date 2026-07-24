import { motion } from "framer-motion";
import Footer from "../../components/footer/Footer";
import BackButton from "../../components/back-button/BackButton";
import tallerUno from "../../assets/img/trainings/taller_uno.jpg"
import capacitacionInfoUno from "../../assets/img/trainings/capacitacion_info_uno.jpeg"
import capacitacionInfoDos from "../../assets/img/trainings/capacitacion_info_dos.jpeg"
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../components/scroll-to-top-button/ScrollToTopButton";

export default function WorkShopsTraining() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Contenido principal */}
      <main className="px-4 py-8">
        <motion.div
          className="flex container mx-auto justify-start"
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
        <div className="container mx-auto my-8">
          {/* Mensaje principal */}
          <motion.div
            className="flex flex-row bg-white rounded-2xl shadow-xl border-l-4 border-primary-dark"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img className="w-1/2 rounded-2xl" src={capacitacionInfoUno} alt="Capacitacion_Info_Uno" />
            <img className="w-1/2 rounded-r-2xl" src={capacitacionInfoDos} alt="Capacitacion_Info_Dos" />
          </motion.div>

          {/* Texto debajo de las imágenes */}
          <motion.div
            className="mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                🧠✨ <span className="font-semibold">Mantener una mente activa</span> es una de las mejores inversiones que podemos hacer para nuestra salud y calidad de vida.
              </p>

              <p className="leading-relaxed">
                En el Centro de Neuropsicología Integral hemos creado <span className="font-semibold text-primary-dark">Cerebro en Acción</span>, un programa especialmente diseñado para adultos y adultos mayores que desean fortalecer sus habilidades cognitivas, mantenerse mentalmente activos y compartir en un espacio de bienestar, aprendizaje y socialización.
              </p>

              <p className="leading-relaxed">
                A través de actividades dirigidas por profesionales, trabajaremos memoria, atención, lenguaje, funciones ejecutivas, bienestar emocional y estrategias para promover un envejecimiento activo y saludable.
              </p>

              <div className="flex justify-center flex-col items-center">
                <div className="bg-blue-50 rounded-xl p-4 my-4 space-y-2 flex justify-center items-center flex-col">
                  <p className="font-medium">🕣 <span className="font-semibold">Martes y jueves</span> de 8:30 a.m. a 10:30 a.m.</p>
                  <p className="font-medium">👥 <span className="font-semibold">Cupos limitados:</span> 10 participantes por grupo</p>
                  <p className="font-medium">💰 <span className="font-semibold">Inversión mensual:</span> $480.000</p>
                </div>
                <div>
                  <p className="font-semibold text-center mb-2">Incluye:</p>
                  <ul className="space-y-1 ml-5 list-disc">
                    <li>✔️ 16 horas mensuales</li>
                    <li>✔️ Materiales</li>
                    <li>✔️ Seguimiento grupal</li>
                    <li>✔️ Actividades dirigidas</li>
                  </ul>
                </div>

                <p className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                  🎁 Además, por inscribirte en el programa obtendrás un <span className="font-bold">20% de descuento</span> en evaluación por Neuropsicología Clínica.
                </p>
              </div>


              <p className="italic text-center text-gray-600 py-2">
                Porque un cerebro activo es un cerebro con más posibilidades de disfrutar, aprender y mantenerse funcional a lo largo de la vida.
              </p>

              {/* Botón verde de WhatsApp */}
              <motion.a
                href="https://api.whatsapp.com/send?phone=573171148512&text=Hola,%20me%20interesa%20información%20sobre%20sus%20servicios%20de%20neuropsicología"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl w-full lg:w-1/2 mx-auto flex items-center justify-center"
                whileHover={{ translateY: -3.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: "transform" }}
              >
                <div className="flex items-center p-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <FaWhatsapp className="text-green-600" size={24} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-bold text-gray-800 text-sm sm:text-lg">
                      Reserva tu cupo: (+57) 317 114 8512
                    </h4>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto justify-center">
          {/* Columna izquierda: Imagen + texto de inscripción */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-inline">


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <img className="rounded-2xl w-full" src={tallerUno} alt="Capacitacion_Info_Uno" />

            </motion.div>

            {/* Columna derecha: Información del taller */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  🧠✨ <span className="font-semibold">Taller: Neurociencias Aplicadas a la Educación</span>
                </p>

                <span className="font-semibold text-primary-dark">"Comprender el cerebro para transformar el aprendizaje"</span>

                <p className="leading-relaxed pt-4">
                  Actualiza tus conocimientos y adquiere herramientas prácticas para su ejercicio profesional de la Neuropsicóloga y la CEO del Centro de Neuropsicología Integral Dra. Viviana Solís Arcilla en un espacio diseñado para conectar la ciencia del cerebro con la práctica educativa y el desarrollo humano.
                </p>

                <p className="leading-relaxed font-semibold text-lg">
                  📌 ¿Qué aprenderás en este taller?
                </p>

                <div>
                  <p className="font-semibold mb-2">En este encuentro abordaremos tres áreas fundamentales integradas en un solo espacio:</p>
                  <ul className="space-y-1 ml-5 list-disc">
                    <li>Neurodesarrollo: Comprende cómo evoluciona y madura el cerebro a lo largo de las distintas etapas de la vida, y cómo esto influye en el comportamiento y las capacidades del ser humano.</li>
                    <li>Neuropsicología: Aprende a evaluar, identificar y comprender los procesos cognitivos clave (atención, memoria, funciones ejecutivas) que intervienen en la vida cotidiana.</li>
                    <li>Neuroeducación: Descubre cómo aplicar la evidencia científica actual para diseñar estrategias pedagógicas efectivas que fortalezcan y optimicen el aprendizaje.</li>
                  </ul>
                </div>

                <p className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                  Haz click en el siguiente botón para conocer a nuestro equipo de trabajo.
                </p>

                <div className="flex justify-center">
                  <motion.button
                    onClick={() => navigate("/equipo-completo")}
                    className="inline-flex items-center justify-center bg-primary-dark hover:bg-white text-white hover:text-black border-2 border-primary-dark hover:border-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Conoce a nuestro equipo
                    <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

              </div>
            </motion.div>
          </div>
          <div className="w-full mt-8">
            {/* Texto de inscripción debajo de la imagen */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="space-y-4 text-gray-700">
                <p className="text-xl font-bold text-primary-dark text-center">
                  📲 ¡Reserva tu cupo hoy mismo!
                </p>

                <p className="text-lg font-semibold">📝 ¿Cómo inscribirse?</p>

                <div className="space-y-2">
                  <p className="font-medium">1. Realiza el pago por los medios habilitados:</p>
                  <ul className="ml-5 space-y-1 list-disc">
                    <li><span className="font-semibold">Bancolombia</span> cta ahorros # 80892131442 (nombre de Héctor Solís)</li>
                    <li><span className="font-semibold">Nequi</span> 3163413345</li>
                    <li><span className="font-semibold">Daviplata:</span> 3017324652</li>
                    <li><span className="font-semibold">Llave</span> @vsa510</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-medium">2. Una vez hayas hecho el pago, envíanos el soporte vía WhatsApp al <span className="font-semibold">☎️(+57) 317 1148512</span> (línea exclusiva) con los siguientes datos:</p>
                  <ul className="ml-5 space-y-1 list-disc">
                    <li>Nombre completo (como aparecerá en el certificado)</li>
                    <li>Número de identificación</li>
                    <li>Teléfono de contacto</li>
                    <li>Profesión</li>
                    <li>Correo electrónico válido para envío de certificado</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm">
                    <span className="font-semibold">🛑</span> Si eres estudiante o haces parte del personal de convenio, debes notificarlo y enviar soporte del mismo.
                  </p>
                </div>

                <p className="text-center text-lg font-semibold text-red-500">
                  🛑 Los cupos son limitados.
                </p>

                <p className="text-center text-xl font-bold text-primary-dark">
                  ¡No te quedes por fuera!
                </p>

                {/* Botón de WhatsApp para inscripción */}
                <motion.a
                  href="https://api.whatsapp.com/send?phone=573171148512&text=Hola,%20me%20interesa%20inscribirme%20en%20el%20taller%20de%20Neurociencias%20Aplicadas%20a%20la%20Educación"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl w-11/12 sm:w-1/2 mx-auto"
                  whileHover={{ translateY: -3 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center justify-center p-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
                    <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                      <FaWhatsapp className="text-green-600" size={24} />
                    </div>
                    <div className="flex-grow text-center">
                      <h4 className="font-bold text-gray-800 text-sm sm:text-lg">
                        Envíanos tu soporte por WhatsApp
                      </h4>
                    </div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}