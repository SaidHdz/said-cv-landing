import React, { useState } from 'react';
import { useLanguage } from '../stores/languageStore';

interface DesktopMockupProps {
  url?: string;
  imageSrc?: string;
  title: string;
  liveUrl?: string;
}

export const DesktopMockup: React.FC<DesktopMockupProps> = ({
  url = 'https://slimergy-landingpage.vercel.app/',
  imageSrc,
  title,
  liveUrl,
}) => {
  const [lang] = useLanguage();
  const effectiveLiveUrl = liveUrl || url;
  const [viewMode, setViewMode] = useState<'live' | 'preview'>('live');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 px-2 sm:px-4 overflow-hidden">
      {/* Selector de modo: Interactivo en Vivo vs Captura Estática */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs select-none">
        <button
          type="button"
          onClick={() => setViewMode('live')}
          className={`px-3.5 py-1.5 font-semibold text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
            viewMode === 'live'
              ? 'bg-sprout text-pine shadow-sm font-bold'
              : 'bg-black/40 text-cream/70 hover:text-cream border border-cream/20'
          }`}
        >
          <span>{lang === 'es' ? '[ EN VIVO // INTERACTIVO ]' : '[ LIVE // INTERACTIVE ]'}</span>
        </button>
        {imageSrc && (
          <button
            type="button"
            onClick={() => setViewMode('preview')}
            className={`px-3.5 py-1.5 font-semibold text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
              viewMode === 'preview'
                ? 'bg-radish text-cream shadow-sm font-bold'
                : 'bg-black/40 text-cream/70 hover:text-cream border border-cream/20'
            }`}
          >
            <span>{lang === 'es' ? '[ CAPTURA HD ]' : '[ HD CAPTURE ]'}</span>
          </button>
        )}
      </div>

      {/* Marco de Laptop / Desktop estilo Ravyn */}
      <div className="relative w-full max-w-3xl bg-pine border-2 border-pine/90 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col overflow-hidden">
        {/* Glow ambiental */}
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-20 pointer-events-none rounded-2xl scale-95"
          style={{ background: 'radial-gradient(circle, #E0436B 0%, #10342A 70%)' }}
        />

        {/* Barra superior de navegador desktop */}
        <div className="h-8 px-3 flex items-center justify-between gap-3 bg-pine select-none border-b border-cream/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Barra de dirección URL */}
          <div className="flex-1 max-w-lg bg-cream/10 rounded-md h-5.5 flex items-center justify-between px-3 font-mono text-[10px] sm:text-[11px] text-cream/80 truncate">
            <div className="flex items-center gap-2 truncate">
              <span className="text-sprout text-[9px] font-bold shrink-0">HTTPS://</span>
              <span className="truncate">{effectiveLiveUrl.replace(/^https?:\/\//, '')}</span>
            </div>
            <span className="text-[9px] text-sprout uppercase tracking-wider font-semibold shrink-0 hidden sm:inline">
              ● 200 OK
            </span>
          </div>

          {/* Enlace directo externo */}
          <a
            href={effectiveLiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={lang === 'es' ? 'Abrir en pestaña nueva' : 'Open in new tab'}
            className="text-cream/70 hover:text-radish transition-colors font-mono text-xs"
          >
            <span>↗</span>
          </a>
        </div>

        {/* Pantalla interior interactiva */}
        <div className="w-full h-[320px] sm:h-[440px] md:h-[500px] bg-black rounded-xl overflow-hidden relative">
          {viewMode === 'live' ? (
            <div className="relative w-full h-full bg-white">
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-pine font-mono text-cream gap-2">
                  <div className="w-6 h-6 border-2 border-sprout border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs text-cream/80 uppercase tracking-wider">
                    {lang === 'es' ? 'Cargando Landing en Vivo...' : 'Loading Live Landing...'}
                  </span>
                </div>
              )}
              <iframe
                src={effectiveLiveUrl}
                title={title}
                onLoad={() => setIframeLoaded(true)}
                className="w-full h-full border-0 block"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                loading="lazy"
              />
            </div>
          ) : (
            imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-cream font-mono text-xs">
                <span>{title}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Botón directo de apertura web */}
      {effectiveLiveUrl && (
        <div className="mt-5 flex justify-center font-mono text-xs">
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
