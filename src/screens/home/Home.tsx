import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import About from "../../sections/about/About";
import Contact from "../../sections/contact/Contact";
import Services from "../../sections/services/Services";
import Team from "../../sections/team/Team";
import Training from "../../sections/training/Training";
import Banner from "../banner/Banner";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();

  // Efecto para manejar scroll por hash
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Opcional: Actualizar URL sin recargar
          window.history.pushState({}, "", location.pathname);
        }
      }, 300); // Delay para asegurar que todo está cargado
    }
  }, [location.hash, location.pathname]);

  // También manejar scroll desde sessionStorage (para el BackButton)
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToServices");

    if (shouldScroll === "true") {
      setTimeout(() => {
        const servicesSection = document.getElementById("servicios");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToServices");
      }, 500);
    }
  }, []);
  
  return (
    <div id="inicio" className="min-h-screen bg-white">
      <Header />
      <Banner />
      <About />
      <Services />
      <Team />
      <Training />
      <Contact />
      <Footer />
    </div>
  );
}

