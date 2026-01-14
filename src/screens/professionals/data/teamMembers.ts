import viviana from "../../../assets/img/professionals/viviana.jpg";
import helberth from "../../../assets/img/professionals/helberth.jpg";
import liliana from "../../../assets/img/professionals/liliana.jpg";
import stephania from "../../../assets/img/professionals/stephania.jpg";
import kelly from "../../../assets/img/professionals/kelly.jpg";
import mariaCamila from "../../../assets/img/professionals/maria_camila.jpeg";
import santiago from "../../../assets/img/professionals/santiago.jpeg";
import manuel from "../../../assets/img/professionals/manuel.jpeg";
import martha from "../../../assets/img/professionals/martha.jpeg";

export interface ProfessionalMember {
  id: number;
  name: string;
  title: string;
  specialty: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  education: string[];
  experience: string[];
  specialties: string[];
  featured?: boolean;
}

export const teamMembers: ProfessionalMember[] = [
  {
    id: 1,
    name: "Viviana Solís Arcila",
    title: "Psicóloga - Neuropsicóloga Infantil",
    specialty: "Creadora & CEO Centro de Neuropsicología Integral",
    image: viviana,
    shortDescription:
      "Psicóloga clínica educativa con Magíster en Neuropsicología y educación, Especialista en Neuropsicología Infantil, Inteligencias múltiples y educación inclusiva.",
    fullDescription: `
      Neuropsicología Integral es dirigido por Viviana Solís Arcila, psicóloga clínica educativa, Magíster en Neuropsicología y educación, Especialista en Neuropsicología Infantil, Especialista en inteligencias múltiples, Diplomatura en Neuro-rehabilitación en los trastornos del aprendizaje. Diplomatura en Educación inclusiva. Curso internacional en diagnóstico e intervención en Autismo. Docente universitaria. Ponente nacional.
      
      Alta capacidad para evaluar, diagnosticar e intervenir problemas asociados al neuro-desarrollo, del aprendizaje y psicosociales. Experiencia en el sector educativo, clínico y social; con énfasis en intervención en procesos de desarrollo de la primera infancia, problemáticas en población de alta vulnerabilidad, intervención individual y grupal.
      
      Graduada en el 2006 como Psicóloga clínica de la Universidad de San Buenaventura Cali-Colombia, recibió mención de honor, excelencia académica y beca a la excelencia por su desempeño académico. En el 2012 finaliza con mención de honor la Especialización en Neuropsicología Infantil en la Universidad Javeriana de Cali.
      
      En el 2016 culmina la Maestría en Neuropsicología y Educación con la Universidad Internacional de la Rioja. Actualmente labora en dos clínicas pediátricas de la ciudad de Cali-Colombia como Neuropsicóloga Infantil, asesora como freelance a instituciones educativas en el proceso de inclusión escolar.
    `,
    education: [
      "Magíster en Neuropsicología y Educación - Universidad Internacional de la Rioja",
      "Especialización en Neuropsicología Infantil - Universidad Javeriana Cali",
      "Especialización en Inteligencias Múltiples",
      "Psicóloga Clínica - Universidad de San Buenaventura Cali",
      "Diplomatura en Neuro-rehabilitación en trastornos del aprendizaje",
      "Diplomatura en Educación Inclusiva",
      "Curso internacional en diagnóstico e intervención en Autismo",
    ],
    experience: [
      "Más de 15 años de experiencia en psicología clínica educativa",
      "Directora y Fundadora del Centro de Neuropsicología Integral",
      "Neuropsicóloga Infantil en clínicas pediátricas de Cali",
      "Docente universitaria en Especialización de Neuropsicología Infantil",
      "Asesora de instituciones educativas en inclusión escolar",
      "Conferencista nacional e internacional en neuroeducación",
      "Coordinadora pedagógica en centro de estimulación infantil",
    ],
    specialties: [
      "Evaluación neuropsicológica infantil integral",
      "Diagnóstico de trastornos del neurodesarrollo",
      "Intervención en problemas de aprendizaje",
      "Neuro-rehabilitación cognitiva",
      "Asesoría en inclusión escolar y PIAR",
      "Implementación de inteligencias múltiples en aula",
      "Capacitación a docentes y familias",
      "Atención a población en alta vulnerabilidad",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Helberth Ortiz",
    title: "Neuropsicólogo Clínico",
    specialty: "Neuropsicología en adultos y deterioro cognitivo",
    image: helberth,
    shortDescription:
      "Magíster en psicología clínica con formación específica en neurociencias y evaluación del deterioro cognitivo en pacientes adultos.",
    fullDescription: `
      Neuropsicólogo clínico con Magíster en psicología clínica, con formación específica en neurociencias, técnicas e instrumentos de la Neuropsicología y de la Psicología Clínica, en interpretación del examen neurológico y psiquiátrico, así como de las técnicas de neuroimagen.
      
      Con dominio de los principios de evaluación e intervención basados en el estudio científico de la conducta humana y en su relación con el funcionamiento normal y anormal del sistema nervioso central.
      
      Experiencia en el diagnóstico del detrimento cognitivo y funcional en pacientes adultos, originado ya sea por lesiones traumáticas, condiciones patológicas afectivas, neurológicas, infecciosas o toxicológicas por abuso de sustancias psicoactivas.
    `,
    education: [
      "Magíster en Psicología Clínica",
      "Especialización en Neuropsicología",
      "Formación en técnicas de neuroimagen",
      "Certificación en evaluación neurológica",
    ],
    experience: [
      "Evaluación de deterioro cognitivo en adultos",
      "Diagnóstico de condiciones neurológicas",
      "Intervención en lesiones traumáticas cerebrales",
      "Atención a pacientes con abuso de sustancias psicoactivas",
      "Evaluación de trastornos afectivos y neurológicos",
    ],
    specialties: [
      "Evaluación neuropsicológica de adultos",
      "Diagnóstico de deterioro cognitivo",
      "Lesiones traumáticas cerebrales",
      "Trastornos neurológicos en adultos",
      "Abuso de sustancias psicoactivas",
      "Evaluación con técnicas de neuroimagen",
      "Condiciones patológicas afectivas",
    ],
  },
  {
    id: 3,
    name: "Liliana Álvarez Botero",
    title: "Fonoaudióloga",
    specialty: "Fonoaudiología pediátrica y trastornos del lenguaje",
    image: liliana,
    shortDescription:
      "Fonoaudióloga con más de 25 años de experiencia en atención terapéutica a niños en primera infancia y edad escolar.",
    fullDescription: `
      Fonoaudióloga egresada de la Universidad del Valle, con especialización en docencia, master en Neuropsicología infantil y del desarrollo, diplomado en terapia miofuncional y estudios en educación. De formación inicial Maestra Normalista.
      
      Con más de 25 años de experiencia en atención terapéutica a niños en primera infancia y edad escolar. Experiencia docente con niños con y sin discapacidad, además 20 años de docencia en educación Superior con estudiantes practicantes de Fonoaudiología de una Universidad de la región.
      
      Profesional interesada y con formación continúa en Intervención y estimulación de procesos de desarrollo para familias y niños con trastornos dentro del Espectro Autista, trastornos de habla, lenguaje y aprendizaje.
    `,
    education: [
      "Fonoaudióloga - Universidad del Valle",
      "Master en Neuropsicología infantil y del desarrollo",
      "Especialización en Docencia",
      "Diplomado en Terapia Miofuncional",
      "Formación como Maestra Normalista",
    ],
    experience: [
      "25+ años en atención terapéutica infantil",
      "20 años como docente universitaria",
      "Experiencia con niños con y sin discapacidad",
      "Intervención en primera infancia",
      "Terapia en trastornos del espectro autista",
    ],
    specialties: [
      "Terapia de lenguaje en niños",
      "Intervención en trastornos del espectro autista",
      "Terapia miofuncional",
      "Estimulación temprana del lenguaje",
      "Trastornos del habla y aprendizaje",
      "Asesoría a familias",
      "Docencia en fonoaudiología",
    ],
  },
  {
    id: 4,
    name: "Stephania Aponza",
    title: "Terapeuta Ocupacional",
    specialty: "Neurodesarrollo y Psicomotricidad",
    image: stephania,
    shortDescription:
      "Terapeuta ocupacional con formación en Neurodesarrollo, Psicomotricidad y Terapia ABA para niños con TEA.",
    fullDescription: `
      Terapeuta ocupacional con formación en Neurodesarrollo y Psicomotricidad, y Culminación de Curso en Terapia ABA.
      
      Experiencia en estimulación temprana, estrategias de intervención y movilización de tejidos blandos en adultos, estrategias de regulación de conductas en niños con TEA y técnicas de intervención de habilidades escolares desde el contexto familiar y educativo.
    `,
    education: [
      "Terapeuta Ocupacional",
      "Formación en Neurodesarrollo y Psicomotricidad",
      "Curso en Terapia ABA",
      "Especialización en estimulación temprana",
    ],
    experience: [
      "Estimulación temprana",
      "Intervención en niños con TEA",
      "Terapia de regulación conductual",
      "Movilización de tejidos blandos en adultos",
      "Intervención de habilidades escolares",
    ],
    specialties: [
      "Neurodesarrollo infantil",
      "Psicomotricidad",
      "Terapia ABA para TEA",
      "Estimulación temprana",
      "Regulación de conductas",
      "Habilidades escolares",
      "Intervención familiar",
    ],
  },
  {
    id: 5,
    name: "Kelly Rojas",
    title: "Psicóloga y Neuropsicóloga Infantil",
    specialty: "Evaluación e intervención en problemas de aprendizaje",
    image: kelly,
    shortDescription:
      "Especialista en evaluación neuropsicológica infantil y diseño de planes PIAR para inclusión escolar.",
    fullDescription: `
      Psicóloga y neuropsicóloga infantil, cuenta con experiencia, conocimiento e interés en todos los procesos relacionados con el entorno educativo, social, familiar y personal de los niños y niñas. Se ha desempeñado como asesora de crianza, asesora pedagógica, psicóloga educativa, psicóloga clínica y psicóloga social.
      
      Actualmente desde la neuropsicología realiza procesos evaluativos frente a dificultades en el aprendizaje, sospecha de algún trastorno del neurodesarrollo, y neurorehabilitación para dichos diagnósticos. Además, en instituciones educativas de educación preescolar y educación básica y secundaria diseña y acompaña la ruta PIAR (Plan Individual de Ajustes Razonables) en los estudiantes que requieran una adecuación en su plan curricular.
      
      Siempre con el fin de velar por el bienestar integral de las familias y/o las instituciones pertinentes.
    `,
    education: [
      "Neuropsicóloga Infantil",
      "Psicóloga Clínica",
      "Formación en evaluación neuropsicológica",
      "Especialización en intervención escolar",
    ],
    experience: [
      "Evaluación neuropsicológica infantil",
      "Diseño e implementación de planes PIAR",
      "Asesoría pedagógica a instituciones educativas",
      "Neurorehabilitación infantil",
      "Acompañamiento a familias",
    ],
    specialties: [
      "Evaluación de problemas de aprendizaje",
      "Diseño de planes PIAR",
      "Neurorehabilitación infantil",
      "Asesoría a instituciones educativas",
      "Intervención en trastornos del neurodesarrollo",
      "Acompañamiento familiar",
      "Inclusión escolar",
    ],
  },
  {
    id: 6,
    name: "María Camila Gómez Sánchez",
    title: "Fonoaudióloga",
    specialty: "Comunicación, lenguaje y deglución a lo largo del ciclo vital",
    image: mariaCamila,
    shortDescription:
      "Fonoaudióloga con experiencia clínica en evaluación e intervención de la comunicación, lenguaje, habla y deglución desde un enfoque integral, humano e inclusivo.",
    fullDescription: `
      Fonoaudióloga con experiencia clínica en la evaluación e intervención de la comunicación, el lenguaje, el habla y la deglución a lo largo del ciclo vital. Su ejercicio profesional se fundamenta en un enfoque integral, humano e inclusivo, orientado a las necesidades funcionales del paciente y al acompañamiento familiar.
      
      Cuenta con experiencia en trastornos del neurodesarrollo, dificultades de aprendizaje, habilidades escolares, intervención miofuncional orofacial, disfagia y alteraciones en la ingesta, así como en contextos clínicos y hospitalarios, incluyendo atención neonatal. 
      
      Actualmente cursa la Especialización en Auditoría en Salud, fortaleciendo su visión desde la calidad y la seguridad del paciente. Su práctica se caracteriza por un abordaje centrado en la persona, promoviendo la máxima funcionalidad y participación en todos los contextos de vida.
    `,
    education: [
      "Fonoaudióloga",
      "Especialización en Auditoría en Salud (en curso)",
      "Formación en atención neonatal",
      "Certificación en intervención miofuncional orofacial",
    ],
    experience: [
      "Evaluación e intervención de comunicación y lenguaje",
      "Atención en trastornos del neurodesarrollo",
      "Intervención en dificultades de aprendizaje",
      "Manejo de disfagia y alteraciones de la ingesta",
      "Atención neonatal en contexto hospitalario",
      "Intervención miofuncional orofacial",
    ],
    specialties: [
      "Trastornos del lenguaje y comunicación",
      "Disfagia y alteraciones de la deglución",
      "Intervención miofuncional orofacial",
      "Trastornos del neurodesarrollo",
      "Atención neonatal",
      "Dificultades de aprendizaje",
      "Auditoría en salud",
      "Acompañamiento familiar",
    ],
  },
  {
    id: 7,
    name: "Santiago Huertas",
    title: "Terapeuta Ocupacional",
    specialty: "Promoción de autonomía e independencia funcional",
    image: santiago,
    shortDescription:
      "Terapeuta Ocupacional con abordaje integral a lo largo del ciclo vital, orientado a la promoción de la autonomía y la independencia funcional.",
    fullDescription: `
      Terapeuta Ocupacional con abordaje integral a lo largo del ciclo vital, orientado a la promoción de la autonomía y la independencia funcional como ejes centrales de la intervención. Cuenta con experiencia en procesos de evaluación e intervención terapéutica individual y grupal, mediante el uso de actividades con propósito dirigidas al fortalecimiento del desempeño ocupacional.
      
      Su práctica se centra en potenciar las habilidades motoras, cognitivas y psicosociales, favoreciendo la participación activa del individuo en las actividades de la vida diaria. Se destaca por desarrollar intervenciones centradas en la persona, ajustadas a sus necesidades, intereses y contextos de desempeño, con alta capacidad de trabajo interdisciplinario y compromiso con el logro de los objetivos terapéuticos.
      
      Su enfoque terapéutico integra estrategias innovadoras basadas en evidencia, promoviendo la máxima funcionalidad y calidad de vida en todas las etapas del desarrollo.
    `,
    education: [
      "Terapeuta Ocupacional",
      "Formación en actividades de la vida diaria (AVD)",
      "Especialización en rehabilitación funcional",
      "Certificación en abordaje centrado en la persona",
    ],
    experience: [
      "Evaluación e intervención en actividades de la vida diaria",
      "Rehabilitación de habilidades motoras y cognitivas",
      "Terapia ocupacional individual y grupal",
      "Promoción de autonomía e independencia",
      "Intervención psicosocial y de participación comunitaria",
      "Trabajo interdisciplinario en equipo de salud",
    ],
    specialties: [
      "Actividades de la vida diaria (AVD)",
      "Rehabilitación funcional",
      "Habilidades motoras y coordinación",
      "Intervención cognitivo-conductual",
      "Participación social y comunitaria",
      "Abordaje centrado en la persona",
      "Trabajo interdisciplinario",
      "Promoción de la autonomía",
    ],
  },
  {
    id: 8,
    name: "Manuel Guerrero",
    title: "Neuropsicólogo Clínico",
    specialty: "Neurodegeneración y daño cerebral adquirido en adultos",
    image: manuel,
    shortDescription:
      "Neuropsicólogo clínico enfocado en evaluación y diagnóstico de adultos con enfermedades neurodegenerativas y daño cerebral adquirido.",
    fullDescription: `
      Neuropsicólogo clínico enfocado en la evaluación y diagnóstico de adultos con enfermedades neurodegenerativas y daño cerebral adquirido. Cuenta con experiencia en valoración neuropsicológica especializada, así como en la orientación a pacientes y familias desde un enfoque basado en la evidencia científica.
      
      Su práctica está orientada a promover la autonomía, la adaptación funcional y la calidad de vida, mediante intervenciones ajustadas a las necesidades cognitivas, emocionales y contextuales del paciente adulto. 
      
      Especializado en el manejo de condiciones como demencias, enfermedad de Alzheimer, enfermedad de Parkinson, deterioro cognitivo vascular, así como en secuelas de accidentes cerebrovasculares, traumatismos craneoencefálicos y otras condiciones que afectan la cognición en la etapa adulta. Su abordaje integra la evaluación rigurosa con estrategias de intervención personalizadas y acompañamiento familiar.
    `,
    education: [
      "Neuropsicólogo Clínico",
      "Especialización en neurodegeneración",
      "Formación en daño cerebral adquirido",
      "Certificación en evaluación neuropsicológica de adultos",
    ],
    experience: [
      "Evaluación de enfermedades neurodegenerativas",
      "Diagnóstico de deterioro cognitivo en adultos",
      "Intervención en daño cerebral adquirido",
      "Orientación y acompañamiento familiar",
      "Evaluación neuropsicológica especializada",
      "Manejo de demencias y trastornos cognitivos",
    ],
    specialties: [
      "Enfermedades neurodegenerativas (Alzheimer, Parkinson)",
      "Daño cerebral adquirido",
      "Evaluación neuropsicológica de adultos",
      "Deterioro cognitivo y demencias",
      "Accidentes cerebrovasculares",
      "Traumatismos craneoencefálicos",
      "Adaptación funcional y autonomía",
      "Orientación familiar en procesos neurodegenerativos",
    ],
  },
  {
    id: 9,
    name: "Martha Duarte",
    title: "Terapeuta Ocupacional",
    specialty: "Pediatría y procesos de aprendizaje",
    image: martha,
    shortDescription:
      "Terapeuta Ocupacional con más de 13 años de experiencia en población pediátrica, especializada en procesos de aprendizaje, desarrollo infantil e integración sensorial.",
    fullDescription: `
      Terapeuta Ocupacional con más de 13 años de experiencia, especialmente en población pediátrica y en procesos de aprendizaje. Cuenta con amplia trayectoria en la evaluación, intervención y acompañamiento de niños y adolescentes con dificultades en el desarrollo, el desempeño ocupacional, la integración sensorial y las habilidades motoras finas y gruesas.

      Su práctica se caracteriza por un enfoque centrado en el niño, el trabajo colaborativo con las familias y la articulación constante con equipos interdisciplinarios. Se encuentra comprometida con intervenciones basadas en la evidencia, orientadas a fortalecer la autonomía, el bienestar ocupacional y la participación funcional del niño en contextos educativos y clínicos.

      Martha posee una sólida experiencia en el manejo de condiciones como trastornos del desarrollo, dificultades de aprendizaje, trastornos del procesamiento sensorial, y condiciones que afectan la coordinación motora. Su abordaje integra técnicas de integración sensorial, estrategias de adaptación del entorno y actividades terapéuticas diseñadas para promover el máximo potencial de cada niño.
    `,
    education: [
      "Terapeuta Ocupacional",
      "Especialización en Integración Sensorial",
      "Formación en desarrollo infantil y pediatría",
      "Certificación en Terapia Ocupacional en contextos educativos",
      "Diplomado en dificultades de aprendizaje",
    ],
    experience: [
      "Más de 13 años de experiencia en terapia ocupacional pediátrica",
      "Evaluación e intervención en trastornos del desarrollo",
      "Integración sensorial en población infantil",
      "Acompañamiento en procesos de aprendizaje escolar",
      "Trabajo con familias y equipos interdisciplinarios",
      "Intervención en habilidades motoras finas y gruesas",
      "Adaptación de entornos educativos y hogareños",
    ],
    specialties: [
      "Terapia ocupacional pediátrica",
      "Integración sensorial",
      "Trastornos del desarrollo infantil",
      "Dificultades de aprendizaje",
      "Habilidades motoras finas y gruesas",
      "Desempeño ocupacional en niños",
      "Trabajo colaborativo con familias",
      "Adaptación de entornos para la inclusión",
      "Coordinación con equipos interdisciplinarios",
      "Intervención basada en evidencia",
    ],
  },
];
