import { motion } from "framer-motion";
import logo from "../../assets/img/logo/logo.png";

interface LoaderProps {
  duration?: number; // duración de la rotación en segundos
  circleSize?: number; // tamaño del círculo en píxeles
  logoSize?: number; // tamaño del logo en píxeles
  circleColor?: string; // color del círculo
}

export default function Loader({
  duration = 2,
  circleSize = 160,
  logoSize = 128,
  circleColor = "primary-dark",
}: LoaderProps) {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="relative flex items-center justify-center">
        {/* Círculo exterior que gira */}
        <motion.div
          className="absolute border-4 border-gray-300 rounded-full"
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            borderTopColor: `var(--color-${circleColor})`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: {
              duration: duration,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        />

        {/* Segundo círculo interior (opcional, gira en sentido contrario) */}
        <motion.div
          className="absolute"
          animate={{
            rotate: -360,
          }}
          transition={{
            rotate: {
              duration: duration * 1.5,
              ease: "linear",
              repeat: Infinity,
            },
          }}
        />

        {/* Logo estático en el centro */}
        <div className="relative z-10">
          <img
            className="object-contain"
            src={logo}
            alt="Logo Neuropsicología Integral"
            style={{ width: `${logoSize}px` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
