import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/img/logo/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Variantes para la animación del menú desplegable
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  // Variantes para los items del menú
  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="/">
              <img className="w-20" src={logo} alt="logo" />
            </a>
          </div>

          {/* Menú para desktop - Ahora desde lg (1024px) */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <a
              href="#inicio"
              className="text-primary-700 hover:text-primary-dark font-medium transition-colors duration-200"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="text-gray-700 hover:text-primary-dark font-medium transition-colors duration-200"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="text-gray-700 hover:text-primary-dark font-medium transition-colors duration-200"
            >
              Servicios
            </a>
            <a
              href="#equipo"
              className="text-gray-700 hover:text-primary-dark font-medium transition-colors duration-200"
            >
              Equipo
            </a>
            <a
              href="#capacitaciones"
              className="text-gray-700 hover:text-primary-dark font-medium transition-colors duration-200"
            >
              Capacitaciones
            </a>
            <a
              href="#contacto"
              className="text-gray-700 hover:text-primary-dark font-medium transition-colors duration-200"
            >
              Contacto
            </a>
            <Link
              to="https://wa.me/573163413345"
              target="_blank"
              className="block bg-green-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 hover:scale-105 transform"
            >
              Agendar cita
            </Link>
          </nav>

          {/* Botón para móvil y tablet - Ahora visible hasta lg (1024px) */}
          <motion.button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Menú móvil/tablet con animación */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <nav className="flex flex-col items-start space-y-1 py-4">
                <motion.a
                  href="#inicio"
                  className="text-gray-700 hover:text-primary-dark hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                >
                  Inicio
                </motion.a>

                <motion.a
                  href="#nosotros"
                  className="text-gray-700 hover:text-primary-dark hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                >
                  Nosotros
                </motion.a>

                <motion.a
                  href="#servicios"
                  className="text-gray-700 hover:text-primary-dark hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                >
                  Servicios
                </motion.a>

                <motion.a
                  href="#equipo"
                  className="text-gray-700 hover:text-primary-dark hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                >
                  Equipo
                </motion.a>

                <motion.a
                  href="#capacitaciones"
                  className="text-gray-700 hover:text-primary-dark hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                >
                  Capacitaciones
                </motion.a>

                <motion.a
                  href="#contacto"
                  className="text-gray-700 hover:text-primary-dark hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                >
                  Contacto
                </motion.a>

                <motion.div variants={itemVariants} className="mt-4">
                  <Link
                    to="https://wa.me/573163413345"
                    target="_blank"
                    className="bg-green-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 hover:scale-105 transform"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Agendar cita
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
