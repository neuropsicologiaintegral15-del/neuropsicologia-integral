// Tipos para los iconos (deben coincidir con los iconos de react-icons/fa)
export type IconName =
  | "FaUserMd"
  | "FaStethoscope"
  | "FaBrain"
  | "FaClipboardCheck"
  | "FaChartBar"
  | "FaHandsHelping"
  | "FaComments"
  | "FaCogs"
  | "FaChalkboardTeacher"
  | "FaCheckCircle"
  | "FaClock"
  | "FaUsers"
  | "FaWhatsapp"
  | "FaBullseye"
  | "FaQuestionCircle";

// Tipos para los servicios
export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: IconName; // Icono de React Icons
  description: string;
  whatIsDone: string;
  objectives: string[];
  whatItWorksOn: string[];
  approaches?: string[]; // Solo para psicología
  duration?: string;
  modalities?: string[];
  relatedServices?: string[]; // IDs de servicios relacionados
}

// Datos de todos los servicios
export const servicesData: Record<string, ServiceData> = {
  psicologia: {
    id: "psicologia",
    slug: "psicologia",
    title: "Psicología",
    subtitle: "Atención psicológica especializada para todas las edades",
    icon: "FaUserMd",
    description:
      "Brindamos acompañamiento psicológico desde enfoques clínicos basados en evidencia.",
    whatIsDone:
      "Se brinda acompañamiento psicológico desde enfoques clínicos basados en evidencia, orientado al fortalecimiento de la salud mental, la regulación emocional, la conducta y las habilidades adaptativas.",
    objectives: [
      "Promover el bienestar emocional y psicológico.",
      "Fortalecer recursos personales y familiares.",
      "Acompañar procesos de adaptación, regulación y manejo emocional.",
    ],
    whatItWorksOn: [
      "Regulación emocional",
      "Ansiedad, tristeza y estados emocionales asociados",
      "Manejo conductual",
      "Habilidades sociales",
      "Autonomía, autoestima y adaptación",
    ],
    approaches: [
      "Terapia cognitivo-conductual",
      "Enfoque sistémico",
      "Mindfulness y meditación",
      "Terapia de juego (para niños)",
      "Terapia de aceptación y compromiso",
    ],
    duration: "45 minutos",
    modalities: ["Presencial y virtual"],
    relatedServices: ["neuropsicologia-clinica", "pruebas-cognitivas"],
  },

  neurologia: {
    id: "neurologia",
    slug: "neurologia",
    title: "Neurología Pediátrica",
    subtitle:
      "Valoración médica especializada del sistema nervioso en niños y adolescentes",
    icon: "FaStethoscope",
    description:
      "Diagnóstico y seguimiento de condiciones neurológicas del neurodesarrollo.",
    whatIsDone:
      "Se realiza la valoración médica especializada del sistema nervioso en niños y adolescentes, orientada a identificar, diagnosticar y hacer seguimiento a condiciones neurológicas que pueden impactar el desarrollo, el aprendizaje, la conducta y la regulación emocional.",
    objectives: [
      "Diagnosticar de manera precisa condiciones neurológicas del neurodesarrollo.",
      "Determinar la necesidad de estudios complementarios y manejo farmacológico cuando corresponda.",
      "Articular el abordaje médico con los procesos terapéuticos y psicológicos.",
    ],
    whatItWorksOn: [
      "Retrasos del neurodesarrollo",
      "Trastornos neurológicos infantiles",
      "Cefaleas, convulsiones y episodios neurológicos",
      "TDAH y trastornos del neurodesarrollo",
      "Seguimiento neurológico integral en trabajo interdisciplinario",
    ],
    duration: "30 minutos",
    modalities: ["Presencial"],
    relatedServices: ["neuropsicologia-infantil", "terapia-ocupacional"],
  },

  "neuropsicologia-infantil": {
    id: "neuropsicologia-infantil",
    slug: "neuropsicologia-infantil",
    title: "Neuropsicología Infantil",
    subtitle:
      "Evaluación especializada del funcionamiento cognitivo y del neurodesarrollo",
    icon: "FaBrain",
    description:
      "Evaluación integral del perfil cognitivo en niños y adolescentes.",
    whatIsDone:
      "Se realizan evaluaciones especializadas del funcionamiento cognitivo y del neurodesarrollo en niños y adolescentes, integrando pruebas estandarizadas, observación clínica y análisis por procesos.",
    objectives: [
      "Comprender el perfil cognitivo y conductual del niño.",
      "Identificar fortalezas y áreas que requieren acompañamiento.",
      "Orientar procesos terapéuticos y educativos ajustados.",
    ],
    whatItWorksOn: [
      "Atención",
      "Memoria",
      "Lenguaje",
      "Funciones ejecutivas",
      "Habilidades visoespaciales",
      "Procesos de aprendizaje y autorregulación",
    ],
    duration: "Varía según las pruebas",
    modalities: ["Presencial"],
    relatedServices: ["neurologia", "pruebas-cognitivas"],
  },

  "neuropsicologia-clinica": {
    id: "neuropsicologia-clinica",
    slug: "neuropsicologia-clinica",
    title: "Neuropsicología Clínica",
    subtitle:
      "Evaluación del funcionamiento cognitivo en adolescentes, adultos y adultos mayores",
    icon: "FaClipboardCheck",
    description:
      "Evaluación cognitiva especializada para diferentes grupos etarios.",
    whatIsDone:
      "Se evalúa el funcionamiento cognitivo en adolescentes, adultos y adultos mayores, con el fin de identificar cambios, alteraciones o perfiles cognitivos asociados a condiciones clínicas, neurológicas o emocionales.",
    objectives: [
      "Establecer el estado cognitivo actual del paciente.",
      "Orientar diagnósticos clínicos y decisiones terapéuticas.",
      "Diseñar planes de intervención o rehabilitación cognitiva.",
    ],
    whatItWorksOn: [
      "Memoria",
      "Atención",
      "Lenguaje",
      "Funciones ejecutivas",
      "Velocidad de procesamiento",
      "Cognición global y funcionalidad",
    ],
    duration: "2-3 horas (evaluación)",
    modalities: ["Presencial"],
    relatedServices: ["psicologia", "terapia-rehabilitacion-cognitiva"],
  },

  "pruebas-cognitivas": {
    id: "pruebas-cognitivas",
    slug: "pruebas-cognitivas",
    title: "Pruebas Cognitivas",
    subtitle:
      "Medición objetiva de habilidades cognitivas, intelectuales y académicas",
    icon: "FaChartBar",
    description:
      "Aplicación de instrumentos estandarizados para evaluación cognitiva.",
    whatIsDone:
      "Aplicación de instrumentos estandarizados para la medición objetiva de habilidades cognitivas, intelectuales y académicas, según la edad y el motivo de consulta.",
    objectives: [
      "Obtener información precisa y cuantificable del funcionamiento cognitivo.",
      "Apoyar procesos diagnósticos clínicos y educativos.",
      "Orientar intervenciones y recomendaciones personalizadas.",
    ],
    whatItWorksOn: [
      "Coeficiente intelectual",
      "Habilidades verbales y no verbales",
      "Memoria y atención",
      "Funciones ejecutivas",
      "Procesos académicos básicos",
    ],
    duration: "Varía según pruebas",
    modalities: ["Presencial"],
    relatedServices: ["neuropsicologia-infantil", "neuropsicologia-clinica"],
  },

  "terapia-ocupacional": {
    id: "terapia-ocupacional",
    slug: "terapia-ocupacional",
    title: "Terapia Ocupacional",
    subtitle:
      "Desarrollo de habilidades funcionales para la vida diaria y el aprendizaje",
    icon: "FaHandsHelping",
    description: "Acompañamiento en el desarrollo de habilidades funcionales.",
    whatIsDone:
      "Se acompaña el desarrollo de habilidades funcionales necesarias para la vida diaria, el aprendizaje y la participación activa en los distintos entornos.",
    objectives: [
      "Favorecer la autonomía y la independencia funcional.",
      "Mejorar la regulación sensorial y motora.",
      "Potenciar la organización corporal y el desempeño ocupacional.",
    ],
    whatItWorksOn: [
      "Integración sensorial",
      "Motricidad fina y gruesa",
      "Planeación motora",
      "Organización postural",
      "Permanencia en la actividad y autorregulación",
    ],
    duration: "45 minutos",
    modalities: ["Presencial"],
    relatedServices: ["fonoaudiologia", "neuropsicologia-infantil"],
  },

  fonoaudiologia: {
    id: "fonoaudiologia",
    slug: "fonoaudiologia",
    title: "Fonoaudiología",
    subtitle: "Evaluación e intervención de comunicación, lenguaje y habla",
    icon: "FaComments",
    description: "Intervención especializada en procesos comunicativos.",
    whatIsDone:
      "Se evalúan e intervienen los procesos de comunicación, lenguaje, habla y funciones orales, considerando el desarrollo neurológico y cognitivo del paciente.",
    objectives: [
      "Fortalecer la comunicación funcional.",
      "Mejorar la comprensión y expresión del lenguaje.",
      "Favorecer la articulación y la inteligibilidad del habla.",
    ],
    whatItWorksOn: [
      "Lenguaje comprensivo y expresivo",
      "Articulación y producción del habla",
      "Pragmática y comunicación social",
      "Funciones orofaciales",
      "Procesos fonológicos",
    ],
    duration: "45 minutos",
    modalities: ["Presencial"],
    relatedServices: ["terapia-ocupacional", "neuropsicologia-infantil"],
  },

  "terapia-rehabilitacion-cognitiva": {
    id: "terapia-rehabilitacion-cognitiva",
    slug: "terapia-rehabilitacion-cognitiva",
    title: "Terapia de Rehabilitación Cognitiva",
    subtitle:
      "Recuperación y fortalecimiento de funciones cognitivas comprometidas",
    icon: "FaCogs",
    description:
      "Proceso terapéutico para optimizar el funcionamiento cognitivo.",
    whatIsDone:
      "Proceso terapéutico orientado a recuperar, compensar o fortalecer funciones cognitivas que se han visto comprometidas por condiciones neurológicas, del desarrollo o del ciclo vital.",
    objectives: [
      "Optimizar el funcionamiento cognitivo.",
      "Favorecer la autonomía y la funcionalidad diaria.",
      "Implementar estrategias compensatorias eficaces.",
    ],
    whatItWorksOn: [
      "Atención",
      "Memoria",
      "Funciones ejecutivas",
      "Velocidad de procesamiento",
      "Estrategias metacognitivas",
    ],
    duration: "45 minutos",
    modalities: ["Presencial"],
    relatedServices: ["neuropsicologia-clinica", "pruebas-cognitivas"],
  },

  "asesorias-charlas-talleres": {
    id: "asesorias-charlas-talleres",
    slug: "asesorias-charlas-talleres",
    title: "Asesorías, Charlas y Talleres",
    subtitle:
      "Espacios formativos sobre neurodesarrollo, aprendizaje y salud mental",
    icon: "FaChalkboardTeacher",
    description:
      "Formación especializada para familias, docentes e instituciones.",
    whatIsDone:
      "Se diseñan y ejecutan espacios formativos dirigidos a familias, docentes, instituciones educativas y profesionales, con enfoque en neurodesarrollo, aprendizaje y salud mental.",
    objectives: [
      "Brindar orientación clara y basada en evidencia.",
      "Fortalecer competencias parentales y educativas.",
      "Promover prácticas informadas y preventivas.",
    ],
    whatItWorksOn: [
      "Neuroeducación",
      "Crianza y regulación emocional",
      "Dificultades de aprendizaje",
      "Salud mental infantil y adolescente",
      "Estrategias de acompañamiento familiar y escolar",
    ],
    duration: "Varía según programa",
    modalities: ["Presencial y virtual"],
    relatedServices: ["psicologia", "neuropsicologia-infantil"],
  },
};

// Función para obtener un servicio por slug
export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData[slug];
};

// Función para obtener servicios relacionados
export const getRelatedServices = (serviceSlug: string): ServiceData[] => {
  const service = servicesData[serviceSlug];
  if (!service?.relatedServices) return [];

  return service.relatedServices
    .map((slug) => servicesData[slug])
    .filter(Boolean) as ServiceData[];
};

// Lista de todos los servicios para navegación
export const allServices = Object.values(servicesData);
