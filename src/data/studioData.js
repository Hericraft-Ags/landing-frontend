// data/studioData.js
export const ACADEMIC_LEVELS = {
  primaria: { label: 'Primaria (6-12 años)', minArea: 2.5 },
  secundaria: { label: 'Secundaria (12-15 años)', minArea: 3.0 },
  bachillerato: { label: 'Bachillerato (15-18 años)', minArea: 4.0 },
}

export const ROOM_SHAPES = {
  rectangular: {
    id: 'rectangular',
    label: 'Rectangular',
    areaFactor: 1.0,
    clipPath: 'none',
    borderRadius: '4px',
    validZone: () => true,
  },
  l_shape: {
    id: 'l_shape',
    label: 'Forma en L',
    areaFactor: 0.7,
    clipPath: 'polygon(0 0, 100% 0, 100% 40%, 40% 40%, 40% 100%, 0% 100%)',
    borderRadius: '4px',
    validZone: (x, y) => y < 0.45 || x < 0.45,
  },
  pentagonal: {
    id: 'pentagonal',
    label: 'Pentagonal',
    areaFactor: 0.75,
    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
    borderRadius: '4px',
    validZone: (x, y) => {
      // Zona válida: dentro del pentágono
      // El pentágono tiene vértices en:
      // (50%, 0%) - superior centro
      // (100%, 38%) - derecha superior
      // (82%, 100%) - derecha inferior
      // (18%, 100%) - izquierda inferior
      // (0%, 38%) - izquierda superior

      // Convertir a coordenadas normalizadas (-1 a 1 para facilitar cálculos)
      const cx = x - 0.5
      const cy = y - 0.5

      // Aproximación: verificar si está dentro del polígono
      // Simplificamos: es válido si no está muy cerca de los bordes recortados
      if (y < 0.38 && (x < 0.35 || x > 0.65)) return false
      if (y > 0.8 && (x < 0.2 || x > 0.8)) return false
      if (x < 0.1 && y > 0.3 && y < 0.7) return false
      if (x > 0.9 && y > 0.3 && y < 0.7) return false

      return true
    },
  },
  circular: {
    id: 'circular',
    label: 'Circular',
    areaFactor: 0.78,
    borderRadius: '50%',
    validZone: (x, y) => Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2)) < 0.45,
  },
}

export const ROOM_TYPES = {
  maker: {
    id: 'maker',
    name: 'Aula Maker Industrial',
    zones: [
      {
        id: 'carpentry',
        label: 'Carpintería',
        cost: 45000,
        icon: '🪚',
        asset: { label: 'Banco Carpintería', color: 'bg-amber-600/40 border-amber-500' },
      },
      {
        id: 'cnc',
        label: 'Fab. Digital',
        cost: 120000,
        icon: '🤖',
        asset: { label: 'Router CNC', color: 'bg-red-500/40 border-red-500' },
      },
      {
        id: 'electronics',
        label: 'Mecatrónica',
        cost: 35000,
        icon: '⚡',
        asset: { label: 'Estación Soldadura', color: 'bg-yellow-400/30 border-yellow-400' },
      },
      {
        id: 'metal',
        label: 'Metalmecánica',
        cost: 80000,
        icon: '⚙️',
        asset: { label: 'Torno Industrial', color: 'bg-gray-600/50 border-gray-400' },
      },
    ],
  },
  steam: {
    id: 'steam',
    name: 'Laboratorio STEAM',
    zones: [
      {
        id: 'wet',
        label: 'Zona Húmeda',
        cost: 60000,
        icon: '💧',
        asset: { label: 'Mesa Tarja', color: 'bg-blue-400/40 border-blue-400' },
      },
      {
        id: 'robotics',
        label: 'Arena VEX',
        cost: 40000,
        icon: '🦾',
        asset: { label: 'Pista VEX', color: 'bg-gray-800/50 border-white dashed' },
      },
      {
        id: 'chemistry',
        label: 'Química',
        cost: 55000,
        icon: '🧪',
        asset: { label: 'Campana Gases', color: 'bg-purple-500/40 border-purple-400' },
      },
    ],
  },
  media: {
    id: 'media',
    name: 'Media Lab',
    zones: [
      {
        id: 'chroma',
        label: 'Set Chroma',
        cost: 55000,
        icon: '🎬',
        asset: { label: 'Ciclorama', color: 'bg-green-500/50 border-green-400' },
      },
      {
        id: 'post',
        label: 'Edición',
        cost: 90000,
        icon: '🖥️',
        asset: { label: 'Isla Edición', color: 'bg-purple-500/40 border-purple-400' },
      },
      {
        id: 'audio',
        label: 'Grabación',
        cost: 45000,
        icon: '🎙️',
        asset: { label: 'Cabina Audio', color: 'bg-blue-400/40 border-blue-400' },
      },
      {
        id: 'animation',
        label: 'Animación',
        cost: 70000,
        icon: '🎨',
        asset: { label: 'Mesa Animación', color: 'bg-pink-500/40 border-pink-400' },
      },
    ],
  },
  green: {
    id: 'green',
    name: 'Green Lab',
    zones: [
      {
        id: 'hydro',
        label: 'Hidroponía',
        cost: 35000,
        icon: '🌱',
        asset: { label: 'Torre Cultivo', color: 'bg-emerald-400/40 border-emerald-500' },
      },
      {
        id: 'recycle',
        label: 'Reciclaje',
        cost: 12000,
        icon: '♻️',
        asset: { label: 'Estación Residuos', color: 'bg-orange-400/40 border-orange-500' },
      },
      {
        id: 'compost',
        label: 'Compostaje',
        cost: 18000,
        icon: '🪱',
        asset: { label: 'Compostera', color: 'bg-amber-400/40 border-amber-500' },
      },
      {
        id: 'garden',
        label: 'Jardinería',
        cost: 25000,
        icon: '🌿',
        asset: { label: 'Maceteros', color: 'bg-lime-400/40 border-lime-500' },
      },
    ],
  },
  wellness: {
    id: 'wellness',
    name: 'Ed. Física Tech',
    zones: [
      {
        id: 'bio',
        label: 'Biometría',
        cost: 60000,
        icon: '📊',
        asset: { label: 'Scanner Corp.', color: 'bg-indigo-400/40 border-indigo-500' },
      },
      {
        id: 'active',
        label: 'Zona TRX',
        cost: 20000,
        icon: '🧘',
        asset: { label: 'Área Libre', color: 'bg-rose-300/40 border-rose-400' },
      },
      {
        id: 'fitness',
        label: 'Entrenamiento',
        cost: 45000,
        icon: '💪',
        asset: { label: 'Equipo Fitness', color: 'bg-red-400/40 border-red-400' },
      },
      {
        id: 'analysis',
        label: 'Análisis',
        cost: 50000,
        icon: '📈',
        asset: { label: 'Estación Datos', color: 'bg-cyan-400/40 border-cyan-400' },
      },
    ],
  },
}

export const PRICING = {
  finishes: { basic: 2500, standard: 4200, premium: 6500 },
  furniture: { studentTable: 12500, chair: 1800, workTable: { width: 2.4, depth: 1.2 } },
  equipmentKits: {
    maker: {
      sencillo: {
        cost: 25000,
        desc: 'Manual Maker: Martillos, desarmadores, prensas, seguetas, EPP básico.',
      },
      avanzado: {
        cost: 65000,
        desc: 'Power Tools: Taladros inalámbricos, caladoras, lijadoras, Dremels.',
      },
      experto: {
        cost: 180000,
        desc: 'Industrial IoT: Osciloscopios, fuentes, sensores industriales, Soldadura TIG.',
      },
    },
    steam: {
      sencillo: {
        cost: 18000,
        desc: 'Ciencia Básica: Probetas, vasos precipitado, microscopios monoculares.',
      },
      avanzado: {
        cost: 90000,
        desc: 'Robótica VEX: Kits competencia VEX/LEGO, sensores color/distancia.',
      },
      experto: {
        cost: 210000,
        desc: 'Bio-Tech: Microscopios digitales, incubadoras, análisis ADN.',
      },
    },
    media: {
      sencillo: {
        cost: 35000,
        desc: 'Vlogger Kit: Aros de luz, mics lavalier, trípies smartphone.',
      },
      avanzado: {
        cost: 120000,
        desc: 'Studio Stream: Cámaras DSLR 4K, Iluminación Softbox, Consola Audio.',
      },
      experto: { cost: 350000, desc: 'Cine Digital: Cámaras RED, Grúa, Rieles, Iluminación DMX.' },
    },
    green: {
      sencillo: { cost: 12000, desc: 'Huerto Escolar: Palas, rastrillos, regaderas, semillas.' },
      avanzado: {
        cost: 45000,
        desc: 'Hidroponía: Bombas agua, medidores PH/EC, solución nutritiva.',
      },
      experto: { cost: 110000, desc: 'Agro-Tech: Sensores humedad suelo IoT, riego por App.' },
    },
    wellness: {
      sencillo: { cost: 15000, desc: 'Yoga & Flex: Tapetes yoga, bloques, bandas.' },
      avanzado: { cost: 55000, desc: 'Entrenamiento: Pesas rusas, TRX, balones medicinales.' },
      experto: {
        cost: 140000,
        desc: 'Sports Science: Sensores velocidad, análisis salto, medidores lactato.',
      },
    },
  },
}

export const CATALOG = {
  furniture: {
    workTable: { width: 2.4, depth: 1.2 },
  },
}

export const FINISH_DESCRIPTIONS = {
  maker: {
    basic:
      '✅ Incluye: Piso de concreto pulido (uso rudo), pintura epóxica en muros, iluminación LED industrial básica.',
    standard:
      '✅ Incluye: Piso vinílico de alto tráfico, red eléctrica aérea (tipo canastilla), tratamiento acústico básico en techo.',
    premium:
      '✅ Incluye: Piso técnico elevado (anti-estático), sistema de extracción de polvos centralizado, insonorización total (muros y techo).',
  },
  steam: {
    basic:
      '✅ Incluye: Piso cerámico antideslizante, mesas con superficie de resina, tarjas estándar de acero inoxidable.',
    standard:
      '✅ Incluye: Piso epóxico resistente a químicos, grifería especializada de laboratorio, duchas de emergencia y lavaojos.',
    premium:
      '✅ Incluye: Islas de servicio (gas/agua/aire/datos) bajando del techo, campanas de extracción inteligentes con sensores.',
  },
  media: {
    basic:
      '✅ Incluye: Alfombra modular básica, paredes pintadas en tonos oscuros (mate), cortinas blackout manuales.',
    standard:
      '✅ Incluye: Piso flotante laminado, paneles acústicos en muros (cobertura 40%), rieles de iluminación dirigible.',
    premium:
      "✅ Incluye: Construcción 'Box in Box' (aislamiento total), diseño acústico de estudio profesional, parrilla de iluminación DMX.",
  },
  green: {
    basic: '✅ Incluye: Piso lavable con coladeras simples, pintura lavable antihongos.',
    standard:
      '✅ Incluye: Piso con pendiente pronunciada a canaleta, iluminación de crecimiento (Grow lights) en zonas de cultivo.',
    premium:
      '✅ Incluye: Sistema de riego automatizado integrado en muros, control de clima (humedad/temp) automatizado.',
  },
  wellness: {
    basic: '✅ Incluye: Piso laminado deportivo básico, pared de espejos.',
    standard:
      '✅ Incluye: Piso de caucho reciclado (alto impacto), sistema de ventilación forzada.',
    premium:
      '✅ Incluye: Piso de madera flotante profesional (amortiguante), sistema de monitoreo ambiental (CO2).',
  },
}

// data/studioData.js - Agrega esto
export const LEARNING_CONTEXT = {
  geometry: {
    title: '¿Por qué importa la forma?',
    text: "La geometría del aula define la acústica y las líneas de visión. Un aula rectangular favorece la instrucción directa, mientras que formas circulares o en 'L' crean nichos naturales para el trabajo colaborativo sin distracciones. La forma pentagonal es ideal para laboratorios de innovación, creando un flujo dinámico entre áreas especializadas.",
  },
  zones: {
    title: 'Zonificación Activa',
    text: "En la educación 5.0, el aula no es un bloque único. Se divide en 'micro-ambientes' (zonas) que permiten a diferentes equipos trabajar en distintos proyectos simultáneamente (ej. unos cortan madera mientras otros programan).",
  },
  acoustics: {
    title: 'Impacto de los Acabados',
    text: "El ruido es el enemigo #1 del aprendizaje. Los acabados 'Premium' no son solo lujo; incluyen paneles fonoabsorbentes y pisos técnicos que reducen la reverberación, aumentando la retención de información hasta un 30%.",
  },
  capacity: {
    title: 'Densidad Pedagógica',
    text: "Calculamos mesas para 8 estudiantes para fomentar 'Células de Aprendizaje'. Grupos mayores a 8 diluyen la participación; grupos menores a 4 limitan la diversidad de ideas.",
  },
}
