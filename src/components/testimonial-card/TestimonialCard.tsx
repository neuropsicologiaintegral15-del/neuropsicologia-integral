import { useState } from "react";
import { FaStar, FaChevronUp, FaChevronDown } from "react-icons/fa";

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    testimonial: string;
    rating: number;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 180; // Caracteres antes de truncar
  const isLong = testimonial.testimonial.length > maxLength;

  const displayText =
    isExpanded || !isLong
      ? testimonial.testimonial
      : `${testimonial.testimonial.substring(0, maxLength)}...`;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
        size={16}
      />
    ));
  };

  return (
    <div className="rounded-xl shadow-lg p-6 my-12 h-full flex flex-col transition-all duration-300 hover:shadow-xl min-h-[320px]">
      {/* Valoración con estrellas */}
      <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

      {/* Texto del testimonio */}
      <div className="flex-grow mb-4">
        <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">
          "{displayText}"
        </p>
      </div>

      {/* Botón Leer más/menos - Solo si es largo */}
      {isLong && (
        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center text-primary-dark hover:text-primary-dark text-sm font-medium transition-colors"
          >
            {isExpanded ? (
              <>
                Leer menos <FaChevronUp className="ml-1" size={12} />
              </>
            ) : (
              <>
                Leer más <FaChevronDown className="ml-1" size={12} />
              </>
            )}
          </button>
        </div>
      )}

      {/* Información de la persona - SIEMPRE ABAJO */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <h4 className="font-bold text-gray-800 text-center md:text-left">
          {testimonial.name}
        </h4>
      </div>
    </div>
  );
}
