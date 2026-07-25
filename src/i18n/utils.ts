import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  // pathname siempre empieza con "/", así que el segmento tras el primer
  // split está en el índice 1 (p.ej. "/en/proyectos" -> ["", "en", "proyectos"]).
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    // Fallback a defaultLang por si un idioma se queda sin traducir una key nueva.
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
