import React from 'react';
import { useLanguage } from '../stores/languageStore';

export const LanguageSwitch: React.FC = () => {
  const [lang, setLang] = useLanguage();

  return (
    <div className="flex items-center font-mono text-xs select-none">
      <button
        type="button"
        onClick={() => setLang('es')}
        className={`cursor-pointer transition-colors ${
          lang === 'es' ? 'text-radish font-bold' : 'text-muted hover:text-pine'
        }`}
        aria-label="Cambiar a Español"
      >
        [ ES ]
      </button>
      <span className="text-pine/20 mx-1.5">/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`cursor-pointer transition-colors ${
          lang === 'en' ? 'text-radish font-bold' : 'text-muted hover:text-pine'
        }`}
        aria-label="Switch to English"
      >
        [ EN ]
      </button>
    </div>
  );
};
