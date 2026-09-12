import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectTranslation } from '../locales/translations';
import { TRANSLATIONS } from '../locales/translations';
import { useLanguage } from '../stores/languageStore';
import { PhoneMockup } from './PhoneMockup';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectTranslation | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [lang] = useLanguage();
  const t = TRANSLATIONS[lang].modal;

  const [isDemoLoaded, setIsDemoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Reiniciar estado del demo cuando cambia de proyecto o se cierra
  useEffect(() => {
    setIsDemoLoaded(false);
  }, [project, isOpen]);

  // Bloqueo de scroll estático sin alterar la posición de la ventana ni disparar animaciones
  useEffect(() => {
    if (!isOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Congelar el scroll en html y body directamente en su coordenada actual
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleFullscreen = () => {
    if (iframeRef.current && iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen().catch(() => {
        // Silenciar si el navegador bloquea fullscreen automatico
      });
    }
  };

  const handleReloadDemo = () => {
    if (iframeRef.current && project?.demoUrl) {
      iframeRef.current.src = project.demoUrl;
    }
  };

  const handleCloseDemo = () => {
    setIsDemoLoaded(false);
  };

  if (!isOpen || !project) return null;

  const isGodotProject = project.demoType === 'godot';
  const isMobileApp = project.isMobileApp;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden overscroll-contain">
        {/* Backdrop oscuro con desenfoque y prevención total de toques de fondo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="absolute inset-0 bg-pine/85 backdrop-blur-md touch-none"
          aria-hidden="true"
        />

        {/* Panel flotante estilo documento tecnico crudo Ravyn blindado contra scroll chaining */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl h-full max-h-[94dvh] sm:max-h-[90vh] bg-cream border border-pine/30 shadow-2xl flex flex-col overflow-hidden z-10 overscroll-contain"
          role="dialog"
          aria-modal="true"
        >
          {/* Header del Modal */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-pine/15 bg-cream-2/70 font-mono text-xs gap-3 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden">
              <span className="font-bold text-pine uppercase tracking-wider truncate">{project.title}</span>
              <span className="text-pine/30 hidden sm:inline">/</span>
              <span className="text-muted hidden sm:inline truncate">{project.type}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 text-pine hover:text-radish transition-colors font-medium"
                >
                  <span>{t.repoLink}</span>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 bg-pine text-cream hover:bg-radish transition-colors font-semibold tracking-wider uppercase inline-flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>{t.closeModal}</span>
                <span className="text-xs">✕</span>
              </button>
            </div>
          </div>

          {/* Contenido Scrollable con blindaje horizontal */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8 space-y-6 sm:space-y-8">
            {/* Titulo y resumen */}
            <div className="min-w-0">
              <div className="font-mono text-xs text-radish font-semibold uppercase tracking-widest mb-1">
                {t.technicalFile} / {t.year} {project.year}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-pine tracking-tight break-words">
                {project.title}
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-pine/85 mt-2.5 max-w-3xl leading-relaxed break-words">
                {project.summary}
              </p>
            </div>

            {/* AREA DE DEMO INTERACTIVO O MOCKUP MOVIL */}
            <div className="border border-pine/20 bg-pine/5 overflow-hidden w-full">
              <div className="px-3 sm:px-4 py-2 border-b border-pine/15 bg-cream-2/80 font-mono text-xs text-muted flex flex-wrap items-center justify-between gap-2">
                <div className="shrink-0">
                  <span>{t.runtimeLabel}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="text-pine font-medium text-[11px] sm:text-xs">
                    {t.typeLabel}: {project.type.toUpperCase()}
                  </span>
                  {isDemoLoaded && isGodotProject && (
                    <>
                      <button
                        type="button"
                        onClick={handleReloadDemo}
                        className="text-pine hover:text-radish transition-colors text-[10px] sm:text-[11px] cursor-pointer"
                      >
                        {t.reload}
                      </button>
                      <button
                        type="button"
                        onClick={handleFullscreen}
                        className="text-pine hover:text-radish transition-colors text-[10px] sm:text-[11px] cursor-pointer"
                      >
                        {t.fullscreen}
                      </button>
                      <button
                        type="button"
                        onClick={handleCloseDemo}
                        className="text-radish font-bold hover:underline transition-colors text-[10px] sm:text-[11px] cursor-pointer"
                      >
                        {t.closeDemo}
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div>
                {/* CASO 1: Apps Moviles (Klino, Shield Sense, Slimergy) -> Mockup de Celular Vertical */}
                {isMobileApp ? (
                  <div className="w-full bg-pine/95 py-2 overflow-hidden">
                    <PhoneMockup
                      projectId={project.id}
                      title={project.title}
                      liveUrl={project.liveUrl}
                      repoUrl={project.repoUrl}
                    />
                  </div>
                ) : isGodotProject ? (
                  /* CASO 2: Videojuegos Godot 3D / Isometrico (GunBling / CroakLands) */
                  <div className="relative aspect-video w-full bg-pine/95 flex items-center justify-center overflow-hidden">
                    {!isDemoLoaded ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4 bg-radial from-pine/90 to-pine text-cream">
                        <div className="font-display text-xl sm:text-2xl font-bold max-w-md text-cream break-words">
                          {project.title} // Demostración Funcional
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsDemoLoaded(true)}
                          className="font-mono text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 bg-radish text-cream hover:bg-radish/90 transition-all font-semibold shadow-lg hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
                        >
                          <span className="text-sm">▶</span>
                          <span>{t.loadDemo}</span>
                        </button>
                      </div>
                    ) : (
                      <div className="w-full h-full relative bg-black">
                        <iframe
                          ref={iframeRef}
                          src={project.demoUrl}
                          title={`Demo de ${project.title}`}
                          className="w-full h-full border-0 block"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; pointer-lock"
                          allowFullScreen
                        />
                        <button
                          type="button"
                          onClick={handleCloseDemo}
                          className="absolute top-3 right-3 z-30 px-3 py-1.5 bg-radish text-cream font-mono text-xs uppercase font-bold tracking-wider hover:bg-radish/90 transition-all shadow-md cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <span>{t.closeDemo}</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  /* CASO 3: Proyectos Web (Slimergy Landing) */
                  <div className="w-full bg-pine/95 p-4 sm:p-8 flex flex-col items-center justify-center text-center text-cream font-mono overflow-hidden">
                    <div className="w-full max-w-2xl border border-cream/20 bg-pine/80 shadow-2xl overflow-hidden">
                      {/* Barra superior de navegador técnico */}
                      <div className="px-4 py-2.5 bg-black/40 border-b border-cream/15 flex items-center justify-between text-[11px] text-cream/70">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-radish font-bold shrink-0">// PROD</span>
                          <span className="text-cream/30">/</span>
                          <span className="truncate max-w-[180px] sm:max-w-xs">{project.liveUrl}</span>
                        </div>
                        <span className="text-[10px] text-sprout uppercase tracking-wider font-semibold shrink-0">200 OK</span>
                      </div>

                      {/* Cuerpo de la tarjeta de lanzamiento */}
                      <div className="p-6 sm:p-10 flex flex-col items-center justify-center space-y-4">
                        <div className="font-display text-2xl sm:text-3xl font-bold text-cream break-words">
                          {project.title}
                        </div>
                        <p className="font-mono text-xs text-cream/70 max-w-lg leading-relaxed">
                          {project.stack}
                        </p>

                        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 bg-radish text-cream hover:bg-radish/90 transition-all font-semibold inline-flex items-center gap-2 shadow-sm"
                            >
                              <span>{t.liveLink}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Ficha tecnica: Problema, Solucion y Resultados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-mono">
              <div className="space-y-2 min-w-0">
                <span className="text-xs text-muted uppercase tracking-wider block font-semibold">
                  {t.problemLabel}
                </span>
                <p className="font-sans text-sm text-pine/90 leading-relaxed font-normal break-words">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-2 md:border-l md:border-pine/15 md:pl-6 min-w-0">
                <span className="text-xs text-muted uppercase tracking-wider block font-semibold">
                  {t.solutionLabel}
                </span>
                <p className="font-sans text-sm text-pine/90 leading-relaxed font-normal break-words">
                  {project.solution}
                </p>
              </div>

              <div className="space-y-2 md:border-l md:border-pine/15 md:pl-6 min-w-0">
                <span className="text-xs text-radish uppercase tracking-wider block font-semibold">
                  {t.resultsLabel}
                </span>
                <p className="font-sans text-sm text-pine font-medium leading-relaxed break-words">
                  {project.results}
                </p>
              </div>
            </div>

            {/* Stack Tecnologico en texto plano crudo */}
            <div className="pt-4 border-t border-pine/10 font-mono text-xs min-w-0">
              <span className="text-muted uppercase tracking-wider block mb-2 font-semibold">
                {t.stackLabel}
              </span>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-pine text-sm leading-relaxed break-words">
                {project.stack.split(',').map((item, idx, arr) => (
                  <span key={item.trim()} className="inline-flex items-center gap-2">
                    <span className="font-medium text-pine">{item.trim()}</span>
                    {idx < arr.length - 1 && (
                      <span className="text-pine/30 font-normal">/</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Enlaces de pie de ficha */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-pine/10 font-mono text-xs">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-pine text-cream hover:bg-pine/90 transition-colors inline-flex items-center gap-2 font-medium"
                >
                  <span>{t.liveLink}</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 border border-pine/30 text-pine hover:border-radish hover:text-radish transition-colors inline-flex items-center gap-2 font-medium"
                >
                  <span>{t.repoLink}</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
