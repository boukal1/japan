export type ThemeId =
  | 'greetings'
  | 'people'
  | 'numbers-time'
  | 'food'
  | 'home'
  | 'places'
  | 'verbs'
  | 'adjectives'
  | 'body-emotions'
  | 'work-school';

export interface Theme {
  id: ThemeId;
  name: string;
  emoji: string;
  description: string;
  color: string;
}

export interface VocabWord {
  id: string;
  romaji: string;
  french: string;
  theme: ThemeId;
}

export const THEMES: Theme[] = [
  {
    id: 'greetings',
    name: 'Salutations & expressions',
    emoji: '👋',
    description: 'Les formules de politesse et expressions courantes',
    color: 'from-rose-500 to-red-600',
  },
  {
    id: 'people',
    name: 'Famille & personnes',
    emoji: '👨‍👩‍👧',
    description: 'Les membres de la famille et les pronoms',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'numbers-time',
    name: 'Nombres, temps & dates',
    emoji: '🕐',
    description: 'Compter, dire l\'heure et les jours',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'food',
    name: 'Nourriture & boissons',
    emoji: '🍣',
    description: 'À table avec les mots japonais',
    color: 'from-lime-500 to-green-600',
  },
  {
    id: 'home',
    name: 'Maison & objets du quotidien',
    emoji: '🏠',
    description: 'À la maison et autour de soi',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'places',
    name: 'Lieux & transports',
    emoji: '🚆',
    description: 'Se déplacer et s\'orienter',
    color: 'from-cyan-500 to-sky-600',
  },
  {
    id: 'verbs',
    name: 'Verbes essentiels',
    emoji: '⚡',
    description: 'Les actions du quotidien',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'adjectives',
    name: 'Adjectifs courants',
    emoji: '🎨',
    description: 'Décrire et qualifier',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'body-emotions',
    name: 'Corps, santé & émotions',
    emoji: '💗',
    description: 'Le corps humain et les sentiments',
    color: 'from-fuchsia-500 to-pink-600',
  },
  {
    id: 'work-school',
    name: 'Travail, école & société',
    emoji: '💼',
    description: 'Études, métiers et vie sociale',
    color: 'from-stone-500 to-zinc-700',
  },
];
