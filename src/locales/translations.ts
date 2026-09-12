export type Language = 'es' | 'en';

export interface ProjectTranslation {
  id: string;
  year: string;
  title: string;
  stack: string;
  type: string;
  summary: string;
  problem: string;
  solution: string;
  results: string;
  demoType: 'expo' | 'godot' | 'external';
  isMobileApp?: boolean;
  demoUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  images?: string[];
}

export interface TechCategory {
  code: string;
  name: string;
  items: string[];
}

export interface SiteTranslations {
  navbar: {
    projects: string;
    stack: string;
    contact: string;
    semester: string;
  };
  hero: {
    title: string;
    role: string;
    education: string;
    btnProjects: string;
    btnCV: string;
    btnRavyn: string;
  };
  manifesto: {
    sectionNum: string;
    tag: string;
    mainStatement: string;
    p1: string;
    p2: string;
    focusTitle: string;
    focusDesc: string;
    criterionTitle: string;
    criterionDesc: string;
    baseTitle: string;
    baseDesc: string;
  };
  projects: {
    sectionNum: string;
    tag: string;
    recordsLabel: string;
    colYear: string;
    colProject: string;
    colStack: string;
    colType: string;
    colAction: string;
    actionView: string;
    actionInspect: string;
    note: string;
  };
  modal: {
    technicalFile: string;
    year: string;
    problemLabel: string;
    solutionLabel: string;
    resultsLabel: string;
    stackLabel: string;
    runtimeLabel: string;
    typeLabel: string;
    loadDemo: string;
    closeDemo: string;
    closeModal: string;
    fullscreen: string;
    reload: string;
    repoLink: string;
    liveLink: string;
    mobileAppNotice: string;
    mobileAppDesc: string;
  };
  stack: {
    sectionNum: string;
    tag: string;
    title: string;
    verified: string;
    categories: TechCategory[];
    paradigms: string;
    compilers: string;
  };
  footer: {
    sectionNum: string;
    status: string;
    channelsLabel: string;
    location: string;
    architectureNote: string;
  };
  items: ProjectTranslation[];
}

export const TRANSLATIONS: Record<Language, SiteTranslations> = {
  es: {
    navbar: {
      projects: '// PROYECTOS',
      stack: '// STACK',
      contact: '// CONTACTO',
      semester: '9NO SEMESTRE',
    },
    hero: {
      title: 'SAID ALEJANDRO HERNÁNDEZ',
      role: 'Ingeniero de Software Full-Stack y Desarrollador de Videojuegos en Ravyn Studio',
      education: 'Estudiante de 9no semestre de Ingeniería en Tecnologías de la Información y Comunicaciones en el Instituto Tecnológico de Reynosa (TecNM).',
      btnProjects: '[ Desplegar Proyectos ]',
      btnCV: '[ Stack Tecnológico ]',
      btnRavyn: '[ Ravyn Studio ↗ ]',
    },
    manifesto: {
      sectionNum: '[ 01 // MANIFIESTO ]',
      tag: '// PRINCIPIOS DE INGENIERÍA',
      mainStatement: 'Construyo software con rigor arquitectónico: desde sistemas web escalables y telemetría IoT, hasta experiencias móviles nativas y motores de juego en Godot.',
      p1: 'Estudiante de 9no semestre de Ingeniería en TICs en el Instituto Tecnológico de Reynosa, desarrollo bajo la convicción de que el código funcional en producción supera siempre a las presentaciones estáticas y los mockups conceptuales.',
      p2: 'Cada sistema que diseño, ya sea un pipeline clínico para médicos, una plataforma B2B de monitoreo energético o un shooter 3D, está optimizado para velocidad, determinismo y mantenibilidad a largo plazo.',
      focusTitle: '// 01. ENFOQUE',
      focusDesc: 'Sistemas en producción, alta concurrencia y telemetría en tiempo real.',
      criterionTitle: '// 02. CRITERIO',
      criterionDesc: 'Cero deuda técnica accidental y optimización nativa por hardware.',
      baseTitle: '// 03. BASE',
      baseDesc: 'Instituto Tecnológico de Reynosa · Reynosa, Tamaulipas, México.',
    },
    projects: {
      sectionNum: '[ 02 // ÍNDICE DE PROYECTOS ]',
      tag: '// DIRECTORIO DE REGISTROS',
      recordsLabel: 'REGISTROS',
      colYear: 'AÑO',
      colProject: 'PROYECTO',
      colStack: 'STACK TÉCNICO',
      colType: 'TIPO DE SISTEMA',
      colAction: 'ACCIÓN',
      actionView: '[ Ver ]',
      actionInspect: '[ Desplegar Ficha ]',
      note: 'Haz clic en cualquier fila para abrir la ficha técnica y ejecutar el entorno interactivo.',
    },
    modal: {
      technicalFile: '// FICHA TÉCNICA',
      year: 'AÑO',
      problemLabel: '01 // EL PROBLEMA',
      solutionLabel: '02 // ARQUITECTURA',
      resultsLabel: '03 // RESULTADO Y RECONOCIMIENTO',
      stackLabel: '// STACK TECNOLÓGICO EMPLEADO',
      runtimeLabel: '// ENTORNO DE EJECUCIÓN',
      typeLabel: 'TIPO',
      loadDemo: '[ Cargar Demo Interactivo ]',
      closeDemo: '[ Cerrar Demo ✕ ]',
      closeModal: '[ Cerrar ]',
      fullscreen: '[ Pantalla Completa ]',
      reload: '[ Recargar ]',
      repoLink: '[ Repositorio ↗ ]',
      liveLink: '[ Abrir Aplicación en Vivo ↗ ]',
      mobileAppNotice: '// APLICACIÓN MÓVIL (EXPO / REACT NATIVE)',
      mobileAppDesc: 'Diseñada y optimizada específicamente para dispositivos móviles con telemetría en tiempo real.',
    },
    stack: {
      sectionNum: '[ 03 // STACK TÉCNICO ]',
      tag: '// LENGUAJES Y PLATAFORMAS',
      title: '// DOMINIOS Y HERRAMIENTAS ACTIVAS',
      verified: '[ VERIFICADO ]',
      categories: [
        {
          code: '01',
          name: 'FRONTEND & UI',
          items: ['React', 'TypeScript', 'Astro', 'Tailwind CSS v4', 'CSS Avanzado', 'Diseño Web & UI']
        },
        {
          code: '02',
          name: 'BACKEND & SISTEMAS',
          items: ['Python', 'C++', 'Supabase', 'WebAssembly', 'ESP32 / IoT', 'Arquitectura REST']
        },
        {
          code: '03',
          name: 'VIDEOJUEGOS & 3D',
          items: ['Godot 4', 'GDScript', 'Físicas 2D / 3D', 'Simulaciones Wasm', 'Game Architecture']
        },
        {
          code: '04',
          name: 'MÓVIL & WORKFLOWS',
          items: ['Expo (React Native)', 'n8n', 'Automatizaciones', 'Git & CI/CD']
        }
      ],
      paradigms: 'PARADIGMAS: Reactivo · Concurrente · Event-Driven · Orientado a Componentes',
      compilers: 'ENTORNOS: Node.js · Emscripten (WebAssembly) · GCC / Clang',
    },
    footer: {
      sectionNum: '[ 04 // DISPONIBILIDAD Y CONTACTO ]',
      status: '// DISPONIBLE PARA PROYECTOS',
      channelsLabel: '// CANALES DIRECTOS DE COMUNICACIÓN',
      location: 'SAID ALEJANDRO HERNÁNDEZ // REYNOSA, TAMAULIPAS, MÉXICO',
      architectureNote: 'PORTAFOLIO TÉCNICO // ASTRO Y TAILWIND V4',
    },
    items: [
      {
        id: 'klino',
        year: '2026',
        title: 'Klino',
        stack: 'React, TypeScript, n8n, Supabase',
        type: 'SaaS Médico / Pipeline Clínico',
        summary: 'Documentación clínica asistida por voz que transcribe consultas médicas y genera notas estructuradas bajo normativas NOM 004 y NOM 024.',
        problem: 'Los médicos dedican más del 40% del tiempo de consulta a la captura manual de expedientes clínicos en sistemas poco intuitivos y dispersos.',
        solution: 'Pipeline asíncrono con n8n, Whisper y modelos de lenguaje para estructurar expedientes en segundos con almacenamiento seguro en Supabase.',
        results: '2do Lugar en InnovaTecNM 2026 en el área de Salud. Reducción del tiempo de documentación clínica a menos de 90 segundos por paciente.',
        demoType: 'external',
        isMobileApp: true,
        demoUrl: 'https://ravynstudio.mx/klino',
        repoUrl: 'https://github.com/SaidHdz/Klino',
        liveUrl: 'https://ravynstudio.mx/klino',
        images: [
          '/projects/klino/Home.jpg',
          '/projects/klino/Expedientes.jpg',
          '/projects/klino/Hardware.jpg',
          '/projects/klino/Ajustes.jpg',
        ],
      },
      {
        id: 'slimergy',
        year: '2026',
        title: 'Slimergy App',
        stack: 'Expo, React Native, IoT Hardware, Supabase',
        type: 'App Móvil IoT / Telemetría',
        summary: 'Porteo completo a Expo y arquitectura interactiva para el sistema de telemetría y monitoreo eléctrico residencial e industrial.',
        problem: 'Prototipo original rígido con lecturas técnicas complejas y falta de visibilidad en tiempo real para optimización del consumo de energía.',
        solution: 'Reconstrucción total en Expo y React Native con sincronización en tiempo real, desglose por cuartos y alertas inteligentes de consumo.',
        results: 'Transformación del prototipo a producto comercial listo para producción con respuesta telemétrica instantánea y sincronización BLE / Cloud.',
        demoType: 'expo',
        isMobileApp: true,
        repoUrl: 'https://github.com/SaidHdz/slimergy',
        images: [
          '/projects/slimergy/home_despues_slimergy.jpeg',
          '/projects/slimergy/cuartos__despues_slimergy.jpeg',
          '/projects/slimergy/conifg_despues_slimergy.jpeg',
        ],
      },
      {
        id: 'slimergy-landing',
        year: '2026',
        title: 'Slimergy Landing',
        stack: 'Astro, Tailwind CSS, TypeScript, Vercel',
        type: 'Landing Page / B2B Web',
        summary: 'Landing page comercial y técnica de ultra alto rendimiento diseñada para presentar el ecosistema IoT de Slimergy, comunicar hardware y maximizar conversión.',
        problem: 'El producto requería una presencia digital moderna con carga instantánea y explicación clara de hardware IoT sin penalizar tiempos de respuesta en redes móviles.',
        solution: 'Arquitectura estática con Astro y TypeScript, componentes modulares, optimización integral de bundles, microinteracciones fluidas y despliegue continuo en Vercel.',
        results: 'Puntuación de 100 en Google Lighthouse, reducción del peso de assets en un 96% respecto al prototipo inicial y despliegue de producción de alta disponibilidad.',
        demoType: 'external',
        isMobileApp: false,
        liveUrl: 'https://slimergy-landingpage.vercel.app/',
        images: [
          '/projects/slimergy-landing/preview.webp',
        ],
      },
      {
        id: 'shield-sense',
        year: '2026',
        title: 'Shield Sense',
        stack: 'Expo, React Native, BLE, Hardware IoT',
        type: 'Wearable Médico / Salud',
        summary: 'Gorro wearable con sensores integrados para la detección de impactos craneales en adultos mayores y alertas de emergencia al cuidador.',
        problem: 'Los golpes en la cabeza representan la lesión más letal en caídas de adultos mayores, y los wearables convencionales no detectan el impacto en el cráneo.',
        solution: 'Red de sensores de impacto embebidos en el tejido con procesamiento en borde y comunicación Bluetooth Low Energy directa al dispositivo móvil del cuidador sin requerir conexión a internet.',
        results: '1er Lugar en InnovaTecNM Local 2026 en el área de Salud. Prototipo funcional validado por comités médicos y de ingeniería.',
        demoType: 'expo',
        isMobileApp: true,
        repoUrl: 'https://github.com/SaidHdz',
        images: [
          '/projects/shield-sense/Home.jpg',
          '/projects/shield-sense/Alertas.jpg',
          '/projects/shield-sense/Ajustes.jpg',
        ],
      },
      {
        id: 'gun-bling',
        year: '2025',
        title: 'GunBling',
        stack: 'Godot 4, GDScript, Shaders 3D',
        type: 'Videojuego / Roguelite Shooter 3D',
        summary: 'Shooter 3D roguelite con mecánicas de combate ágiles, generación procedural de arenas y físicas en tiempo real en Godot Engine.',
        problem: 'Diseñar un bucle de combate de ritmo rápido con retroalimentación balística precisa y alto rendimiento en renderizado 3D dinámico.',
        solution: 'Arquitectura modular basada en nodos y señales en GDScript, cálculo de balística por raycast con predicción vectorial y sombreadores personalizados.',
        results: 'Rendimiento fluido a 60 FPS estables con control milimétrico de proyectiles, drops aleatorios y físicas balísticas reactivas.',
        demoType: 'godot',
        isMobileApp: false,
        demoUrl: '/demos/gunbling/index.html',
        repoUrl: 'https://github.com/SaidHdz',
      },
      {
        id: 'croaklands',
        year: '2025',
        title: 'CroakLands',
        stack: 'Godot 4, GDScript, Tilemaps 2.5D',
        type: 'Videojuego / RPG Isométrico',
        summary: 'Juego de rol isométrico en desarrollo enfocado en exploración ambiental, interacción de sistemas y combate táctico.',
        problem: 'Sincronización precisa de capas de profundidad en perspectiva isométrica y navegación de agentes con mallas de navegación complejas.',
        solution: 'Algoritmos de ordenamiento de renderizado por eje Y con NavMesh 2D optimizado para pathfinding suave y arquitectura orientada a componentes.',
        results: 'Sistema base de exploración, combate e inventario completamente desacoplado y en expansión activa.',
        demoType: 'godot',
        isMobileApp: false,
        demoUrl: '/demos/croaklands/index.html',
        repoUrl: 'https://github.com/SaidHdz/croaklands',
      },
    ],
  },
  en: {
    navbar: {
      projects: '// PROJECTS',
      stack: '// STACK',
      contact: '// CONTACT',
      semester: '9TH SEMESTER',
    },
    hero: {
      title: 'SAID ALEJANDRO HERNÁNDEZ',
      role: 'Full-Stack Software Engineer & Game Developer at Ravyn Studio',
      education: '9th semester student of IT and Communications Engineering at Instituto Tecnológico de Reynosa (TecNM).',
      btnProjects: '[ Browse Projects ]',
      btnCV: '[ Tech Stack ]',
      btnRavyn: '[ Ravyn Studio ↗ ]',
    },
    manifesto: {
      sectionNum: '[ 01 // MANIFESTO ]',
      tag: '// ENGINEERING PRINCIPLES',
      mainStatement: 'I engineer software with architectural discipline: from scalable web systems and IoT telemetry, to native mobile experiences and Godot game engines.',
      p1: 'Currently completing my 9th semester of IT Engineering at Instituto Tecnológico de Reynosa, I work under the conviction that functional production code consistently outperforms static slides and conceptual mockups.',
      p2: 'Every system I design, whether a clinical audio pipeline for physicians, a B2B energy monitoring platform, or a 3D shooter, is engineered for speed, determinism, and long-term maintainability.',
      focusTitle: '// 01. FOCUS',
      focusDesc: 'Production-ready architectures, high concurrency, and real-time telemetry.',
      criterionTitle: '// 02. CRITERION',
      criterionDesc: 'Zero accidental technical debt and hardware-native optimization.',
      baseTitle: '// 03. BASE',
      baseDesc: 'Instituto Tecnológico de Reynosa · Reynosa, Tamaulipas, Mexico.',
    },
    projects: {
      sectionNum: '[ 02 // PROJECT DIRECTORY ]',
      tag: '// ACTIVE RECORDS',
      recordsLabel: 'RECORDS',
      colYear: 'YEAR',
      colProject: 'PROJECT',
      colStack: 'TECH STACK',
      colType: 'SYSTEM TYPE',
      colAction: 'ACTION',
      actionView: '[ View ]',
      actionInspect: '[ Open Details ]',
      note: 'Click on any record to view technical specs and launch the interactive runtime.',
    },
    modal: {
      technicalFile: '// TECHNICAL SPEC',
      year: 'YEAR',
      problemLabel: '01 // THE PROBLEM',
      solutionLabel: '02 // ARCHITECTURE',
      resultsLabel: '03 // RESULT & IMPACT',
      stackLabel: '// APPLIED TECH STACK',
      runtimeLabel: '// RUNTIME ENVIRONMENT',
      typeLabel: 'TYPE',
      loadDemo: '[ Launch Interactive Demo ]',
      closeDemo: '[ Exit Demo ✕ ]',
      closeModal: '[ Close ]',
      fullscreen: '[ Fullscreen ]',
      reload: '[ Reload ]',
      repoLink: '[ Repository ↗ ]',
      liveLink: '[ Open Live Application ↗ ]',
      mobileAppNotice: '// MOBILE APPLICATION (EXPO / REACT NATIVE)',
      mobileAppDesc: 'Engineered and optimized specifically for mobile platforms with real-time telemetry.',
    },
    stack: {
      sectionNum: '[ 03 // TECH STACK ]',
      tag: '// LANGUAGES & PLATFORMS',
      title: '// ACTIVE DOMAINS & TOOLING',
      verified: '[ VERIFIED ]',
      categories: [
        {
          code: '01',
          name: 'FRONTEND & UI',
          items: ['React', 'TypeScript', 'Astro', 'Tailwind CSS v4', 'Advanced CSS', 'Web & UI Design']
        },
        {
          code: '02',
          name: 'BACKEND & SYSTEMS',
          items: ['Python', 'C++', 'Supabase', 'WebAssembly', 'ESP32 / IoT', 'REST Architecture']
        },
        {
          code: '03',
          name: 'GAME DEV & 3D',
          items: ['Godot 4', 'GDScript', '2D / 3D Physics', 'Wasm Simulations', 'Game Architecture']
        },
        {
          code: '04',
          name: 'MOBILE & WORKFLOWS',
          items: ['Expo (React Native)', 'n8n', 'Workflow Automations', 'Git & CI/CD']
        }
      ],
      paradigms: 'PARADIGMS: Reactive · Concurrent · Event-Driven · Component-Oriented',
      compilers: 'RUNTIMES: Node.js · Emscripten (WebAssembly) · GCC / Clang',
    },
    footer: {
      sectionNum: '[ 04 // AVAILABILITY & CONTACT ]',
      status: '// AVAILABLE FOR PROJECTS',
      channelsLabel: '// DIRECT COMMUNICATION CHANNELS',
      location: 'SAID ALEJANDRO HERNÁNDEZ // REYNOSA, TAMAULIPAS, MEXICO',
      architectureNote: 'TECHNICAL PORTFOLIO // ASTRO & TAILWIND V4',
    },
    items: [
      {
        id: 'klino',
        year: '2026',
        title: 'Klino',
        stack: 'React, TypeScript, n8n, Supabase',
        type: 'Medical SaaS / Clinical Pipeline',
        summary: 'Voice-assisted clinical documentation app that transcribes medical consultations and generates structured EHR notes compliant with NOM 004 and NOM 024 standards.',
        problem: 'Physicians spend over 40% of consultation time manually inputting patient charts into fragmented, counterintuitive systems.',
        solution: 'Asynchronous pipeline integrating n8n, Whisper audio models, and LLM structuring with end-to-end encrypted storage on Supabase.',
        results: '2nd Place at InnovaTecNM 2026 (Healthcare Division). Reduced EHR documentation time to under 90 seconds per patient.',
        demoType: 'external',
        isMobileApp: true,
        demoUrl: 'https://ravynstudio.mx/klino',
        repoUrl: 'https://github.com/SaidHdz/Klino',
        liveUrl: 'https://ravynstudio.mx/klino',
        images: [
          '/projects/klino/Home.jpg',
          '/projects/klino/Expedientes.jpg',
          '/projects/klino/Hardware.jpg',
          '/projects/klino/Ajustes.jpg',
        ],
      },
      {
        id: 'slimergy',
        year: '2026',
        title: 'Slimergy App',
        stack: 'Expo, React Native, IoT Hardware, Supabase',
        type: 'IoT Mobile App / Telemetry',
        summary: 'Complete port to Expo and interactive architecture for an industrial and residential electrical telemetry system.',
        problem: 'Original prototype was rigid, with obscure technical readouts and lack of real-time visibility for energy conservation.',
        solution: 'Full reconstruction in Expo (React Native) with live telemetry synchronization, room-by-room breakdown, and smart threshold alerts.',
        results: 'Turned the prototype into a production-grade commercial product with instant telemetry response and BLE / Cloud sync.',
        demoType: 'expo',
        isMobileApp: true,
        repoUrl: 'https://github.com/SaidHdz/slimergy',
        images: [
          '/projects/slimergy/home_despues_slimergy.jpeg',
          '/projects/slimergy/cuartos__despues_slimergy.jpeg',
          '/projects/slimergy/conifg_despues_slimergy.jpeg',
        ],
      },
      {
        id: 'slimergy-landing',
        year: '2026',
        title: 'Slimergy Landing',
        stack: 'Astro, Tailwind CSS, TypeScript, Vercel',
        type: 'Landing Page / B2B Web',
        summary: 'Ultra-high-performance commercial and technical landing page engineered to showcase the Slimergy IoT ecosystem, communicate hardware specs, and maximize conversion.',
        problem: 'The product required an ultra-fast, modern web presence communicating complex IoT hardware specs with instant load times on mobile devices.',
        solution: 'Static site architecture using Astro and TypeScript, modular component design, full bundle optimization, fluid micro-interactions, and continuous deployment on Vercel.',
        results: '100 Google Lighthouse score, 96% asset payload reduction compared to initial prototype, and high-availability production deployment.',
        demoType: 'external',
        isMobileApp: false,
        liveUrl: 'https://slimergy-landingpage.vercel.app/',
        images: [
          '/projects/slimergy-landing/preview.webp',
        ],
      },
      {
        id: 'shield-sense',
        year: '2026',
        title: 'Shield Sense',
        stack: 'Expo, React Native, BLE, IoT Hardware',
        type: 'Medical Wearable / Healthcare',
        summary: 'Sensor-embedded wearable beanie designed for real-time cranial impact detection in elderly individuals and instant caregiver dispatch.',
        problem: 'Head strikes are the deadliest injury in elderly falls, yet standard fitness wearables only track body movement rather than cranial impact.',
        solution: 'Fabric-integrated impact sensor matrix with edge processing and direct Bluetooth Low Energy broadcast to caregiver smartphones without internet requirement.',
        results: '1st Place at InnovaTecNM Local 2026 (Healthcare Division). Working hardware prototype certified by medical and engineering panels.',
        demoType: 'expo',
        isMobileApp: true,
        repoUrl: 'https://github.com/SaidHdz',
        images: [
          '/projects/shield-sense/Home.jpg',
          '/projects/shield-sense/Alertas.jpg',
          '/projects/shield-sense/Ajustes.jpg',
        ],
      },
      {
        id: 'gun-bling',
        year: '2025',
        title: 'GunBling',
        stack: 'Godot 4, GDScript, 3D Shaders',
        type: 'Video Game / 3D Roguelite Shooter',
        summary: 'Fast-paced 3D roguelite shooter with procedural arenas, custom shaders, and real-time ballistic physics in Godot Engine.',
        problem: 'Designing a rapid-fire combat loop with precise hit-scan and projectile feedback while sustaining 60 FPS in dynamic 3D scenes.',
        solution: 'Modular node-and-signal architecture in GDScript, vector-predicted raycast ballistics, and optimized custom GPU shaders.',
        results: 'Rock-solid 60 FPS performance in web and desktop with tight projectile control, randomized drops, and reactive ragdoll physics.',
        demoType: 'godot',
        isMobileApp: false,
        demoUrl: '/demos/gunbling/index.html',
        repoUrl: 'https://github.com/SaidHdz',
      },
      {
        id: 'croaklands',
        year: '2025',
        title: 'CroakLands',
        stack: 'Godot 4, GDScript, 2.5D Tilemaps',
        type: 'Video Game / Isometric RPG',
        summary: 'In-development isometric RPG focusing on rich environmental exploration, dynamic systems interaction, and tactical combat.',
        problem: 'Accurate depth-sorting in isometric projection and smooth AI navigation across complex pathfinding meshes.',
        solution: 'Y-axis render ordering algorithms combined with optimized 2D NavMesh navigation and decoupled component architecture.',
        results: 'Core exploration, combat, and inventory systems fully decoupled and under active expansion.',
        demoType: 'godot',
        isMobileApp: false,
        demoUrl: '/demos/croaklands/index.html',
        repoUrl: 'https://github.com/SaidHdz/croaklands',
      },
    ],
  },
};
