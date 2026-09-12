import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../stores/languageStore';
import { TRANSLATIONS } from '../locales/translations';

export const Manifesto: React.FC = () => {
  const [lang] = useLanguage();
  const t = TRANSLATIONS[lang].manifesto;

  return (
    <section className="py-16 border-b border-pine/15" id="manifiesto">
      {/* Header de sección con animación */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between font-mono text-xs text-muted mb-8 uppercase tracking-wider"
      >
        <div className="flex items-center gap-3">
          <span className="text-pine font-semibold">{t.sectionNum}</span>
          <span className="text-pine/20">──────────────</span>
        </div>
        <span className="text-radish font-mono text-[11px] hidden sm:inline">{t.tag}</span>
      </motion.div>

      <div className="space-y-8 max-w-4xl">
        {/* Declaración Principal */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl text-pine font-semibold leading-tight tracking-tight text-left"
        >
          {t.mainStatement}
        </motion.h2>

        {/* Declaración Secundaria / Contexto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 text-pine/85 font-sans text-base sm:text-lg leading-relaxed"
        >
          <div className="md:col-span-6 space-y-4">
            <p>{t.p1}</p>
          </div>
          <div className="md:col-span-6 space-y-4">
            <p>{t.p2}</p>
          </div>
        </motion.div>

        {/* Metadatos y Criterios tipográficos crudos con animación escalonada */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-pine/10 font-mono text-xs">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-1.5"
          >
            <span className="text-radish font-semibold uppercase tracking-wider block">{t.focusTitle}</span>
            <p className="text-pine/85 leading-relaxed">{t.focusDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-1.5 sm:border-l sm:border-pine/15 sm:pl-6"
          >
            <span className="text-pine/70 font-semibold uppercase tracking-wider block">{t.criterionTitle}</span>
            <p className="text-pine/85 leading-relaxed">{t.criterionDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-1.5 sm:border-l sm:border-pine/15 sm:pl-6"
          >
            <span className="text-radish font-semibold uppercase tracking-wider block">{t.baseTitle}</span>
            <p className="text-pine/85 leading-relaxed">{t.baseDesc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
