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
  feelneedy: {
    type: "marca",
    name: "FEELNEEDY",
    tagline: "Acero y sin cable a buen precio: mucha fuente por poco, aunque marca genérica.",
    pros: [
      "Acero inoxidable en varios modelos, a precio de plástico",
      "Gama sin cable con sensor y batería sin disparar el precio",
      "Filtro transparente en varios modelos: ves cuándo cambiarlo sin desmontar",
      "Muy vendidas y bien valoradas (miles de reseñas)",
    ],
    cons: [
      "Marca genérica: soporte y recambios a largo plazo, un interrogante",
      "Sin app ni seguimiento del consumo",
      "Cada modelo usa su filtro específico (no intercambiables entre sí)",
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
    // Contenido de apoyo: "La diferencia clave" (HTML propio) y "Elige X si…".
    intro: [
      "La diferencia que de verdad importa no es estética: es la <strong>superficie por la que bebe el gato</strong>. El plástico se raya con el uso y en esos microarañazos se agarra el biofilm, la película viscosa de bacterias que da mal sabor al agua y se asocia al <a href=\"/acne-felino-cuencos-plastico/\">acné felino</a>. El acero inoxidable no es poroso, así que se limpia a fondo con agua y jabón. A cambio, el plástico es más barato y suele dejar ver el nivel del agua.",
      "Ojo con un detalle: muchas fuentes «de acero» solo tienen de acero la bandeja superior, y el depósito y la bomba siguen siendo de plástico. Es normal y no es un problema, porque para la higiene lo que cuenta es la zona en contacto con la boca del gato. Lo que sí conviene mirar es el precio del filtro, que a la larga cuesta más que la propia fuente; lo calculamos en <a href=\"/mejores-fuentes-agua-para-gatos/\">mejores fuentes de agua</a>.",
    ],
    chooseA: ["Vas a usar la fuente durante años y quieres la opción más higiénica.", "Tu gato tiene o ha tenido granitos o puntos negros en la barbilla.", "Prefieres meter las piezas en el lavavajillas en lugar de frotar a mano."],
    chooseB: ["Aún no sabes si tu gato aceptará una fuente y quieres probar gastando poco.", "Quieres ver el nivel del agua de un vistazo a través del depósito.", "Te comprometes a lavarla a fondo cada semana y a cambiarla cuando se raye."],
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
      {
        q: "¿Cada cuánto hay que cambiar una fuente de plástico?",
        a: "No hay una fecha fija: cuando la superficie por la que bebe el gato esté rayada o mate y no recupere el brillo al lavarla, es momento de cambiarla, porque en esos arañazos se refugia el biofilm. En una de acero ese desgaste apenas se produce.",
      },
      {
        q: "¿Una fuente de acero hace menos ruido que una de plástico?",
        a: "El material no decide el ruido: lo deciden la bomba y que el nivel de agua no baje del mínimo. Hay fuentes silenciosas de los dos materiales; si te preocupa, busca modelos que declaren menos de 25 dB y mantén el depósito lleno.",
      },
    ],
  },
  {
    slug: "fuente-acero-vs-ceramica-gatos",
    intro: [
      "Aquí no hay un perdedor claro en higiene: <strong>ni el acero inoxidable ni la cerámica esmaltada son porosos</strong>, así que los dos acumulan poco biofilm y se limpian bien. La decisión se juega en otros terrenos: la cerámica pesa más y es más estable, y el acero aguanta golpes y caídas sin romperse.",
      "En la práctica pesa otro factor: la oferta. Hay muchos más modelos de acero, con más capacidades, opciones sin cable y recambios fáciles de encontrar; por eso, de momento, todas las fuentes de material «premium» de nuestro catálogo son de acero. Si te encaja ese material, empieza por las <a href=\"/fuentes-acero-inoxidable-gatos/\">fuentes de acero inoxidable</a>.",
    ],
    chooseA: ["En casa hay niños, otros animales o un gato que juega con todo.", "Quieres más modelos donde elegir, incluidas fuentes sin cable.", "Te importa encontrar recambios de filtro sin complicaciones."],
    chooseB: ["Tu gato empuja o vuelca las fuentes ligeras.", "Priorizas el diseño y la vas a tener a la vista en el salón.", "La fuente va a estar en un sitio fijo, sin riesgo de golpes."],
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
      {
        q: "¿Y si el esmalte de la cerámica se desconcha?",
        a: "Esa zona deja de ser lisa y puede acumular suciedad como un plástico rayado. Revisa la superficie de vez en cuando; si ves el esmalte dañado o grietas, es mejor sustituir la pieza.",
      },
    ],
  },
  {
    slug: "fuente-plastico-vs-ceramica-gatos",
    intro: [
      "Es la comparación con la diferencia más clara en higiene. El plástico es el material más barato y ligero, pero se raya con el uso y el biofilm se refugia en esos arañazos; la cerámica esmaltada es lisa y no porosa, y se mantiene limpia con mucho menos esfuerzo. Por eso se suele recomendar para gatos con <a href=\"/acne-felino-cuencos-plastico/\">acné en la barbilla</a>.",
      "La pega de la cerámica es el precio, la fragilidad y que hay pocos modelos. Si dudas, existe un término medio: el <a href=\"/comparativas/fuente-acero-vs-plastico-gatos/\">acero inoxidable</a> ofrece la misma ventaja higiénica sin el riesgo de que se rompa.",
    ],
    chooseA: ["Quieres comprobar si tu gato usa una fuente antes de gastar más.", "Necesitas una fuente ligera para moverla de sitio o llevarla de viaje.", "Tienes poco presupuesto y puedes lavarla a fondo a menudo."],
    chooseB: ["Tu gato tiene tendencia al acné o a irritaciones en la barbilla.", "Quieres una fuente pesada que no se mueva ni vuelque.", "Buscas una fuente para muchos años y no hay riesgo de golpes."],
    seo: {
      title: "Fuente de plástico vs cerámica para gatos: cuál compensa",
      description:
        "Fuente de plástico o de cerámica para gatos: higiene y acné felino, precio, estabilidad, durabilidad y mantenimiento. Cuál conviene según tu caso.",
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
    intro: [
      "Son dos de las marcas más conocidas de fuentes para gatos, pero con enfoques distintos. <strong>PETKIT</strong> apuesta por la tecnología: bombas sin cable, sensores y app que registra cuánto bebe tu gato. <strong>Catit</strong> pone el foco en la filtración, con un filtro con resina pensado para el agua dura, y en tener modelos para todos los bolsillos.",
      "Para ser transparentes: de momento solo tenemos ficha propia de las PETKIT (la <a href=\"/productos/petkit-eversweet-solo-2/\">Eversweet Solo 2</a> y la <a href=\"/productos/petkit-eversweet-max-2-3l/\">Eversweet Max 2</a>). Lo que contamos de Catit sale de sus especificaciones, no de un análisis nuestro de cada modelo.",
    ],
    chooseA: ["Tu gato es mayor o tiene problemas renales y quieres saber cuánto bebe.", "Quieres una fuente sin cable que puedas poner en cualquier sitio.", "Valoras una marca grande con recambios oficiales."],
    chooseB: ["Vives en una zona de agua muy dura y te preocupa la cal.", "Buscas una fuente de entrada barata de una marca conocida.", "No necesitas app ni batería."],
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
    intro: [
      "Es el duelo entre la marca premium y la superventas barata. La <a href=\"/productos/giotohun-acero-inoxidable-22l/\">GIOTOHUN de acero</a> ofrece acero 304, ventana de nivel y una bomba silenciosa por una fracción del precio; las PETKIT añaden app, funcionamiento sin cable y el respaldo de una marca grande.",
      "La pregunta clave no es cuál es mejor fuente, sino si vas a usar lo que PETKIT cobra de más. Si tu gato es joven y sano y tienes un enchufe cerca, la GIOTOHUN cubre lo esencial. Si necesitas controlar cuánto bebe o quieres una fuente sin cable, la diferencia de precio tiene sentido.",
    ],
    chooseA: ["Necesitas datos de consumo para enseñárselos al veterinario.", "Quieres una fuente sin cable.", "Prefieres pagar más a cambio de recambios garantizados a largo plazo."],
    chooseB: ["Buscas acero inoxidable al mejor precio.", "Tienes un enchufe cerca y no necesitas app.", "Quieres ver el nivel del agua de un vistazo."],
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
      {
        q: "¿Los filtros de PETKIT sirven en una GIOTOHUN, o al revés?",
        a: "No. Cada marca usa su propio formato de filtro, e incluso dentro de una misma marca cambia según el modelo. Compra siempre el recambio específico de tu fuente.",
      },
    ],
  },
  {
    slug: "petkit-vs-feelneedy-fuentes-gatos",
    intro: [
      "Las dos tienen fuentes sin cable con sensor, así que la diferencia está en el resto. <strong>FEELNEEDY</strong> ofrece acero, más capacidad y un filtro transparente por bastante menos dinero, como su <a href=\"/productos/feelneedy-sin-cable-32l/\">fuente sin cable de 3,2 L</a>. <strong>PETKIT</strong> cobra más a cambio de la app que registra cuánto bebe tu gato y del respaldo de una marca establecida, como en la <a href=\"/productos/petkit-eversweet-max-2-3l/\">Eversweet Max 2</a>.",
      "Si tienes varios gatos o te ausentas a menudo, fíjate en la capacidad: FEELNEEDY llega a 4 L en su modelo sin cable más grande. Si tu gato es mayor o renal, el registro de consumo de PETKIT es la razón de peso para pagar más.",
    ],
    chooseA: ["Quieres saber cuántas veces bebe tu gato al día.", "Valoras el soporte de una marca grande a largo plazo.", "Te encaja una fuente premium con app y sensor."],
    chooseB: ["Quieres acero y sin cable gastando menos.", "Necesitas más capacidad (hasta 4 L).", "Te gusta ver el filtro sin desmontar la fuente."],
    seo: {
      title: "PETKIT vs FEELNEEDY: fuente premium o acero barato",
      description:
        "PETKIT o FEELNEEDY: comparamos app, versiones sin cable, acero, capacidad, recambios y precio de sus fuentes para gatos. Cuándo compensa cada marca.",
    },
    a: "petkit",
    b: "feelneedy",
    rows: [
      { label: "Precio", a: "Medio-alto", b: "Bajo-medio", winner: "b" },
      { label: "App y seguimiento del consumo", a: "Sí (registra cuánto bebe)", b: "No", winner: "a" },
      { label: "Sin cable con sensor", a: "Sí", b: "Sí" },
      { label: "Acero inoxidable accesible", a: "Solo en gama alta", b: "Sí (varios modelos)", winner: "b" },
      { label: "Capacidad máxima", a: "Hasta 3 L (Max 2)", b: "Hasta 4 L", winner: "b" },
      { label: "Ver el filtro sin desmontar", a: "Según modelo", b: "Sí (filtro transparente)", winner: "b" },
      { label: "Soporte y recambios a largo plazo", a: "Marca establecida", b: "Genérica (incierto)", winner: "a" },
    ],
    verdict:
      "Es premium-tech contra acero-barato. FEELNEEDY gana en lo inmediato: acero inoxidable y sin cable por bastante menos dinero, con más capacidad y el detalle práctico del filtro transparente. PETKIT justifica el sobreprecio si valoras la app y el seguimiento de cuánto bebe tu gato (muy útil si es mayor o renal) y el respaldo de recambios de una marca establecida, algo que en una genérica es un interrogante. Si manda el presupuesto, FEELNEEDY; si quieres datos de consumo y soporte a largo plazo, PETKIT.",
    cta: { label: "Ver las mejores fuentes de agua", path: "/mejores-fuentes-agua-para-gatos/" },
    subcategory: "fuentes-agua",
    brands: ["PETKIT", "FEELNEEDY"],
    faqs: [
      {
        q: "¿PETKIT o FEELNEEDY si busco gastar poco?",
        a: "FEELNEEDY. Te da acero inoxidable y hasta versiones sin cable por un precio al que PETKIT no suele llegar. El ahorro es real; lo que no tendrás es la app ni el respaldo de recambios de una marca grande.",
      },
      {
        q: "¿Merece la pena la app de PETKIT frente a una FEELNEEDY sin app?",
        a: "Si tu gato es mayor o tiene riesgo renal, mucho: saber cuántas veces bebe al día es un dato que puedes enseñar al veterinario. Para un gato joven y sano, es un extra cómodo más que una necesidad, y ahí FEELNEEDY cumple por menos.",
      },
      {
        q: "¿Es fiable una marca genérica como FEELNEEDY?",
        a: "En calidad inmediata sí: su acero y sus bombas están al nivel y acumulan miles de reseñas. El interrogante es el largo plazo, donde una genérica puede dejar de fabricar el filtro específico de tu modelo. Compra recambios con margen si eliges FEELNEEDY.",
      },
    ],
  },
];

export const getComparison = (slug) => COMPARISONS.find((c) => c.slug === slug);