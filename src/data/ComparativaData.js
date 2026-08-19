// ============================================================================
// Comparativas "versus" (material-vs-material o marca-vs-marca). Cada entrada
// genera sola la página /comparativas/[slug] (tabla + pros/cons + veredicto +
// FAQ + schema). Es un formato distinto al de las comparativas "mejores X".
// ============================================================================
export const ENTITIES = {
  acero: {
    type: "material",
    name: "Fuente de acero inoxidable",
    tagline: "Higiene máxima y cero biofilm.",
    pros: [
      "No poroso: no acumula la película viscosa que rechazan los gatos",
      "Muy fácil de limpiar; muchas piezas van al lavavajillas",
      "Duradero y difícil de volcar",
    ],
    cons: ["Precio algo más alto que el plástico", "Los depósitos internos suelen seguir siendo de plástico"],
  },
  plastico: {
    type: "material",
    name: "Fuente de plástico",
    tagline: "Barata y ligera, pero exige más mantenimiento.",
    pros: ["La más económica para empezar", "Ligera y con muchos modelos disponibles"],
    cons: [
      "Poroso: acumula biofilm y puede provocar acné felino",
      "Requiere limpieza más frecuente",
      "Menos duradera",
    ],
  },
  ceramica: {
    type: "material",
    name: "Fuente de cerámica",
    tagline: "La más higiénica y estable, también la más frágil.",
    pros: ["Superficie esmaltada muy higiénica", "Pesada: no la vuelca el gato", "Estéticamente la más cuidada"],
    cons: ["Frágil ante golpes", "Más cara y con menos recambios genéricos"],
  },
  petkit: {
    type: "marca",
    name: "PETKIT",
    tagline: "La marca tecnológica: app, bombas inalámbricas y seguimiento del consumo.",
    pros: [
      "App que registra cuánto bebe el gato: muy útil en gatos mayores o renales",
      "Amplia gama de bombas inalámbricas (sin cable a la vista)",
      "Acero inoxidable y buena calidad de bomba en su gama alta (Eversweet 3 Pro/Max)",
      "Marca establecida con recambios oficiales garantizados (filtro 3.0)",
    ],
    cons: [
      "Precios de medios a altos: es de las marcas más caras",
      "Algunas funciones dependen de la app y de recargar la batería",
      "Sus modelos básicos siguen teniendo el plato de plástico",
    ],
  },
  catit: {
    type: "marca",
    name: "Catit",
    tagline: "Filtración cuidada y ergonomía, de una marca veterana de accesorios felinos.",
    pros: [
      "Filtro Triple Action con resina de intercambio iónico: reduce cal (agua dura)",
      "Marca veterana con recambios oficiales fáciles de encontrar",
      "Opciones para todos los bolsillos, desde la Flower barata a la PIXI de acero",
      "Diseños ergonómicos con varias zonas de bebida",
    ],
    cons: [
      "Los filtros oficiales cuestan algo más que los genéricos",
      "Su modelo de entrada (Flower) es de plástico",
      "Menos oferta inalámbrica que PETKIT",
    ],
  },
  giotohun: {
    type: "marca",
    name: "GIOTOHUN",
    tagline: "Acero inoxidable superventas a precio bajo: mucha función por poco dinero.",
    pros: [
      "Acero inoxidable 304 a precio de fuente de plástico",
      "Ventana de nivel de agua y bomba muy silenciosa (< 25 dB)",
      "Enorme volumen de ventas: señal de que la bomba aguanta bien el día a día",
    ],
    cons: [
      "Marca genérica: el soporte y los recambios a largo plazo son un interrogante",
      "El filtro es específico (hay que buscarlo por marca)",
      "Funciona con cable; sin opción de batería",
    ],
  },
};

export const COMPARISONS = [
  {
    slug: "fuente-acero-vs-plastico-gatos",
    seo: {
      title: "Fuente de acero vs plástico para gatos: cuál elegir",
      description:
        "Comparamos fuentes de agua de acero inoxidable frente a plástico para gatos: higiene, acné felino, mantenimiento, durabilidad y precio.",
    },
    a: "acero",
    b: "plastico",
    rows: [
      { label: "Higiene / biofilm", a: "Excelente", b: "Regular", winner: "a" },
      { label: "Acné felino", a: "Baja incidencia", b: "Mayor riesgo", winner: "a" },
      { label: "Mantenimiento", a: "Fácil", b: "Frecuente", winner: "a" },
      { label: "Durabilidad", a: "Alta", b: "Media", winner: "a" },
      { label: "Precio", a: "Medio", b: "Bajo", winner: "b" },
    ],
    verdict:
      "Para casi todos los gatos, el acero inoxidable compensa: la higiene y la ausencia de biofilm reducen el riesgo de acné felino y de que el gato deje de beber. El plástico solo tiene sentido como puerta de entrada barata para comprobar si tu gato acepta una fuente.",
    cta: { label: "Ver las mejores fuentes de acero", path: "/fuentes-acero-inoxidable-gatos/" },
    subcategory: "fuentes-agua",
    faqs: [
      {
        q: "¿El acero previene el acné felino?",
        a: "Ayuda mucho. Al no ser poroso, no acumula bacterias en la zona de contacto con la barbilla, que es un factor asociado al acné felino. No es magia: hay que limpiarlo igualmente a menudo.",
      },
    ],
  },
  {
    slug: "fuente-acero-vs-ceramica-gatos",
    seo: {
      title: "Fuente de acero vs cerámica para gatos: cuál elegir",
      description:
        "Comparamos fuentes de agua de acero inoxidable frente a cerámica para gatos: higiene, durabilidad, estabilidad, estética, recambios y precio.",
    },
    a: "acero",
    b: "ceramica",
    rows: [
      { label: "Higiene / biofilm", a: "Excelente", b: "Excelente" },
      { label: "Durabilidad", a: "Muy alta", b: "Frágil ante golpes", winner: "a" },
      { label: "Estabilidad (no vuelca)", a: "Buena", b: "Excelente", winner: "b" },
      { label: "Mantenimiento", a: "Fácil (lavavajillas)", b: "Fácil", winner: "a" },
      { label: "Recambios y oferta", a: "Amplia", b: "Limitada", winner: "a" },
      { label: "Precio", a: "Medio", b: "Medio-alto", winner: "a" },
    ],
    verdict:
      "Para la mayoría de hogares, el acero inoxidable es la opción más práctica: igual de higiénico que la cerámica pero mucho más duradero y con más recambios y modelos donde elegir. La cerámica tiene sentido si priorizas la estética y una base muy estable y en casa no hay riesgo de golpes o caídas.",
    cta: { label: "Ver las mejores fuentes de acero", path: "/fuentes-acero-inoxidable-gatos/" },
    subcategory: "fuentes-agua",
    faqs: [
      {
        q: "¿Cuál es más higiénica, acero o cerámica?",
        a: "Las dos son excelentes: ninguna es porosa, así que apenas acumulan biofilm y son fáciles de mantener limpias. La diferencia real no está en la higiene sino en la durabilidad y en la oferta de modelos y recambios.",
      },
      {
        q: "¿La cerámica se rompe con facilidad?",
        a: "Es su punto débil: ante un golpe fuerte o una caída puede astillarse o partirse, algo que al acero no le pasa. Si tienes un gato muy movido o niños en casa, el acero da menos sustos.",
      },
      {
        q: "¿Por qué casi todas las fuentes de cerámica llevan piezas de plástico dentro?",
        a: "El depósito y la bomba suelen ser de plástico incluso en fuentes de cerámica o acero, porque es donde va la electrónica. Lo importante para la higiene es la superficie por la que bebe el gato; aun así, limpia bien también esas piezas internas.",
      },
    ],
  },
  {
    slug: "fuente-plastico-vs-ceramica-gatos",
    seo: {
      title: "Fuente de plástico vs cerámica para gatos: cuál compensa",
      description:
        "Plástico frente a cerámica en fuentes de agua para gatos: higiene y acné felino, precio, peso y estabilidad, durabilidad y mantenimiento. Cuál conviene según tu caso.",
    },
    a: "plastico",
    b: "ceramica",
    rows: [
      { label: "Higiene / biofilm", a: "Regular", b: "Excelente", winner: "b" },
      { label: "Acné felino", a: "Mayor riesgo", b: "Baja incidencia", winner: "b" },
      { label: "Peso / estabilidad", a: "Ligera (vuelca)", b: "Pesada (estable)", winner: "b" },
      { label: "Mantenimiento", a: "Frecuente", b: "Fácil", winner: "b" },
      { label: "Durabilidad", a: "Media", b: "Alta salvo golpes", winner: "b" },
      { label: "Precio", a: "Bajo", b: "Medio-alto", winner: "a" },
    ],
    verdict:
      "La cerámica gana en casi todo lo que importa para la salud del gato: no es porosa, acumula mucho menos biofilm, reduce el riesgo de acné felino y es más estable. El plástico solo tiene una ventaja clara, el precio de entrada, y sirve como puerta barata para comprobar si tu gato acepta una fuente antes de invertir más.",
    cta: { label: "Ver las mejores fuentes de agua", path: "/mejores-fuentes-agua-para-gatos/" },
    subcategory: "fuentes-agua",
    faqs: [
      {
        q: "¿La cerámica evita el acné felino?",
        a: "Ayuda mucho. Al no ser porosa, no acumula en la zona de la barbilla las bacterias que se asocian al acné felino, algo que sí ocurre con el plástico rayado. No es garantía absoluta: sigue haciendo falta limpiarla a menudo.",
      },
      {
        q: "¿Merece la pena pagar más por cerámica frente a plástico?",
        a: "Si tu gato ya acepta beber de una fuente, sí: la mejora en higiene, estabilidad y vida útil compensa la diferencia. Si aún no sabes si la usará, una de plástico barata te sirve para probar y luego dar el salto.",
      },
      {
        q: "¿La cerámica pesa demasiado para limpiarla a diario?",
        a: "Pesa más que el plástico, y eso es precisamente lo que la hace estable y difícil de volcar. Para la limpieza diaria basta con vaciar y enjuagar; el desmontaje a fondo es igual de sencillo que en cualquier otra fuente.",
      },
    ],
  },
  {
    slug: "petkit-vs-catit-fuentes-gatos",
    seo: {
      title: "PETKIT vs Catit: qué marca de fuente para gatos elegir",
      description:
        "Comparamos PETKIT y Catit en fuentes de agua para gatos: filtración y agua dura, app y seguimiento, opciones sin cable, materiales, recambios y precio.",
    },
    a: "petkit",
    b: "catit",
    rows: [
      { label: "Filtrado / agua dura", a: "Carbón + resina", b: "Triple Action con resina", winner: "b" },
      { label: "App y seguimiento del consumo", a: "Sí (registra cuánto bebe)", b: "No (salvo alertas en PIXI)", winner: "a" },
      { label: "Opciones sin cable", a: "Amplia gama inalámbrica", b: "Mayormente con cable", winner: "a" },
      { label: "Material (gama alta)", a: "Acero (Eversweet 3 Pro/Max)", b: "Acero (PIXI)" },
      { label: "Recambios oficiales", a: "Sí (filtro 3.0)", b: "Sí (Triple Action)" },
      { label: "Precio de entrada", a: "Medio-alto", b: "Medio (Flower económica)", winner: "b" },
    ],
    verdict:
      "Elige PETKIT si quieres tecnología: bombas sin cable, app y, sobre todo, el seguimiento de cuánto bebe tu gato, muy valioso si es mayor o tiene historial renal. Elige Catit si priorizas la filtración para agua dura (su resina reduce la cal), una marca veterana con recambios fáciles, o una puerta de entrada barata con la Flower. Ambas son marcas sólidas; la decisión es tecnología frente a filtración y precio.",
    cta: { label: "Ver las mejores fuentes de agua", path: "/mejores-fuentes-agua-para-gatos/" },
    subcategory: "fuentes-agua",
    brands: ["PETKIT", "Catit"], // (opcional) para el related por marca, ver nota al final
    faqs: [
      {
        q: "¿PETKIT o Catit para agua dura?",
        a: "Catit tiene ventaja: su filtro Triple Action incluye resina de intercambio iónico, que reduce el magnesio y el calcio responsables de la cal. PETKIT también filtra bien, pero si vives en zona de agua muy dura, la resina de Catit se nota.",
      },
      {
        q: "¿Merece la pena la app de PETKIT?",
        a: "Si tu gato es mayor o tiene riesgo renal, mucho: saber cuántas veces bebe al día es un dato que puedes enseñar al veterinario. Para un gato joven y sano, es más un extra cómodo que una necesidad.",
      },
      {
        q: "¿Cuál es más barata?",
        a: "Catit tiene la entrada más económica con la Flower de plástico. Si comparas modelos de acero de ambas marcas, los precios se acercan, y PETKIT sube más en cuanto añades batería y app.",
      },
    ],
  },
  {
    slug: "petkit-vs-giotohun-fuentes-gatos",
    seo: {
      title: "PETKIT vs GIOTOHUN: ¿merece la pena pagar más?",
      description:
        "Comparamos la marca premium PETKIT con la superventas de acero GIOTOHUN: precio, app, sin cable, soporte de recambios y fiabilidad. Cuándo compensa cada una.",
    },
    a: "petkit",
    b: "giotohun",
    rows: [
      { label: "Precio", a: "Medio-alto", b: "Bajo", winner: "b" },
      { label: "App y seguimiento", a: "Sí", b: "No", winner: "a" },
      { label: "Opciones sin cable", a: "Sí (gama inalámbrica)", b: "No (con cable)", winner: "a" },
      { label: "Soporte y recambios a largo plazo", a: "Marca establecida", b: "Genérica (incierto)", winner: "a" },
      { label: "Ventana de nivel de agua", a: "Según modelo", b: "Sí", winner: "b" },
      { label: "Acero inoxidable 304", a: "En gama alta", b: "Sí", winner: "b" },
    ],
    verdict:
      "Es el clásico premium contra superventas. GIOTOHUN gana en lo inmediato: acero 304 y buena fuente por muy poco dinero, con un volumen de ventas que respalda su fiabilidad básica. PETKIT justifica el sobreprecio si valoras la app y el seguimiento del consumo, la comodidad sin cable y, sobre todo, el soporte de recambios de una marca establecida, algo que en una marca genérica es un interrogante. Si el presupuesto manda, GIOTOHUN; si quieres funciones y respaldo a largo plazo, PETKIT.",
    cta: { label: "Ver las mejores fuentes de agua", path: "/mejores-fuentes-agua-para-gatos/" },
    subcategory: "fuentes-agua",
    brands: ["PETKIT", "GIOTOHUN"],
    faqs: [
      {
        q: "¿Vale la pena pagar el triple por PETKIT?",
        a: "Depende de qué busques. Si solo quieres una buena fuente de acero, la GIOTOHUN cumple por mucho menos. El sobreprecio de PETKIT se paga por la app, el funcionamiento sin cable y el respaldo de recambios de una marca grande; si nada de eso te hace falta, no lo necesitas.",
      },
      {
        q: "¿Es peor una marca genérica como GIOTOHUN?",
        a: "No en calidad inmediata: su acero 304 y su bomba silenciosa están al nivel. La diferencia está en el largo plazo, donde una marca genérica puede dejar de fabricar el filtro específico que necesitas. Compra recambios con margen si eliges genérica.",
      },
    ],
  },
];

export const getComparison = (slug) => COMPARISONS.find((c) => c.slug === slug);
