// data/studioData.js

// ============================================
// CONFIGURACIÓN ACADÉMICA
// ============================================
export const ACADEMIC_LEVELS = {
  preescolar: {
    label: 'Preescolar',
    minArea: 2.5,
    description: 'Espacios seguros y coloridos para los más pequeños',
  },
  primaria: {
    label: 'Primaria',
    minArea: 2.0,
    description: 'Aulas versátiles para aprendizaje activo',
  },
  secundaria: {
    label: 'Secundaria',
    minArea: 1.8,
    description: 'Laboratorios y espacios colaborativos',
  },
  bachillerato: {
    label: 'Bachillerato',
    minArea: 1.5,
    description: 'Entornos profesionales con tecnología avanzada',
  },
}

// ============================================
// TIPOS DE AMBIENTES
// ============================================
export const ROOM_TYPES = {
  maker: {
    id: 'maker',
    name: 'Aula Maker',
    icon: '🔧',
    description: 'Espacio para creación y prototipado',
    zones: [
      {
        id: 'cnc',
        label: 'Zona CNC',
        icon: '⚙️',
        cost: 45000,
        asset: {
          color: 'border-orange-500',
          label: 'Router CNC',
          description: 'Máquina de control numérico para corte preciso',
        },
      },
      {
        id: 'impresion',
        label: 'Impresión 3D',
        icon: '🖨️',
        cost: 35000,
        asset: {
          color: 'border-blue-500',
          label: 'Impresoras 3D',
          description: 'Banco de impresoras para prototipado rápido',
        },
      },
      {
        id: 'herramientas',
        label: 'Herramientas Manuales',
        icon: '🔨',
        cost: 15000,
        asset: {
          color: 'border-green-500',
          label: 'Banco de Herramientas',
          description: 'Herramientas básicas para proyectos',
        },
      },
      {
        id: 'electronica',
        label: 'Electrónica',
        icon: '🔌',
        cost: 25000,
        asset: {
          color: 'border-yellow-500',
          label: 'Estación de Soldadura',
          description: 'Equipo para circuitos y prototipos electrónicos',
        },
      },
    ],
  },

  steam: {
    id: 'steam',
    name: 'Aula STEAM',
    icon: '🧪',
    description: 'Ciencia, Tecnología, Ingeniería, Arte y Matemáticas',
    zones: [
      {
        id: 'robotica',
        label: 'Robótica',
        icon: '🤖',
        cost: 55000,
        asset: {
          color: 'border-red-500',
          label: 'Kits Robótica',
          description: 'Kits de robótica educativa (LEGO, VEX, Arduino)',
        },
      },
      {
        id: 'laboratorio',
        label: 'Laboratorio Ciencias',
        icon: '🧪',
        cost: 40000,
        asset: {
          color: 'border-purple-500',
          label: 'Equipo Laboratorio',
          description: 'Microscopios, balanzas y material científico',
        },
      },
      {
        id: 'audiovisual',
        label: 'Producción AV',
        icon: '🎥',
        cost: 30000,
        asset: {
          color: 'border-pink-500',
          label: 'Estación Audiovisual',
          description: 'Equipo para creación de contenido multimedia',
        },
      },
      {
        id: 'realidad',
        label: 'Realidad Virtual',
        icon: '🥽',
        cost: 60000,
        asset: {
          color: 'border-indigo-500',
          label: 'Zona VR',
          description: 'Gafas de realidad virtual y estaciones interactivas',
        },
      },
    ],
  },

  colaborativo: {
    id: 'colaborativo',
    name: 'Aula Colaborativa',
    icon: '👥',
    description: 'Espacios flexibles para trabajo en equipo',
    zones: [
      {
        id: 'pizarras',
        label: 'Pizarras Interactivas',
        icon: '📱',
        cost: 25000,
        asset: {
          color: 'border-teal-500',
          label: 'Smart Boards',
          description: 'Pizarras digitales interactivas',
        },
      },
      {
        id: 'zonas_soft',
        label: 'Zonas de Descanso',
        icon: '🛋️',
        cost: 20000,
        asset: {
          color: 'border-amber-500',
          label: 'Lounge',
          description: 'Áreas informales para brainstorming',
        },
      },
      {
        id: 'presentaciones',
        label: 'Zona Presentaciones',
        icon: '🎤',
        cost: 18000,
        asset: {
          color: 'border-emerald-500',
          label: 'Escenario',
          description: 'Espacio para exposiciones y presentaciones',
        },
      },
    ],
  },
}

// ============================================
// FORMAS DE SALÓN
// ============================================
export const ROOM_SHAPES = {
  rectangular: {
    id: 'rectangular',
    label: 'Rectangular',
    areaFactor: 1.0,
    clipPath: 'none',
    borderRadius: '4px',
    validZone: (x, y) => true, // Todas las zonas son válidas
  },
  cuadrada: {
    id: 'cuadrada',
    label: 'Cuadrada',
    areaFactor: 1.0,
    clipPath: 'none',
    borderRadius: '4px',
    validZone: (x, y) => true,
  },
  l: {
    id: 'l',
    label: 'Forma L',
    areaFactor: 0.85,
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 70% 70%, 70% 100%, 0% 100%)',
    borderRadius: '4px',
    validZone: (x, y) => {
      // Esquina faltante en la L (30% del ancho y 30% del alto)
      if (x > 0.7 && y > 0.7) return false
      return true
    },
  },
  circular: {
    id: 'circular',
    label: 'Circular',
    areaFactor: 0.78, // π/4 ≈ 0.785
    clipPath: 'circle(50% at 50% 50%)',
    borderRadius: '100%',
    validZone: (x, y) => {
      // Coordenadas normalizadas (-1 a 1)
      const dx = (x - 0.5) * 2
      const dy = (y - 0.5) * 2
      // Está dentro del círculo si distancia <= 1
      return dx * dx + dy * dy <= 1
    },
  },
}

// ============================================
// CATÁLOGO DE MOBILIARIO
// ============================================
export const CATALOG = {
  furniture: {
    workTable: {
      name: 'Mesa de Trabajo',
      width: 1.8,
      depth: 0.9,
      height: 0.75,
      capacity: 8,
      price: 3500,
    },
    chair: {
      name: 'Silla Ergonómica',
      width: 0.5,
      depth: 0.5,
      height: 0.45,
      price: 800,
    },
    teachersDesk: {
      name: 'Escritorio Profesor',
      width: 1.5,
      depth: 0.7,
      height: 0.75,
      price: 4500,
    },
    storage: {
      name: 'Módulo de Almacenamiento',
      width: 1.2,
      depth: 0.4,
      height: 2.0,
      price: 5200,
    },
  },
}

// ============================================
// PRECIOS Y COSTOS
// ============================================
export const PRICING = {
  finishes: {
    basic: 1200, // $/m² - Acabado funcional
    standard: 1800, // $/m² - Acabado estándar
    premium: 2500, // $/m² - Acabado premium
  },

  furniture: {
    studentTable: 3500,
    chair: 800,
    teachersDesk: 4500,
    storageModule: 5200,
  },

  equipmentKits: {
    maker: {
      sencillo: {
        cost: 50000,
        desc: 'Kit básico: herramientas manuales, destornilladores, martillos, alicates',
      },
      avanzado: {
        cost: 85000,
        desc: 'Kit avanzado: +herramientas eléctricas, taladros, caladoras',
      },
      experto: {
        cost: 120000,
        desc: 'Kit experto: +CNC router, impresora 3D, cortadora láser',
      },
    },
    steam: {
      sencillo: {
        cost: 45000,
        desc: 'Kit básico: kits Arduino, sensores simples',
      },
      avanzado: {
        cost: 75000,
        desc: 'Kit avanzado: +robótica LEGO, microscopios digitales',
      },
      experto: {
        cost: 110000,
        desc: 'Kit experto: +gafas VR, estaciones de soldadura, kits avanzados',
      },
    },
    colaborativo: {
      sencillo: {
        cost: 30000,
        desc: 'Kit básico: pizarras blancas, proyectores',
      },
      avanzado: {
        cost: 55000,
        desc: 'Kit avanzado: +pizarras interactivas, tablets',
      },
      experto: {
        cost: 90000,
        desc: 'Kit experto: +sistema de videoconferencia, pantallas táctiles',
      },
    },
  },
}

// ============================================
// DESCRIPCIONES DE ACABADOS POR TIPO DE SALA
// ============================================
export const FINISH_DESCRIPTIONS = {
  maker: {
    basic:
      'Acabado funcional: piso industrial, muros de concreto aparente, iluminación LED básica. Ideal para talleres de iniciación.',
    standard:
      'Acabado estándar: piso epóxico, aislamiento acústico parcial, iluminación regulable y tomacorrientes reforzados.',
    premium:
      'Acabado premium: piso antiestático, paneles acústicos profesionales, sistema de extracción de polvo, clima controlado.',
  },
  steam: {
    basic:
      'Acabado funcional: superficies lavables, conexiones eléctricas básicas, buena iluminación natural.',
    standard:
      'Acabado estándar: mobiliario modular, puntos de red y electricidad en islas, cortinas blackout.',
    premium:
      'Acabado premium: laboratorio integrado, sistema de ventilación especializado, mesadas de trabajo profesionales.',
  },
  colaborativo: {
    basic: 'Acabado funcional: pintura clara, iluminación general, piso vinílico.',
    standard:
      'Acabado estándar: zonas de descanso, paneles acústicos decorativos, iluminación regulable.',
    premium:
      'Acabado premium: mobiliario flexible, sistema de sonido envolvente, pizarras magnéticas en paredes.',
  },
}

// ============================================
// CONTEXTO PEDAGÓGICO (TOOLTIPS)
// ============================================
export const LEARNING_CONTEXT = {
  geometry: {
    title: 'Geometría Estratégica',
    text: 'La forma del aula no es solo estética. Define los flujos de circulación, la acústica y la visibilidad. Una forma L permite separar zonas de trabajo, mientras que un círculo fomenta la discusión equitativa.',
  },
  capacity: {
    title: 'Densidad Pedagógica',
    text: 'La densidad recomendada varía según el nivel académico. Preescolar necesita más espacio por alumno (2.5m²) que bachillerato (1.5m²). Menos densidad = mejor concentración.',
  },
  zones: {
    title: 'Zonificación Activa',
    text: 'Las zonas especializadas convierten un aula común en un laboratorio multidisciplinario. Actívalas según tu presupuesto y objetivos pedagógicos. Cada zona incluye mobiliario y equipo específico.',
  },
  acoustics: {
    title: 'Acústica y Confort',
    text: 'Los acabados afectan directamente la calidad del sonido y el confort térmico. Nivel básico: funcional. Estándar: balance costo/beneficio. Premium: experiencia inmersiva profesional.',
  },
}

// ============================================
// CONFIGURACIÓN DE CONTACTO
// ============================================
export const CONTACT_CONFIG = {
  whatsapp: '5215512345678', // Cambia por tu número real
  email: 'ventas@hericraft.com', // Cambia por tu email real
  phone: '+52 (55) 1234 5678',
  calendarLink: 'https://calendly.com/tu-usuario/consultoria',
}
