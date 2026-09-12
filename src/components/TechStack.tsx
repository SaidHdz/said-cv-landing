import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../stores/languageStore';
import { TRANSLATIONS } from '../locales/translations';

export const TechStack: React.FC = () => {
  const [lang] = useLanguage();
  const t = TRANSLATIONS[lang].stack;

  return (
    <section className="py-14 border-b border-pine/15" id="stack">
      {/* Indicador de sección editorial con animación de entrada */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between font-mono text-xs text-muted mb-6 uppercase tracking-wider"
      >
        <div className="flex items-center gap-3">
          <span className="text-pine font-semibold">{t.sectionNum}</span>
          <span className="text-pine/20">────────────────</span>
        </div>
        <span className="text-radish font-mono text-[11px] hidden sm:inline">{t.tag}</span>
      </motion.div>

      {/* Matriz Técnica Categorizada Ravyn */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="border border-pine/20 bg-cream shadow-sm overflow-hidden"
      >
        {/* Cabecera de la matriz */}
        <div className="px-5 py-3.5 border-b border-pine/15 bg-cream-2/80 font-mono text-xs flex items-center justify-between">
          <span className="text-radish font-bold uppercase tracking-wider">{t.title}</span>
          <span className="text-pine/60 text-[11px]">{t.verified}</span>
        </div>

        {/* Cuadrícula de 4 columnas con revelación escalonada al avanzar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-pine/15">
          {t.categories.map((category, idx) => (
            <motion.div
              key={category.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col bg-cream/60 hover:bg-cream-2/40 transition-colors"
            >
              {/* Cabecera de la categoría */}
              <div className="px-5 py-3 border-b border-pine/15 bg-cream-2/50 flex items-center justify-between font-mono text-xs">
                <span className="text-radish font-bold">[{category.code}]</span>
                <span className="text-pine font-bold uppercase tracking-wider text-[11px]">
                  {category.name}
                </span>
              </div>

              {/* Lista limpia de tecnologías */}
              <ul className="p-5 space-y-3 font-mono text-xs sm:text-sm flex-1">
                {category.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2.5 text-pine group/item">
                    <span className="text-pine/30 text-xs font-mono group-hover/item:text-radish transition-colors">
                      /
                    </span>
                    <span className="font-medium text-pine/90 group-hover/item:text-radish transition-colors tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Metadatos técnicos al pie */}
        <div className="px-5 py-3.5 border-t border-pine/15 bg-cream-2/70 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted">
          <span>{t.paradigms}</span>
          <span>{t.compilers}</span>
        </div>
      </motion.div>
    </section>
  );
};
