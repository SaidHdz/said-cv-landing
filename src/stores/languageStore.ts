import { useState, useEffect } from 'react';
import type { Language } from '../locales/translations';

let currentLang: Language = 'es';
const listeners = new Set<(lang: Language) => void>();

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('portfolio_lang') as Language;
  if (saved === 'es' || saved === 'en') {
    currentLang = saved;
  }
}

export function setLanguage(lang: Language) {
  currentLang = lang;
  if (typeof window !== 'undefined') {
    localStorage.setItem('portfolio_lang', lang);
    window.dispatchEvent(new CustomEvent('portfolio_lang_change', { detail: lang }));
  }
  listeners.forEach((listener) => listener(lang));
}

export function getLanguage(): Language {
  return currentLang;
}

export function useLanguage(): [Language, (lang: Language) => void] {
  const [lang, setLang] = useState<Language>(currentLang);

  useEffect(() => {
    const handleUpdate = (newLang: Language) => {
      setLang(newLang);
    };
    listeners.add(handleUpdate);

    const handleCustomEvent = (e: Event) => {
      const detail = (e as CustomEvent<Language>).detail;
      if (detail) setLang(detail);
    };
    window.addEventListener('portfolio_lang_change', handleCustomEvent);

    return () => {
      listeners.delete(handleUpdate);
      window.removeEventListener('portfolio_lang_change', handleCustomEvent);
    };
  }, []);

  return [lang, setLanguage];
}
