// Fuente unica de verdad del contenido editable.
// Rellena los campos marcados con TODO cuando tengas los datos reales de Clara.

export const site = {
  nombre: "Clara Luque de la Campa",
  rol: "Psicóloga",
  // Frase corta para meta description / footer.
  claim: "Psicóloga en Córdoba. Terapia presencial y online.",

  // --- Contacto ---
  // Telefono de WhatsApp en formato internacional SIN '+' ni espacios. TODO: numero real.
  whatsapp: "34600000000",
  // TODO: email real.
  email: "hola@claraluquepsicologia.es",
  // Mensaje pre-rellenado al abrir WhatsApp.
  mensajeCita:
    "Hola Clara, me gustaría pedir cita o información sobre las sesiones.",

  // --- Datos profesionales (confianza + SEO/E-E-A-T) ---
  // Colegiada del COP Andalucia Occidental.
  numColegiada: "AO-11167",

  // --- Ubicacion (NAP para SEO local) ---
  // Lanzamiento actual: online + presencial en Cordoba (cita previa), SIN calle.
  // Mientras 'calle' este vacio, el JSON-LD omite address/geo y usa solo areaServed.
  // TODO (septiembre): al abrir consulta, rellenar calle/cp/geo el MISMO dia que se
  // cree el Google Business Profile, con NAP identico letra por letra.
  direccion: {
    calle: "",
    cp: "",
    ciudad: "Córdoba",
    region: "Córdoba",
    pais: "ES",
  },
  // TODO (septiembre): coordenadas exactas de la consulta (lat/lng del punto en Maps).
  geo: { lat: null as number | null, lng: null as number | null },
  // TODO: horario real.
  horario: "Lunes a viernes, de 9:00 a 20:00",

  // --- Online / dominio / redes ---
  // URL publica del sitio (incluye el base de GitHub Pages). Usada en canonical y JSON-LD.
  // TODO: al migrar a dominio propio, cambiar aqui y en astro.config.mjs (site + base).
  dominio: "https://ajustdev.github.io/clara-web",
  // TODO: perfiles publicos (instagram, doctoralia, linkedin...). Vacio = se omite.
  sameAs: [] as string[],
} as const;

// --- Areas de trabajo (tarjetas) ---
// icon: una de las claves soportadas en Areas.astro
//   (sprout | heart | spark | cloud | link | compass)
// Motivos de consulta agrupados por categoria. Cada tarjeta muestra su titulo
// (categoria) y la lista de motivos reales. items[] alimenta knowsAbout (SEO).
export const areas = [
  {
    icon: "cloud",
    title: "Ansiedad, estrés y sueño",
    items: ["Ansiedad y estrés", "Insomnio"],
  },
  {
    icon: "sprout",
    title: "Ánimo y autoestima",
    items: ["Depresión y estado de ánimo", "Autoestima e inseguridades"],
  },
  {
    icon: "spark",
    title: "Miedos y obsesiones",
    items: ["Miedos y fobias", "Obsesiones"],
  },
  {
    icon: "link",
    title: "Pareja, sexualidad y familia",
    items: [
      "Terapia de pareja",
      "Disfunciones sexuales",
      "Problemas familiares",
    ],
  },
  {
    icon: "heart",
    title: "Duelo, trauma y vínculos",
    items: [
      "Duelos y pérdidas",
      "Historia de trauma o estrés postraumático",
      "Rupturas tras maltrato y vínculos traumáticos",
    ],
  },
  {
    icon: "compass",
    title: "Sentido vital y decisiones",
    items: [
      "Falta de sentido vital o vacío existencial",
      "Dificultad en la toma de decisiones",
    ],
  },
] as const;

// --- Como trabajo (pasos) ---
export const pasos = [
  {
    n: "01",
    title: "Primer contacto",
    desc: "Me escribes por WhatsApp y resolvemos todas tus dudas. Aquí te ofreceré toda la información relativa a las sesiones, políticas del centro, marco terapéutico y tus derechos como paciente. Recibirás un PDF con todo.",
  },
  {
    n: "02",
    title: "Primera sesión",
    desc: "Si estás de acuerdo y deseas iniciar tu proceso terapéutico, agendamos una primera sesión en la que iniciaremos el proceso de evaluación. Empezaré a conocer tu historia y tu contexto. En esta sesión definiremos unos objetivos que serán los que guíen el trabajo en terapia.",
  },
  {
    n: "03",
    title: "Proceso terapéutico",
    desc: "Agendaremos las próximas sesiones de acuerdo con tu caso particular y tus circunstancias.",
  },
] as const;

// --- Preguntas frecuentes ---
export const faqs = [
  {
    q: "¿Haces terapia online?",
    a: "Sí. Puedes elegir sesiones presenciales en mi consulta de Córdoba o por videollamada, con la misma calidad y confidencialidad.",
  },
  {
    q: "¿Cuánto dura una sesión?",
    a: "Cada sesión dura aproximadamente 50-60 minutos. La frecuencia la ajustamos a tu situación y a cómo avanza el proceso.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Puedes consultarme la tarifa actualizada por WhatsApp. Te informo sin compromiso antes de empezar.", // TODO: publicar precio si se desea.
  },
  {
    q: "¿Es todo confidencial?",
    a: "Por completo. Todo lo que compartas está protegido por el secreto profesional y la normativa de protección de datos.",
  },
  {
    q: "¿Cómo pido cita?",
    a: "El modo más rápido es por WhatsApp. Me escribes, vemos tu disponibilidad y reservamos la primera sesión.",
  },
] as const;
