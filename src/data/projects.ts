export interface Project {
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
  demoUrl?: string;
  posterUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
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
    demoUrl: 'https://ravynstudio.mx/klino',
    repoUrl: 'https://github.com/SaidHdz/Klino',
    liveUrl: 'https://ravynstudio.mx/klino',
  },
  {
    id: 'slimergy',
    year: '2026',
    title: 'Slimergy',
    stack: 'Expo, React Native, IoT Hardware, Astro',
    type: 'Sistema IoT B2B / Monitoreo',
    summary: 'Porteo completo a Expo y arquitectura interactiva para el sistema de telemetría y monitoreo eléctrico residencial e industrial.',
    problem: 'Prototipo original rígido con lecturas técnicas complejas y falta de visibilidad en tiempo real para optimización del consumo de energía.',
    solution: 'Reconstrucción total en Expo y React Native con sincronización en tiempo real, desglose por cuartos, alertas inteligentes y landing page de ultra alto rendimiento en Astro.',
    results: 'Transformación del prototipo a producto comercial listo para producción, reduciendo el peso de assets web en un 96% y mejorando la respuesta telemétrica.',
    demoType: 'expo',
    demoUrl: 'https://slimergy-landingpage.vercel.app/',
    repoUrl: 'https://github.com/SaidHdz/slimergy',
    liveUrl: 'https://slimergy-landingpage.vercel.app/',
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
    repoUrl: 'https://github.com/SaidHdz',
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
    demoUrl: '/demos/croaklands/index.html',
    repoUrl: 'https://github.com/SaidHdz/croaklands',
  },
];
