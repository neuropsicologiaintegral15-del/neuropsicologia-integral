import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./screens/home/Home";
import Professionals from "./screens/professionals/Professionals";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import ScrollToTopButton from "./components/scroll-to-top-button/ScrollToTopButton";
import Loader from "./components/loader/Loader";
import WorkShopsTraining from "./screens/workshops-training/WorkshopsTraining";
import Service from "./screens/service/Service";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <AnimatePresence>{isLoading && <Loader duration={2} />}</AnimatePresence>

      {!isLoading && (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipo-completo" element={<Professionals />} />
            <Route path="/servicios/:serviceSlug" element={<Service />} />
            <Route
              path="/capacitaciones-talleres"
              element={<WorkShopsTraining />}
            />
          </Routes>
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}
