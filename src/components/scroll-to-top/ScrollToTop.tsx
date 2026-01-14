import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // 'PUSH', 'POP', o 'REPLACE'

  useEffect(() => {
    // Solo hacer scroll al top en navegación HACIA ADELANTE (nueva página)
    // No hacerlo en POP (volver atrás/adelante en historial)
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [pathname, navigationType]);

  return null;
}
