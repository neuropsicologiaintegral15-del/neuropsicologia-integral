import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import logowhite from "../../assets/img/logo/logo_white.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-10">
      <div className="container mx-auto px-4">
        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:items-center items-start">
          {/* Columna 1: Logo y derechos - mejor centrado */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <img
                className="w-32 opacity-95 hover:opacity-100 transition-opacity duration-300"
                src={logowhite}
                alt="Neuropsicología Integral Logo"
              />
            </div>
            <p className="mt-4 text-white text-sm">
              &copy; {year} Neuropsicología Integral. Todos los derechos
              reservados.
            </p>
          </div>

          {/* Columna 2: Redes sociales - diseño mejorado */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-primary-200 tracking-wide">
              Redes Sociales
            </h4>
            <div className="flex justify-center items-center gap-4 w-full">
              <a
                href="https://www.facebook.com/Neuropsicologiaintegral1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center bg-white text-primary-dark hover:text-white hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/neuropsicologiaintegral?r=nametag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center bg-white text-primary-dark hover:text-white hover:bg-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/573163413345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center bg-white text-primary-dark hover:text-white hover:bg-green-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/Neuropsicologavivianasolis/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center bg-white text-primary-dark hover:text-white hover:bg-[#146ccc] p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <SlSocialLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Columna 3: Certificación - diseño mejorado */}
          <div className="text-center lg:text-right">
            <div className="inline-block bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="https://neurofic.com/wp-content/uploads/2023/11/Distintivo-Habilitacion-removebg-preview.png"
                alt="Certificación Secretaría de Salud"
                className="w-28"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
