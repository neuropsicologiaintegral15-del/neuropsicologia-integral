/* eslint-disable react-hooks/immutability */
import { useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import seminarioInclusionEscolar from "../../assets/img/trainings/seminario_inclusion_escolar_inteligencias_multiples.jpg";
import capacitacionUno from "../../assets/img/trainings/capacitaciones-uno.jpeg";
import capacitacionDos from "../../assets/img/trainings/capacitaciones-dos.jpeg";
import capacitacionTres from "../../assets/img/trainings/capacitaciones-tres.jpeg";
import capacitacionCuatro from "../../assets/img/trainings/capacitaciones-cuatro.jpeg";
import capacitacionCinco from "../../assets/img/trainings/capacitaciones-cinco.jpeg";
import capacitacionSeis from "../../assets/img/trainings/capacitacion_seis.jpeg";
import tallerTrastornosNeurodesarrollo from "../../assets/img/trainings/taller_trastornos_neurodesarrollo_bogota.jpg";
import tallerTrastornoEspectroAutista from "../../assets/img/trainings/taller_trastorno_espectro_autista.jpg";

export default function TrainingCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Datos de capacitaciones
  const trainings = [
    {
      id: 1,
      image: capacitacionUno,
    },
    {
      id: 2,
      image: capacitacionDos,
    },
    {
      id: 3,
      image: capacitacionTres,
    },
    {
      id: 4,
      image: capacitacionCuatro,
    },
    {
      id: 5,
      image: capacitacionCinco,
    },
    {
      id: 5,
      image: tallerTrastornosNeurodesarrollo,
    },
    {
      id: 7,
      image: tallerTrastornoEspectroAutista,
    },
    {
      id: 8,
      image: seminarioInclusionEscolar,
    },
    {
      id: 9,
      image: capacitacionSeis,
    },
  ];

  // Abrir modal con la imagen seleccionada
  const openModal = (training: { src: string }) => {
    setSelectedImage(training);
    setIsModalOpen(true);
    // Deshabilitar scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
  };

  // Cerrar modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    // Habilitar scroll del body
    document.body.style.overflow = "auto";
  };

  return (
    <section className="pt-12 bg-white">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2, // Más lento
          ease: [0.22, 1, 0.36, 1], // Curva de easing más suave
        }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Encabezado simple */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            Capacitaciones
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            Jornadas de capacitación y formación a docentes, padres de familia y
            profesionales del área en temas de neurodesarrollo, neuroeducación,
            neuropsicologia e inclusión escolar
          </motion.p>
        </div>

        {/* Carousel simple */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          whileHover={{
            y: -5,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Swiper
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            speed={800} // Más lento el cambio de slides
            autoplay={{
              delay: 4000, // Más tiempo entre slides
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-4"
          >
            {trainings.map((training) => (
              <SwiperSlide key={training.id}>
                <div
                  className="group cursor-pointer"
                  onClick={() =>
                    openModal({
                      src: training.image,
                    })
                  }
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-xl my-8">
                    {/* Imagen */}
                    <div className="relative h-56 md:h-64">
                      <img
                        src={training.image}
                        alt="Imagen_capacitacion"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500"></div>

                      {/* Botón de expandir */}
                      <motion.div
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <FaExpand className="text-gray-700" size={16} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación */}
          <motion.button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg text-gray-700 hover:text-primary-dark hover:shadow-xl p-3 rounded-full transition-all duration-500 hidden md:flex items-center justify-center"
            aria-label="Imagen anterior"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft size={20} />
          </motion.button>

          <motion.button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg text-gray-700 hover:text-primary-dark hover:shadow-xl p-3 rounded-full transition-all duration-500 hidden md:flex items-center justify-center"
            aria-label="Siguiente imagen"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight size={20} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Modal para imagen ampliada */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={closeModal}
          >
            {/* Contenido del modal */}
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              transition={{
                type: "spring",
                damping: 20, // Más amortiguación para más suavidad
                stiffness: 100, // Menos rigidez
                mass: 0.8, // Más masa para movimiento más pesado/lento
                duration: 0.8,
              }}
              className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-red-600 p-2 rounded-full transition-all duration-300"
                aria-label="Cerrar"
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={20} />
              </motion.button>

              {/* Imagen ampliada */}
              <motion.div
                className="relative h-96 md:h-[500px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img
                  src={selectedImage.src}
                  alt="Imagen_capacitación"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Clic fuera del modal para cerrar */}
            <div className="absolute inset-0 -z-10" onClick={closeModal}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
