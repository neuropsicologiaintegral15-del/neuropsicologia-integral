// components/BackButton.tsx
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BackButtonProps {
  /** Texto del botón */
  title?: string;
  /** Sección a la que debe hacer scroll (sin #) */
  section?: string;
  /** Ruta de destino (por defecto "/") */
  route?: string;
  /** Clases CSS adicionales */
  className?: string;
  /** Clases CSS para el icono */
  iconClass?: string;
  /** Clases CSS para el texto */
  textClass?: string;
  /** ¿Mostrar icono? */
  showIcon?: boolean;
}

export default function BackButton({
  title = "Volver al inicio",
  section = "servicios",
  route = "/",
  className = "",
  iconClass = "",
  textClass = "",
  showIcon = true,
}: BackButtonProps) {
  
  // Construir el hash completo
  const hash = `#${section}`;
  
  return (
    <Link
      to={`${route}${hash}`}
      className={`inline-flex items-center transition-colors mb-4 ${className}`}
    >
      {showIcon && <FaArrowLeft className={`mr-2 ${iconClass}`} />}
      <span className={textClass}>{title}</span>
    </Link>
  );
}