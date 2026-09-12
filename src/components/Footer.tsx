import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../stores/languageStore';
import { TRANSLATIONS } from '../locales/translations';

interface FooterProps {
  githubUsername?: string;
  email?: string;
}

export const Footer: React.FC<FooterProps> = ({
  githubUsername = "SaidHdz",
  email = "SaidDino01@gmail.com",
}) => {
  const [lang] = useLanguage();
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="pt-14 pb-20 font-mono" id="contacto">
      {/* Indicador superior de la sección de contacto con animación */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between text-xs text-muted mb-8 uppercase tracking-wider"
      >
        <div className="flex items-center gap-3">
          <span className="text-pine font-semibold">{t.sectionNum}</span>
          <span className="text-pine/20">────────────────</span>
        </div>
        <span className="text-radish text-[11px] hidden sm:inline">{t.status}</span>
      </motion.div>

      {/* Contenedor de canales directos con animación al descubrir la sección */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="border border-pine/20 bg-cream/70 p-6 md:p-10 shadow-xs"
      >
        <p className="text-xs uppercase tracking-widest text-muted mb-4">
          {t.channelsLabel}
        </p>

        {/* Enlaces de texto masivos estilo terminal cruda */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6"
        >
          {/* Canales principales: Dev & Estudio */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xl sm:text-2xl md:text-3xl font-bold text-pine">
            <a
              href="https://ravynstudio.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-radish transition-colors inline-flex items-center gap-2 group"
            >
              <span>Ravyn</span>
              <span className="text-xs font-normal text-muted group-hover:text-radish">[ravynstudio.mx]</span>
              <span className="text-base text-muted group-hover:text-radish group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>

            <span className="hidden sm:inline text-pine/30 text-xl font-normal">/</span>

            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-radish transition-colors inline-flex items-center gap-2 group"
            >
              <span>GitHub</span>
              <span className="text-xs font-normal text-muted group-hover:text-radish">[{githubUsername}]</span>
              <span className="text-base text-muted group-hover:text-radish group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>

            <span className="hidden sm:inline text-pine/30 text-xl font-normal">/</span>

            <a
              href="https://www.linkedin.com/in/saidhdz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-radish transition-colors inline-flex items-center gap-2 group"
            >
              <span>LinkedIn</span>
              <span className="text-base text-muted group-hover:text-radish group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>

            <span className="hidden sm:inline text-pine/30 text-xl font-normal">/</span>

            <a
              href={`mailto:${email}`}
              className="hover:text-radish transition-colors inline-flex items-center gap-2 group"
            >
              <span>Email</span>
              <span className="text-xs font-normal text-muted group-hover:text-radish">[{email}]</span>
              <span className="text-base text-muted group-hover:text-radish group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>

          {/* Redes y Plataformas @dev.diavlo */}
          <div className="pt-4 border-t border-pine/10 flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-pine">
            <span className="text-xs font-mono text-muted uppercase tracking-wider font-normal">
              // REDES @DEV.DIAVLO:
            </span>

            <a
              href="https://devdiavlo.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-radish transition-colors inline-flex items-center gap-1.5 group"
            >
              <span>Itch.io</span>
              <span className="text-xs text-muted font-normal group-hover:text-radish">[devdiavlo]</span>
              <span className="text-xs text-muted group-hover:text-radish">↗</span>
            </a>

            <span className="text-pine/20">/</span>

            <a
              href="https://www.instagram.com/dev.diavlo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-radish transition-colors inline-flex items-center gap-1.5 group"
            >
              <span>Instagram</span>
              <span className="text-xs text-muted font-normal group-hover:text-radish">[@dev.diavlo]</span>
              <span className="text-xs text-muted group-hover:text-radish">↗</span>
            </a>

            <span className="text-pine/20">/</span>

            <a
              href="https://www.tiktok.com/@dev.diavlo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-radish transition-colors inline-flex items-center gap-1.5 group"
            >
              <span>TikTok</span>
              <span className="text-xs text-muted font-normal group-hover:text-radish">[@dev.diavlo]</span>
              <span className="text-xs text-muted group-hover:text-radish">↗</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-10 pt-6 border-t border-pine/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-muted">
          <div>
            <span>{t.location}</span>
          </div>
          <div>
            <span>{t.architectureNote}</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
