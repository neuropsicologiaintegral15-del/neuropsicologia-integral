import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // Importa el tipo
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Banner () {
  // Usa el tipo correcto de Swiper
  const swiperRef = useRef<SwiperType | null>(null);

  // Imágenes para el carousel (puedes reemplazar con tus propias imágenes)
  const carouselImages = [
    {
      id: 1,
      image:
        "https://img.freepik.com/fotos-premium/doctor-ayudando-al-paciente-oficina-elaborar-plan-tratamiento_155404-1220.jpg",
      alt: "Neuropsicóloga evaluando paciente",
      title: "Evaluación Especializada",
      subtitle: "Diagnóstico preciso para un tratamiento efectivo",
    },
    {
      id: 2,
      image:
        "https://hospitalangeles.com/assets/img/imgservicios/terapia-medica-familiar.webp",
      alt: "Terapeuta trabajando con niño",
      title: "Atención Infantil",
      subtitle: "Cuidado especializado para el desarrollo infantil",
    },
    {
      id: 3,
      image:
        "https://www.unir.net/wp-content/uploads/2022/06/banner-view-of-smiling-senior-patient-at-hospital-consultation-picture-id1294678891-1.jpg",
      alt: "Profesional con adulto mayor",
      title: "Atención Adulto Mayor",
      subtitle: "Cuidado integral para adultos mayores",
    },
    {
      id: 4,
      image:
        "https://consultoriopsicologia.unbosque.edu.co/sites/default/files/inline-images/IMG_98452.jpg",
      alt: "Equipo multidisciplinario",
      title: "Equipo Profesional",
      subtitle: "Especialistas en diferentes áreas del desarrollo",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Carousel Principal */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        <Swiper
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={500}
          autoplay
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          loop={true}
          className="h-full"
        >
          {carouselImages.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full">
                {/* Imagen de fondo con overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />

                {/* Overlay oscuro para mejor legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

                {/* Contenido sobre la imagen */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4">
                    <motion.div
                      className="max-w-3xl text-white text-center lg:text-left"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
                        {slide.title}
                      </h2>
                      <p className="text-base md:text-xl opacity-90 px-4 lg:px-0">
                        {slide.subtitle}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación personalizados */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
          aria-label="Imagen anterior"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hidden md:block"
          aria-label="Siguiente imagen"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};
