export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.work': 'Work', 'nav.lab': 'Lab', 'nav.games': 'Games', 'nav.shop': 'Shop', 'nav.about': 'About', 'nav.contact': 'Contact',
    'hero.line': 'AI-native realizador. 15 years in fashion and advertising. Cannes Lions.',
    'work.title': 'Work', 'work.featured': 'Featured',
    'category.advertising': 'Advertising', 'category.music-video': 'Music video', 'category.fiction': 'Fiction', 'category.personal': 'Personal', 'category.branded': 'Branded content',
    'video.play': 'Play video', 'back': 'Back to work',
    'meta.description': 'Edu Santamaría (Edsanca), AI-native realizador based in Madrid. Fashion, advertising and generative AI film. Cannes Lions winner. Creative Partner of Runway, Pika and Luma.',
  },
  es: {
    'nav.work': 'Trabajo', 'nav.lab': 'Lab', 'nav.games': 'Juegos', 'nav.shop': 'Tienda', 'nav.about': 'About', 'nav.contact': 'Contacto',
    'hero.line': 'Realizador IA-native. 15 años en moda y publicidad. Cannes Lions.',
    'work.title': 'Trabajo', 'work.featured': 'Destacado',
    'category.advertising': 'Publicidad', 'category.music-video': 'Videoclip', 'category.fiction': 'Ficción', 'category.personal': 'Pieza propia', 'category.branded': 'Contenido de marca',
    'video.play': 'Ver vídeo', 'back': 'Volver a trabajo',
    'meta.description': 'Edu Santamaría (Edsanca), realizador IA-native en Madrid. Moda, publicidad y cine con IA generativa. Premiado en Cannes Lions. Creative Partner de Runway, Pika y Luma.',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['en']) {
  return ui[lang][key] ?? ui.en[key];
}

export const workPath = (lang: Lang, id = '') => (lang === 'es' ? `/es/trabajo/${id}` : `/work/${id}`);
export const homePath = (lang: Lang) => (lang === 'es' ? '/es/' : '/');
