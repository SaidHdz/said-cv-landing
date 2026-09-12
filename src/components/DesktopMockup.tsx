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
  imageSrc,
  title,
  liveUrl,
}) => {
  const [lang] = useLanguage();

  return (
    <div className="w-full flex flex-col items-center justify-center py-4 px-2 sm:px-4 overflow-hidden">
      {/* Marco de Laptop / Desktop estilo Ravyn */}
      <div className="relative w-full max-w-2xl bg-pine border-2 border-pine/90 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col overflow-hidden">
        {/* Barra superior de navegador desktop */}
        <div className="h-7 px-3 flex items-center gap-3 bg-pine select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 bg-cream/10 rounded-md h-5 flex items-center px-3 font-mono text-[10px] sm:text-[11px] text-cream/70 truncate">
            <span>{url}</span>
          </div>
        </div>

        {/* Pantalla interior con captura de la landing */}
        <div className="w-full aspect-[16/10] bg-black rounded-xl overflow-hidden relative">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-cream font-mono text-xs">
              <span>{title}</span>
            </div>
          )}
        </div>
      </div>

      {/* Botón directo de apertura web */}
      {liveUrl && (
        <div className="mt-5 flex justify-center font-mono text-xs">
          <a
            href={liveUrl}
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
