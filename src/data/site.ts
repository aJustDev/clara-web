// Fuente unica de verdad del contenido editable.
// Rellena los campos marcados con TODO cuando tengas los datos reales de Clara.

export const site = {
  nombre: "Clara Luque de la Campa",
  rol: "Psicologa",
  // Frase corta para meta description / footer.
  claim: "Psicologa en Cordoba. Terapia presencial y online.",

  // --- Contacto ---
  // Telefono de WhatsApp en formato internacional SIN '+' ni espacios. TODO: numero real.
  whatsapp: "34600000000",
  // TODO: email real.
  email: "hola@claraluquepsicologia.es",
  // Mensaje pre-rellenado al abrir WhatsApp.
  mensajeCita:
    "Hola Clara, me gustaria pedir cita o informacion sobre las sesiones.",

  // --- Datos profesionales (confianza + SEO/E-E-A-T) ---
  // TODO: numero de colegiada del COP Andalucia Occidental (ej. "AO-XXXXX").
  numColegiada: "AO-00000",

  // --- Ubicacion (NAP para SEO local) ---
  direccion: {
    // TODO: calle y numero de la consulta.
    calle: "Calle de la Consulta, 0",
    cp: "14001",
    ciudad: "Cordoba",
    region: "Cordoba",
    pais: "ES",
  },
  // TODO: coordenadas exactas de la consulta (placeholder = centro de Cordoba).
  geo: { lat: 37.8845, lng: -4.7796 },
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
export const areas = [
  {
    icon: "cloud",
    title: "Ansiedad y estres",
    desc: "Herramientas para entender y reducir la ansiedad, el estres y los ataques de panico.",
  },
  {
    icon: "sprout",
    title: "Depresion y estado de animo",
    desc: "Acompanamiento ante la apatia, la tristeza sostenida y la perdida de motivacion.",
  },
  {
    icon: "spark",
    title: "Autoestima y desarrollo personal",
    desc: "Trabajo sobre la autoestima, la autoexigencia y la relacion contigo misma.",
  },
  {
    icon: "link",
    title: "Terapia de pareja",
    desc: "Espacio para mejorar la comunicacion, los conflictos y los vinculos en la relacion.",
  },
  {
    icon: "heart",
    title: "Duelo y perdidas",
    desc: "Apoyo para transitar el duelo, las rupturas y los cambios vitales dificiles.",
  },
  {
    icon: "compass",
    title: "Gestion emocional",
    desc: "Aprender a reconocer, regular y expresar las emociones en el dia a dia.",
  },
] as const;

// --- Como trabajo (pasos) ---
export const pasos = [
  {
    n: "01",
    title: "Primer contacto",
    desc: "Me escribes por WhatsApp y resolvemos tus dudas. Buscamos un primer hueco sin compromiso.",
  },
  {
    n: "02",
    title: "Primera sesion",
    desc: "Nos conocemos, cuentas que te trae a terapia y definimos juntas unos objetivos.",
  },
  {
    n: "03",
    title: "Proceso terapeutico",
    desc: "Avanzamos a tu ritmo, presencial en Cordoba u online, con un plan adaptado a ti.",
  },
] as const;

// --- Preguntas frecuentes ---
export const faqs = [
  {
    q: "Haces terapia online?",
    a: "Si. Puedes elegir sesiones presenciales en mi consulta de Cordoba o por videollamada, con la misma calidad y confidencialidad.",
  },
  {
    q: "Cuanto dura una sesion?",
    a: "Cada sesion dura aproximadamente 50-60 minutos. La frecuencia la ajustamos a tu situacion y a como avanza el proceso.",
  },
  {
    q: "Cuanto cuesta?",
    a: "Puedes consultarme la tarifa actualizada por WhatsApp. Te informo sin compromiso antes de empezar.", // TODO: publicar precio si se desea.
  },
  {
    q: "Es todo confidencial?",
    a: "Por completo. Todo lo que compartas esta protegido por el secreto profesional y la normativa de proteccion de datos.",
  },
  {
    q: "Como pido cita?",
    a: "El modo mas rapido es por WhatsApp. Me escribes, vemos tu disponibilidad y reservamos la primera sesion.",
  },
] as const;
