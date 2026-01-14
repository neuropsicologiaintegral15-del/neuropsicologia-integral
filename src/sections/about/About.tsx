import {
  FaHeart,
  FaStar,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
  FaGraduationCap,
  FaShieldAlt,
  FaUserMd,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: <FaStar />,
      title: "Compromiso con la Excelencia",
      description: "Buscamos la más alta calidad en cada servicio",
    },
    {
      icon: <FaHeart />,
      title: "Empatía y Respeto",
      description: "Entendemos y valoramos a cada paciente",
    },
    {
      icon: <FaShieldAlt />,
      title: "Integridad y Transparencia",
      description: "Actuamos con honestidad y claridad",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovación y Creatividad",
      description: "Implementamos soluciones vanguardistas",
    },
    {
      icon: <FaUsers />,
      title: "Trabajo en Equipo",
      description: "Colaboramos para mejores resultados",
    },
    {
      icon: <FaGraduationCap />,
      title: "Educación Continua",
      description: "Nos actualizamos constantemente",
    },
    {
      icon: <FaHandsHelping />,
      title: "Responsabilidad Social",
      description: "Contribuimos al bienestar comunitario",
    },
    {
      icon: <FaUserMd />,
      title: "Orientación al Paciente",
      description: "Tu bienestar es nuestra prioridad",
    },
  ];

  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center my-12">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5, // Más lento
              ease: [0.16, 1, 0.3, 1], // Easing ultra suave
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            ¿Quiénes somos?
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-primary-dark mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
          />
        </div>

        {/* Texto descriptivo */}
        <motion.div
          className="bg-white flex flex-col rounded-xl shadow-lg p-8 mb-20 text-justify gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            El Centro de Neuropsicología Integral es una institución
            especializada en la evaluación, diagnóstico e intervención de los
            procesos cognitivos, emocionales, conductuales y del neurodesarrollo
            en niños, adolescentes, adultos y adultos mayores. Nuestro trabajo
            se fundamenta en las neurociencias, la psicología clínica y la
            evidencia científica, con el objetivo de ofrecer acompañamientos
            precisos, éticos y orientados a resultados reales.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Somos un centro legalmente constituido y habilitado ante la
            Secretaría de Salud, lo que garantiza altos estándares de calidad,
            responsabilidad clínica y cumplimiento normativo en todos nuestros
            procesos. Contamos con un equipo interdisciplinario altamente
            calificado en neuropsicología infantil y clínica, psicología,
            neurología, psiquiatría, terapia ocupacional y fonoaudiología, lo
            que nos permite realizar abordajes integrales y articulados,
            ajustados a las necesidades particulares de cada paciente.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Nuestro modelo de atención se basa en una comprensión profunda del
            funcionamiento cerebral y su relación con el aprendizaje, la
            conducta, la regulación emocional y la adaptación al entorno. A
            partir de evaluaciones rigurosas y análisis por procesos, diseñamos
            planes de intervención individualizados que consideran no solo al
            paciente, sino también a su contexto familiar, educativo y social.
          </p>
        </motion.div>

        {/* MISIÓN */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.2, // Pequeño delay para que no entren todos a la vez
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <FaBullseye className="text-primary-dark text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Misión</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            El Centro de Neuropsicología Integral tiene como misión brindar una
            atención especializada y de alta calidad en el diagnóstico,
            tratamiento y rehabilitación de las diversas alteraciones
            neuropsicológicas. A través de un enfoque multidisciplinario,
            buscamos mejorar la calidad de vida de nuestros pacientes y sus
            familias, promoviendo su bienestar cognitivo, emocional y social.
            Nos comprometemos a utilizar las mejores prácticas y tecnologías
            disponibles, así como a contribuir al avance del conocimiento en el
            campo de la neuropsicología mediante la investigación y la formación
            continua de nuestros profesionales.
          </p>
        </motion.div>

        {/* VISIÓN */}
        <motion.div
          className="bg-primary-50 rounded-xl p-8 mb-12 border-l-4 border-primary-dark"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.3, // Delay un poco más para secuencia
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-3 rounded-lg mr-4">
              <FaEye className="text-primary-dark text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Visión</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ser un centro de referencia a nivel nacional e internacional en la
            evaluación, tratamiento y rehabilitación neuropsicológica,
            reconocido por nuestra excelencia clínica, innovación y compromiso
            con la comunidad. Aspiramos a liderar en la integración de enfoques
            terapéuticos avanzados y personalizados, y a influir positivamente
            en las políticas de salud mental y neuropsicología.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Nuestra visión incluye ser un pilar en la formación de profesionales
            altamente capacitados y en la generación de conocimiento a través de
            la investigación científica de vanguardia.
          </p>
        </motion.div>

        {/* Valores */}
        <div className="mb-12">
          <motion.h3
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Nuestros valores institucionales
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:border-primary-200 transition-all duration-300"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15, // Animación escalonada más lenta
                  ease: [0.34, 1.56, 0.64, 1], // Easing con rebote suave
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <motion.div
                  className="text-primary-dark text-2xl mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.15 + 0.2,
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                  }}
                  viewport={{ once: true }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="font-bold text-gray-800 mb-2">{value.title}</h4>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
