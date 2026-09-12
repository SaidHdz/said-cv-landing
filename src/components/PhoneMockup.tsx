import React from 'react';
import { useLanguage } from '../stores/languageStore';

interface PhoneMockupProps {
  projectId: string;
  title: string;
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  title,
  imageUrl,
  liveUrl,
  repoUrl,
}) => {
  const [lang] = useLanguage();

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-4 overflow-hidden">
      {/* Chasis de celular estilo terminal técnica Ravyn */}
      <div className="relative w-[240px] sm:w-[270px] max-w-[85vw] h-[460px] sm:h-[510px] bg-pine border-2 border-pine/80 rounded-[2.5rem] p-3 shadow-2xl flex flex-col overflow-hidden">
        {/* Notch / Barra de sensores superior */}
        <div className="w-full flex items-center justify-between px-3 pt-1 pb-2 font-mono text-[10px] text-cream/60 select-none">
          <span>09:41</span>
          <div className="w-14 sm:w-16 h-2.5 bg-black/70 rounded-md flex items-center justify-center">
            <span className="w-1 h-1 bg-cream/30 rounded-xs"></span>
          </div>
          <span>5G · 100%</span>
        </div>

        {/* Pantalla interior limpia (lista para recibir imágenes reales) */}
        <div className="flex-1 w-full bg-cream-2/95 text-pine rounded-[1.8rem] flex flex-col items-center justify-center p-4 border border-pine/20 overflow-hidden relative select-none">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover object-top rounded-[1.4rem]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-pine/30 rounded-[1.4rem] p-4 text-center">
              <span className="font-mono text-xs text-pine font-bold tracking-wider uppercase">
                {title}
              </span>
              <span className="font-mono text-[10px] text-muted mt-2 tracking-widest uppercase">
                {lang === 'es' ? '[ ESPACIO PARA CAPTURA ]' : '[ SCREENSHOT AREA ]'}
              </span>
            </div>
          )}
        </div>

        {/* Indicador de home bar del celular */}
        <div className="w-20 h-1 bg-cream/40 rounded-full mx-auto mt-2 select-none"></div>
      </div>

      {/* Enlaces de acción técnica con contraste verificado para fondo oscuro */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs">
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
