import React from 'react';
import { useLanguage } from '../stores/languageStore';

interface DesktopMockupProps {
  url?: string;
  imageSrc?: string;
  title: string;
  liveUrl?: string;
}

export const DesktopMockup: React.FC<DesktopMockupProps> = ({
  url = 'https://slimergy-landingpage.vercel.app/',
  imageSrc = '/projects/slimergy-landing/preview.webp',
  title,
  liveUrl,
}) => {
  const [lang] = useLanguage();
  const effectiveLiveUrl = liveUrl || url;

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 px-2 sm:px-4 overflow-hidden">
      {/* Marco de Laptop / Desktop estilo Ravyn */}
      <div className="relative w-full max-w-3xl bg-pine border-2 border-pine/90 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col overflow-hidden">
        {/* Glow ambiental */}
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-25 pointer-events-none rounded-2xl scale-95"
          style={{ background: 'radial-gradient(circle, #E0436B 0%, #10342A 70%)' }}
        />

        {/* Barra superior de navegador desktop */}
        <div className="h-8 px-3 flex items-center justify-between gap-3 bg-pine select-none border-b border-cream/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Barra de dirección URL clickeable */}
          <a
            href={effectiveLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={lang === 'es' ? 'Abrir sitio web en producción' : 'Open live website'}
            className="flex-1 max-w-lg bg-cream/10 hover:bg-cream/15 transition-colors rounded-md h-5.5 flex items-center justify-between px-3 font-mono text-[10px] sm:text-[11px] text-cream/80 truncate cursor-pointer group"
          >
            <div className="flex items-center gap-2 truncate">
              <span className="text-sprout text-[9px] font-bold shrink-0">HTTPS://</span>
              <span className="truncate group-hover:text-cream">{effectiveLiveUrl.replace(/^https?:\/\//, '')}</span>
            </div>
            <span className="text-[9px] text-sprout uppercase tracking-wider font-semibold shrink-0 hidden sm:inline">
              ● 200 OK ↗
            </span>
          </a>

          {/* Enlace directo externo */}
          <a
            href={effectiveLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={lang === 'es' ? 'Abrir en pestaña nueva' : 'Open in new tab'}
            className="text-cream/70 hover:text-radish transition-colors font-mono text-xs p-1"
          >
            <span>↗</span>
          </a>
        </div>

        {/* Pantalla interior con captura HD y overlay interactivo al hacer clic */}
        <a
          href={effectiveLiveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full h-[260px] sm:h-[400px] md:h-[460px] bg-black rounded-xl overflow-hidden cursor-pointer block"
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-cream font-mono text-xs">
              <span>{title}</span>
            </div>
          )}

          {/* Overlay hover indicando clic para abrir */}
          <div className="absolute inset-0 bg-pine/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 backdrop-blur-xs text-cream font-mono select-none">
            <span className="px-4 py-2 bg-radish text-cream font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2">
              <span>{lang === 'es' ? '[ Abrir Sitio Web en Producción ]' : '[ Open Live Website ]'}</span>
              <span>↗</span>
            </span>
            <span className="text-[10px] text-cream/70 tracking-widest uppercase">
              {effectiveLiveUrl.replace(/^https?:\/\//, '')}
            </span>
          </div>
        </a>
      </div>

      {/* Nota técnica de entorno externo */}
      <div className="mt-3 flex items-center justify-center text-cream/50 font-mono text-[10px] uppercase tracking-wider select-none text-center">
        <span>
          {lang === 'es'
            ? '// SITIO EN PRODUCCIÓN ACTIVO EN VERCEL · DESPLIEGUE DIRECTO'
            : '// LIVE PRODUCTION DEPLOYMENT ON VERCEL · DIRECT ACCESS'}
        </span>
      </div>

      {/* Botón directo de apertura web */}
      {effectiveLiveUrl && (
        <div className="mt-4 flex justify-center font-mono text-xs">
          <a
            href={effectiveLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-radish text-cream hover:bg-radish/90 transition-all font-semibold inline-flex items-center gap-2 shadow-sm"
          >
            <span>{lang === 'es' ? '[ Abrir Sitio Web en Producción ]' : '[ Open Live Website ]'}</span>
            <span>↗</span>
          </a>
        </div>
      )}
    </div>
  );
};
