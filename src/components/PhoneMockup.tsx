import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../stores/languageStore';

interface PhoneMockupProps {
  projectId?: string;
  title: string;
  images?: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  landingUrl?: string;
}

type SlimergyMode = 'despues' | 'antes';
type SlimergyScreen = 'home' | 'cuartos' | 'ajustes';

const getScreenLabel = (path: string, idx: number, lang: 'es' | 'en') => {
  const filename = path.split('/').pop()?.split('.')[0] || '';
  const lower = filename.toLowerCase();

  const isAntes = lower.includes('antes');
  const isDespues = lower.includes('despues');
  const tag = isAntes
    ? (lang === 'es' ? ' [Antes]' : ' [Before]')
    : isDespues
    ? (lang === 'es' ? ' [Después]' : ' [After]')
    : '';

  if (lower.includes('login')) return `Login${tag}`;
  if (lower.includes('home') || lower.includes('inicio')) return `Home${tag}`;
  if (lower.includes('expediente')) return (lang === 'es' ? 'Expedientes' : 'Records') + tag;
  if (lower.includes('hardware')) return `Hardware${tag}`;
  if (lower.includes('calendario') || lower.includes('agenda')) return (lang === 'es' ? 'Calendario' : 'Schedule') + tag;
  if (lower.includes('ajuste') || lower.includes('confi')) return (lang === 'es' ? 'Ajustes' : 'Settings') + tag;
  if (lower.includes('alerta')) return (lang === 'es' ? 'Alertas' : 'Alerts') + tag;
  if (lower.includes('cuarto')) return (lang === 'es' ? 'Cuartos' : 'Rooms') + tag;

  return `${lang === 'es' ? 'Pantalla' : 'Screen'} ${idx + 1}${tag}`;
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  projectId,
  title,
  images = [],
  imageUrl,
  liveUrl,
  repoUrl,
  landingUrl,
}) => {
  const [lang] = useLanguage();
  const screenList = useMemo(() => {
    return images.length > 0 ? images : (imageUrl ? [imageUrl] : []);
  }, [images, imageUrl]);

  const isSlimergy = projectId === 'slimergy' || screenList.some(img => img.toLowerCase().includes('antes'));
  const [slimergyMode, setSlimergyMode] = useState<SlimergyMode>('despues');
  const [slimergyScreen, setSlimergyScreen] = useState<SlimergyScreen>('home');
  const [activeIdx, setActiveIdx] = useState(0);

  // Mapeo dinámico para Slimergy (Home, Cuartos, Ajustes en modo Antes / Después)
  const slimergyImageMap = useMemo(() => {
    const map: Record<SlimergyScreen, Record<SlimergyMode, string>> = {
      home: {
        despues: screenList.find(img => img.includes('home') && img.includes('despues')) || screenList[0] || '',
        antes: screenList.find(img => img.includes('home') && img.includes('antes')) || screenList[1] || '',
      },
      cuartos: {
        despues: screenList.find(img => img.includes('cuarto') && img.includes('despues')) || screenList[2] || '',
        antes: screenList.find(img => img.includes('cuarto') && img.includes('antes')) || screenList[3] || '',
      },
      ajustes: {
        despues: screenList.find(img => (img.includes('conf') || img.includes('ajuste')) && img.includes('despues')) || screenList[4] || '',
        antes: screenList.find(img => (img.includes('conf') || img.includes('ajuste')) && img.includes('antes')) || screenList[5] || '',
      },
    };
    return map;
  }, [screenList]);

  // Imagen actual calculada
  const currentImage = useMemo(() => {
    if (isSlimergy && screenList.length >= 6) {
      return slimergyImageMap[slimergyScreen][slimergyMode];
    }
    return screenList[activeIdx] || '';
  }, [isSlimergy, screenList, slimergyImageMap, slimergyScreen, slimergyMode, activeIdx]);

  const prevImage = () => {
    if (isSlimergy && screenList.length >= 6) {
      const screens: SlimergyScreen[] = ['home', 'cuartos', 'ajustes'];
      const currentIdx = screens.indexOf(slimergyScreen);
      const nextIdx = currentIdx > 0 ? currentIdx - 1 : screens.length - 1;
      setSlimergyScreen(screens[nextIdx]);
    } else {
      setActiveIdx((prev) => (prev > 0 ? prev - 1 : screenList.length - 1));
    }
  };

  const nextImage = () => {
    if (isSlimergy && screenList.length >= 6) {
      const screens: SlimergyScreen[] = ['home', 'cuartos', 'ajustes'];
      const currentIdx = screens.indexOf(slimergyScreen);
      const nextIdx = currentIdx < screens.length - 1 ? currentIdx + 1 : 0;
      setSlimergyScreen(screens[nextIdx]);
    } else {
      setActiveIdx((prev) => (prev < screenList.length - 1 ? prev + 1 : 0));
    }
  };

  // Determinar si la imagen actual es antes o después
  const isCurrentBefore = currentImage.toLowerCase().includes('antes');

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 px-2 sm:px-6 md:px-12 overflow-hidden">
      {/* Selector especializado para Slimergy: Switch Antes/Después + Pestañas de pantallas */}
      {isSlimergy && screenList.length >= 6 ? (
        <div className="w-full max-w-md flex flex-col items-center gap-3 mb-5 font-mono text-xs">
          {/* Switch Antes / Después con alto contraste */}
          <div className="flex items-center gap-2 p-1 bg-black/40 border border-cream/20">
            <button
              type="button"
              onClick={() => setSlimergyMode('despues')}
              className={`px-3 sm:px-4 py-1.5 font-semibold text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                slimergyMode === 'despues'
                  ? 'bg-sprout text-pine shadow-sm font-bold'
                  : 'text-cream/70 hover:text-cream hover:bg-cream/10'
              }`}
            >
              <span>{lang === 'es' ? '[ REDISEÑO // DESPUÉS ]' : '[ REDESIGN // AFTER ]'}</span>
            </button>
            <button
              type="button"
              onClick={() => setSlimergyMode('antes')}
              className={`px-3 sm:px-4 py-1.5 font-semibold text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                slimergyMode === 'antes'
                  ? 'bg-radish text-cream shadow-sm font-bold'
                  : 'text-cream/70 hover:text-cream hover:bg-cream/10'
              }`}
            >
              <span>{lang === 'es' ? '[ PROTOTIPO // ANTES ]' : '[ PROTOTYPE // BEFORE ]'}</span>
            </button>
          </div>

          {/* Selector de pantallas de Slimergy */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(['home', 'cuartos', 'ajustes'] as const).map((scr, idx) => {
              const label =
                scr === 'home'
                  ? 'Home'
                  : scr === 'cuartos'
                  ? (lang === 'es' ? 'Cuartos' : 'Rooms')
                  : (lang === 'es' ? 'Ajustes' : 'Settings');
              const isActive = slimergyScreen === scr;
              return (
                <button
                  key={scr}
                  type="button"
                  onClick={() => setSlimergyScreen(scr)}
                  className={`px-3 py-1 text-[11px] font-semibold tracking-wider uppercase cursor-pointer select-none transition-all ${
                    isActive
                      ? 'bg-cream text-pine shadow-sm font-bold border border-cream'
                      : 'bg-cream-2/70 text-pine/80 hover:bg-cream-2 border border-pine/15'
                  }`}
                >
                  <span>[{String(idx + 1).padStart(2, '0')} // {label}]</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Pestañas estándar para proyectos móviles como Klino y Shield Sense */
        screenList.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 font-mono text-xs">
            {screenList.map((img, idx) => {
              const label = getScreenLabel(img, idx, lang);
              const isActive = activeIdx === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`px-3 py-1.5 transition-all text-[11px] font-semibold tracking-wider uppercase cursor-pointer select-none ${
                    isActive
                      ? 'bg-radish text-cream shadow-sm font-bold'
                      : 'bg-cream-2/70 text-pine/80 hover:bg-cream-2 border border-pine/15'
                  }`}
                >
                  <span>[{String(idx + 1).padStart(2, '0')} // {label}]</span>
                </button>
              );
            })}
          </div>
        )
      )}

      {/* Chasis de celular estilo Ravyn con controles de navegación con espacio garantizado */}
      <div className="relative flex items-center justify-center px-4 sm:px-8">
        {/* Glow de fondo */}
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-25 pointer-events-none rounded-full scale-90"
          style={{ background: 'radial-gradient(circle, #E0436B 0%, #10342A 70%)' }}
        />

        {/* Flecha izquierda en Desktop / Tablet (ampliamente separada del chasis para evitar solapamiento) */}
        {screenList.length > 1 && (
          <button
            type="button"
            onClick={prevImage}
            aria-label={lang === 'es' ? 'Pantalla anterior' : 'Previous screen'}
            className="hidden md:flex absolute -left-14 lg:-left-18 top-1/2 -translate-y-1/2 w-11 h-11 bg-pine/95 text-cream border border-cream/30 hover:bg-radish transition-all items-center justify-center font-mono text-base cursor-pointer shadow-2xl z-30 select-none"
          >
            <span>←</span>
          </button>
        )}

        {/* Marco de iPhone */}
        <div className="relative w-[245px] sm:w-[275px] max-w-[85vw] h-[480px] sm:h-[530px] bg-pine border-2 border-pine/90 rounded-[2.6rem] p-2 sm:p-2.5 shadow-2xl flex flex-col overflow-hidden">
          {/* Contenedor interior de pantalla */}
          <div className="relative w-full h-full bg-black rounded-[2.1rem] overflow-hidden flex flex-col">
            {/* Notch superior con lente y altavoz */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-4.5 bg-pine rounded-b-xl z-20 flex items-center justify-center select-none pointer-events-none">
              <div className="w-8 h-1 bg-black/60 rounded-full" />
            </div>

            {/* Badge indicador de estado Antes / Después en esquina superior */}
            {isSlimergy && currentImage && (
              <div className="absolute top-6 right-3 z-20 pointer-events-none">
                <span
                  className={`font-mono text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 shadow-md ${
                    isCurrentBefore
                      ? 'bg-radish text-cream border border-cream/30'
                      : 'bg-sprout text-pine border border-pine/30'
                  }`}
                >
                  {isCurrentBefore
                    ? (lang === 'es' ? 'PROTOTIPO PREVIO' : 'PREV PROTOTYPE')
                    : (lang === 'es' ? 'REDISEÑO EXPO' : 'EXPO REDESIGN')}
                </span>
              </div>
            )}

            {/* Contenido de la pantalla con animación deslizante */}
            <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
              {currentImage ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={currentImage}
                    alt={`${title} - ${getScreenLabel(currentImage, activeIdx, lang)}`}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover object-top select-none"
                  />
                </AnimatePresence>
              ) : (
                <div className="w-full h-full bg-cream flex flex-col items-center justify-center p-4 text-center font-mono text-pine">
                  <span className="text-xs font-bold uppercase">{title}</span>
                  <span className="text-[10px] text-muted mt-2 uppercase">
                    {lang === 'es' ? '[ CAPTURA PENDIENTE ]' : '[ PENDING CAPTURE ]'}
                  </span>
                </div>
              )}
            </div>

            {/* Indicador de barra home inferior */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full z-20 pointer-events-none select-none" />
          </div>
        </div>

        {/* Flecha derecha en Desktop / Tablet (ampliamente separada del chasis para evitar solapamiento) */}
        {screenList.length > 1 && (
          <button
            type="button"
            onClick={nextImage}
            aria-label={lang === 'es' ? 'Siguiente pantalla' : 'Next screen'}
            className="hidden md:flex absolute -right-14 lg:-right-18 top-1/2 -translate-y-1/2 w-11 h-11 bg-pine/95 text-cream border border-cream/30 hover:bg-radish transition-all items-center justify-center font-mono text-base cursor-pointer shadow-2xl z-30 select-none"
          >
            <span>→</span>
          </button>
        )}
      </div>

      {/* Controles de navegación móvil (completamente separados debajo del teléfono para no encimarse) */}
      {screenList.length > 1 && (
        <div className="flex md:hidden items-center justify-center gap-3 mt-4 w-full font-mono text-xs select-none">
          <button
            type="button"
            onClick={prevImage}
            aria-label={lang === 'es' ? 'Pantalla anterior' : 'Previous screen'}
            className="px-4 py-2 bg-pine text-cream border border-cream/30 hover:bg-radish active:bg-radish transition-all font-semibold flex items-center gap-2 cursor-pointer shadow-md text-[11px]"
          >
            <span>←</span>
            <span>{lang === 'es' ? 'ANTERIOR' : 'PREV'}</span>
          </button>
          <div className="px-3 py-1.5 bg-black/40 border border-cream/20 text-cream/80 text-[11px] font-semibold">
            {isSlimergy && screenList.length >= 6 ? (
              <span>
                {slimergyScreen.toUpperCase()} · {slimergyMode.toUpperCase()}
              </span>
            ) : (
              <span>
                {String(activeIdx + 1).padStart(2, '0')} / {String(screenList.length).padStart(2, '0')}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={nextImage}
            aria-label={lang === 'es' ? 'Siguiente pantalla' : 'Next screen'}
            className="px-4 py-2 bg-pine text-cream border border-cream/30 hover:bg-radish active:bg-radish transition-all font-semibold flex items-center gap-2 cursor-pointer shadow-md text-[11px]"
          >
            <span>{lang === 'es' ? 'SIGUIENTE' : 'NEXT'}</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Enlaces de acción técnica con alto contraste */}
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs">
        {landingUrl && (
          <a
            href={landingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-radish text-cream hover:bg-radish/90 transition-all font-semibold inline-flex items-center gap-2 shadow-sm"
          >
            <span>{lang === 'es' ? '[ Ver Landing Page de Slimergy ]' : '[ View Slimergy Landing Page ]'}</span>
            <span>↗</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-radish text-cream hover:bg-radish/90 transition-all font-semibold inline-flex items-center gap-2 shadow-sm"
          >
            <span>{lang === 'es' ? '[ Abrir Aplicación en Vivo ]' : '[ Open Live Application ]'}</span>
            <span>↗</span>
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-cream/50 text-cream hover:bg-cream hover:text-pine transition-colors font-medium inline-flex items-center gap-2"
          >
            <span>{lang === 'es' ? '[ Ver Repositorio ]' : '[ View Repository ]'}</span>
            <span>↗</span>
          </a>
        )}
      </div>
    </div>
  );
};
