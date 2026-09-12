import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { ProjectTranslation } from '../locales/translations';
import { TRANSLATIONS } from '../locales/translations';
import { useLanguage } from '../stores/languageStore';
import { ProjectModal } from './ProjectModal';

export const ProjectTableIsland: React.FC = () => {
  const [lang] = useLanguage();
  const t = TRANSLATIONS[lang];

  const [selectedProject, setSelectedProject] = useState<ProjectTranslation | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project: ProjectTranslation) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 border-b border-pine/15" id="proyectos">
      {/* Header del índice con animación al hacer scroll */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-muted mb-8 uppercase tracking-wider"
      >
        <div className="flex items-center gap-3">
          <span className="text-pine font-semibold">{t.projects.sectionNum}</span>
          <span className="text-pine/20">────────────</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-radish font-semibold">{t.projects.tag}</span>
          <span className="text-pine/30">/</span>
          <span className="text-pine/60">{t.projects.recordsLabel}: {t.items.length}</span>
        </div>
      </motion.div>

      {/* Tabla tipográfica interactiva con animación de descubrimiento */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="border border-pine/20 bg-cream/60 overflow-hidden shadow-sm"
      >
        {/* Cabecera (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3.5 border-b border-pine/20 bg-cream-2/70 font-mono text-xs uppercase tracking-wider text-muted font-semibold">
          <div className="col-span-1 text-pine/60">{t.projects.colYear}</div>
          <div className="col-span-3 text-pine/70">{t.projects.colProject}</div>
          <div className="col-span-4 text-pine/70">{t.projects.colStack}</div>
          <div className="col-span-2 text-pine/70">{t.projects.colType}</div>
          <div className="col-span-2 text-right text-pine/60">{t.projects.colAction}</div>
        </div>

        {/* Filas interactivas con entrada escalonada progresiva */}
        <div className="divide-y divide-pine/10">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenProject(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenProject(item);
                }
              }}
              className="project-row group p-5 md:py-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center hover:bg-cream-2/90 transition-all cursor-pointer select-none focus:outline-none focus:bg-cream-2"
            >
              {/* Año */}
              <div className="col-span-1 font-mono text-xs text-muted md:text-pine/70 flex items-center gap-1.5">
                <span className="md:hidden text-pine/40 font-semibold">{t.projects.colYear}:</span>
                <span>{item.year}</span>
              </div>

              {/* Título */}
              <div className="col-span-3 font-display text-lg md:text-xl font-bold text-pine group-hover:text-radish transition-colors flex items-center gap-2">
                <span>{item.title}</span>
              </div>

              {/* Stack */}
              <div className="col-span-4 font-mono text-xs text-pine/80">
                <span className="md:hidden text-muted font-medium mr-1">{t.projects.colStack}: </span>
                <span>{item.stack}</span>
              </div>

              {/* Tipo */}
              <div className="col-span-2 font-mono text-xs text-muted group-hover:text-pine/90 transition-colors">
                <span className="md:hidden font-medium mr-1">{t.projects.colType}: </span>
                <span>{item.type}</span>
              </div>

              {/* Indicador de acción crudo sin salto de línea */}
              <div className="col-span-2 font-mono text-xs text-right text-muted group-hover:text-radish transition-colors flex md:justify-end items-center gap-1.5 mt-2 md:mt-0 font-medium whitespace-nowrap">
                <span className="text-[11px] tracking-wider uppercase md:hidden">{t.projects.actionInspect}</span>
                <span className="hidden md:inline">{t.projects.actionView}</span>
                <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="font-mono text-xs text-muted mt-3 flex items-center gap-2"
      >
        <span className="text-radish font-bold">*</span>
        <span>{t.projects.note}</span>
      </motion.p>

      {/* Componente Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};
