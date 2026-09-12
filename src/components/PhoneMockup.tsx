import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../stores/languageStore';

interface PhoneMockupProps {
  projectId?: string;
  title: string;
  images?: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

const getScreenLabel = (path: string, idx: number, lang: 'es' | 'en') => {
  const filename = path.split('/').pop()?.split('.')[0] || '';
  const lower = filename.toLowerCase();

  if (lower.includes('home')) return 'Home';
  if (lower.includes('expediente')) return lang === 'es' ? 'Expedientes' : 'Records';
  if (lower.includes('hardware')) return 'Hardware';
  if (lower.includes('ajuste') || lower.includes('config')) return lang === 'es' ? 'Ajustes' : 'Settings';
  if (lower.includes('alerta')) return lang === 'es' ? 'Alertas' : 'Alerts';
  if (lower.includes('cuarto')) return lang === 'es' ? 'Cuartos' : 'Rooms';
  if (lower.includes('login')) return 'Login';
  if (lower.includes('calendario')) return lang === 'es' ? 'Calendario' : 'Calendar';

  return `${lang === 'es' ? 'Pantalla' : 'Screen'} ${idx + 1}`;
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  title,
  images = [],
  imageUrl,
  liveUrl,
  repoUrl,
}) => {
  const [lang] = useLanguage();
  const screenList = images.length > 0 ? images : (imageUrl ? [imageUrl] : []);
  const [activeIdx, setActiveIdx] = useState(0);

  const prevImage = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : screenList.length - 1));
  };

  const nextImage = () => {
    setActiveIdx((prev) => (prev < screenList.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 px-2 sm:px-4 overflow-hidden">
      {/* Pestañas de pantallas si hay más de 1 imagen */}
      {screenList.length > 1 && (
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
                    ? 'bg-radish text-cream shadow-sm'
                    : 'bg-cream-2/70 text-pine/80 hover:bg-cream-2 border border-pine/15'
                }`}
              >
                <span>[{String(idx + 1).padStart(2, '0')} // {label}]</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Chasis de celular estilo Ravyn con brillo ambiental sutil */}
      <div className="relative flex items-center justify-center">
        {/* Glow de fondo */}
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-25 pointer-events-none rounded-full scale-90"
          style={{ background: 'radial-gradient(circle, #E0436B 0%, #10342A 70%)' }}
        />

        {/* Marco de iPhone */}
        <div className="relative w-[245px] sm:w-[275px] max-w-[85vw] h-[480px] sm:h-[530px] bg-pine border-2 border-pine/90 rounded-[2.6rem] p-2 sm:p-2.5 shadow-2xl flex flex-col overflow-hidden">
          {/* Contenedor interior de pantalla */}
          <div className="relative w-full h-full bg-black rounded-[2.1rem] overflow-hidden flex flex-col">
            {/* Notch superior con lente y altavoz */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-4.5 bg-pine rounded-b-xl z-20 flex items-center justify-center select-none pointer-events-none">
              <div className="w-8 h-1 bg-black/60 rounded-full" />
            </div>

            {/* Contenido de la pantalla con animación deslizante */}
            <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
              {screenList.length > 0 ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIdx}
                    src={screenList[activeIdx]}
                    alt={`${title} - ${getScreenLabel(screenList[activeIdx], activeIdx, lang)}`}
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

        {/* Flechas de navegación para pantallas múltiples */}
        {screenList.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Pantalla anterior"
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-pine/90 text-cream border border-cream/30 hover:bg-radish transition-all flex items-center justify-center font-mono text-xs cursor-pointer shadow-lg z-30"
            >
              <span>←</span>
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Siguiente pantalla"
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-pine/90 text-cream border border-cream/30 hover:bg-radish transition-all flex items-center justify-center font-mono text-xs cursor-pointer shadow-lg z-30"
            >
              <span>→</span>
            </button>
          </>
        )}
      </div>

      {/* Enlaces de acción técnica con alto contraste */}
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs">
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
