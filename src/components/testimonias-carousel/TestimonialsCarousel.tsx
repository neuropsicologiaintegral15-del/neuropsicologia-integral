import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "../testimonial-card/TestimonialCard";

export default function TestimonialsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  // Datos de testimonios para clínica de neuropsicología
  const testimonials = [
    {
      id: 1,
      name: "Jairo Becerra",
      testimonial:
        "Excelentes profesionales, la mejor decisión para mis nietos Paolo y Luciano. Les agradezco muchísimo la acogida que han tenido y el progreso que se ha visto 🙏…",
      rating: 5,
    },
    {
      id: 2,
      name: "Sandra Angel",
      testimonial:
        "Excelente servicio e interés por la ayuda continua para nuestro hijo, vemos cambios positivos y muy buenas pautas para nosotros como padres.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana María Arias Galeano",
      testimonial:
        "Hicimos una valoración neuropsicológa para nuestro hijo de 4 años y unos cursos de crianza para Papás. Los súper recomiendo la atención es súper personalizada, nos trataron muy bien y sentimos que nos dieron todas las pautas para trabajar en la confianza, seguridad y madurez emocional de los niños. Mil mil Gracias los recomendamos a ojos cerrados.",
      rating: 5,
    },
    {
      id: 4,
      name: "Julie Pauline Rojas Perea",
      testimonial:
        "Trabajan en sinergia desde las diferentes disciplinas de T.O, psicologia y neuropsicologia aportando positivamente al proceso de los niños en su trabajo terapéutico, igualmente, brindan estrategias a los padres para continuar esa labor en casa. Muy humanos. Muy recomendado!",
      rating: 5,
    },
    {
      id: 5,
      name: "Paola Cardona Acevedo",
      testimonial:
        "Me encantan súper recomendados su profesionalismo y tacto con mi hija han sido maravillosos y la evolución que ha tenido en sus terapias 😍…",
      rating: 5,
    },
    {
      id: 6,
      name: "July Andrea Cortes Lugo",
      testimonial:
        "Excelente servicio, calidez humana y acompañamiento continuo. Lo recomiendo 100%",
      rating: 5,
    },
    {
      id: 7,
      name: "Lala Chavarro",
      testimonial:
        "Excelente servicio y calidad humana del personal 😍 Nos han ayudado un montón con nuestra bebé.…",
      rating: 5,
    },
    {
      id: 8,
      name: "Maria Fernanda Rodriguez",
      testimonial:
        "Llevamos a nuestro hijo de 6 años para evaluación neuropsicológica y el proceso ha sido excelente. Los profesionales son muy atentos, explican todo claramente y hemos visto grandes avances en pocas semanas. La comunicación constante con nosotros como padres ha sido fundamental para entender y apoyar el proceso en casa. Recomendados 100%.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Testimonios de nuestros pacientes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubre las experiencias de quienes han confiado en nuestros
            servicios de evaluación y rehabilitación neuropsicológica.
          </p>
        </div>

        {/* Carousel de testimonios */}
        <div className="relative px-2 md:px-12">
          <Swiper
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            speed={500}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            loop={true}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación personalizados */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg text-gray-700 hover:text-primary-dark hover:shadow-xl p-3 rounded-full transition-all duration-300 hidden md:flex items-center justify-center"
            aria-label="Testimonio anterior"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg text-gray-700 hover:text-primary-dark hover:shadow-xl p-3 rounded-full transition-all duration-300 hidden md:flex items-center justify-center"
            aria-label="Siguiente testimonio"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
