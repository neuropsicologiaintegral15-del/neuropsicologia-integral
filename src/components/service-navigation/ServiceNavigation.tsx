import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaList, FaTimes } from "react-icons/fa";
import { allServices } from "../../screens/service/data/services";

interface ServiceNavigationProps {
  currentService: string;
}

export default function ServiceNavigation({
  currentService,
}: ServiceNavigationProps) {
  const [showAllServices, setShowAllServices] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Función para cerrar el menú
  const closeMenu = useCallback(() => {
    setShowAllServices(false);
  }, []);

  // Cerrar el menú cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    // Agregar el event listener cuando el menú está abierto
    if (showAllServices) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showAllServices, closeMenu]);

  // Cerrar el menú con la tecla Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (showAllServices) {
      document.addEventListener("keydown", handleEscapeKey);
      return () => {
        document.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [showAllServices, closeMenu]);

  return (
    <div className="relative">
      {/* Navegación principal */}
      <div className="flex justify-start py-4 border-t border-white/20">
        {/* Botón para ver todos los servicios */}
        <button
          ref={buttonRef}
          onClick={() => setShowAllServices(!showAllServices)}
          className="flex items-center text-primary-dark text-base transition-colors px-4 py-2 rounded-lg bg-white hover:bg-white/80 cursor-pointer border border-gray-200 hover:shadow-md cursor-pointer"
          aria-expanded={showAllServices}
          aria-haspopup="true"
        >
          <FaList className="mr-2" />
          <span>Mira más servicios</span>
          <span className="ml-2 text-sm text-white bg-primary-dark px-2 py-2 rounded-sm">
            {allServices.length}
          </span>
        </button>

      </div>

      {/* Lista desplegable de todos los servicios */}
      <AnimatePresence>
        {showAllServices && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-50 bg-white rounded-lg shadow-xl mt-2 border border-gray-200"
          >
            {/* Cabecera con botón de cerrar */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">
                Todos nuestros servicios
              </h3>
              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Cerrar"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Grid de servicios */}
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {allServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/servicios/${service.slug}`}
                    onClick={closeMenu}
                    className={`p-3 rounded-lg transition-all duration-200 ${
                      service.slug === currentService
                        ? "bg-primary-dark text-white"
                        : "bg-gray-50 hover:bg-primary-dark/10 text-gray-700 hover:text-primary-dark"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full mr-3 flex-shrink-0 ${
                          service.slug === currentService
                            ? "bg-white"
                            : "bg-primary-dark"
                        }`}
                      ></div>
                      <span className="font-medium text-sm truncate">
                        {service.title}
                      </span>
                      {service.slug === currentService && (
                        <span className="ml-2 text-xs bg-white/30 px-2 py-0.5 rounded-full flex-shrink-0">
                          Actual
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para móviles */}
      {showAllServices && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={closeMenu}
        />
      )}
    </div>
  );
}