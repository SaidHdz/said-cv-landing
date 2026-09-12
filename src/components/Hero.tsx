import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../stores/languageStore';
import { TRANSLATIONS } from '../locales/translations';

interface HeroProps {
  tag?: string;
}

export const Hero: React.FC<HeroProps> = ({ tag = "@dev.diablo" }) => {
  const [lang] = useLanguage();
  const t = TRANSLATIONS[lang];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-4 sm:pt-8 pb-12 sm:pb-14 border-b border-pine/15 font-mono"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs mb-5"
      >
        <span className="text-radish font-bold">[{tag}]</span>
        <span className="text-pine/30 hidden sm:inline">/</span>
        <a
          href="https://ravynstudio.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pine font-bold hover:text-radish transition-colors uppercase tracking-wider"
        >
          [ Ravyn Studio ]
        </a>
        <span className="text-pine/30 hidden sm:inline">/</span>
        <span className="tracking-wider text-muted uppercase font-medium">
          {t.navbar.semester} // {lang === 'es' ? 'Ing. en TICs' : 'IT Engineering'}
        </span>
        <span className="text-pine/30 hidden sm:inline">/</span>
        <span className="text-pine/60">Tec de Reynosa</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-pine leading-[0.98] uppercase"
      >
        {t.hero.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 max-w-3xl space-y-2"
      >
        <p className="text-sm sm:text-base md:text-lg text-pine font-medium leading-relaxed font-mono">
          {t.hero.role}
        </p>
        <p className="text-xs sm:text-sm text-radish font-medium leading-relaxed font-mono">
          {t.hero.education}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 pt-2"
      >
        <a
          href="#proyectos"
          onClick={(e) => handleScrollTo(e, 'proyectos')}
          className="text-xs sm:text-sm uppercase tracking-wider px-5 py-3 bg-pine text-cream border border-pine hover:bg-pine/90 transition-all font-medium inline-flex items-center cursor-pointer select-none active:scale-[0.98]"
        >
          <span>{t.hero.btnProjects}</span>
        </a>

        <a
          href="#stack"
          onClick={(e) => handleScrollTo(e, 'stack')}
          className="text-xs sm:text-sm uppercase tracking-wider px-5 py-3 bg-transparent text-pine border border-pine/40 hover:border-pine hover:bg-cream-2/70 transition-all font-medium inline-flex items-center cursor-pointer select-none active:scale-[0.98]"
        >
          <span>{t.hero.btnCV}</span>
        </a>

        <a
          href="https://ravynstudio.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm uppercase tracking-wider px-5 py-3 bg-transparent text-radish border border-radish/40 hover:border-radish hover:bg-radish/10 transition-all font-semibold inline-flex items-center gap-1 cursor-pointer select-none active:scale-[0.98]"
        >
          <span>{t.hero.btnRavyn}</span>
        </a>
      </motion.div>
    </motion.header>
  );
};
