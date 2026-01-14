import { FaArrowRight } from "react-icons/fa";
import TrainingCarousel from "../../components/training-carousel/TrainingCarousel";
import { motion } from "framer-motion";

export default function Training() {
  return (
    <div id="capacitaciones">
      <TrainingCarousel />
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={() => {
            window.location.href = "/capacitaciones-talleres";
          }}
          className="inline-flex items-center justify-center text-sm sm:text-base bg-primary-dark hover:bg-white text-white hover:text-black border-2 hover:border-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Descubre mas capacitaciones
          <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
}
