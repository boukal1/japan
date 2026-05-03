export type SituationId =
  | 'salutations-demandes'
  | 'direction'
  | 'transport'
  | 'hotel'
  | 'restaurant'
  | 'caisse'
  | 'visite'
  | 'shopping';

export interface Situation {
  id: SituationId;
  name: string;
  emoji: string;
  description: string;
  color: string;
  available: boolean;
}

export interface VocabWord {
  id: string;
  romaji: string;
  french: string;
  situation: SituationId;
}

export type Speaker = 'them' | 'me';

export interface DialogTurn {
  speaker: Speaker;
  romaji: string;
  french: string;
}

/** Conversation à 2-4 tours, alternance them → me → them → me… (commence toujours par 'them'). */
export interface Dialog {
  id: string;
  situation: SituationId;
  turns: DialogTurn[];
}

/** Type unifié pour les jeux. */
export type LearningItem =
  | (VocabWord & { kind: 'word' })
  | (Dialog & { kind: 'dialog' });

/* Ordre choisi pour suivre le déroulé d'un voyage : arriver, se déplacer, dormir, manger, visiter, acheter. */
export const SITUATIONS: Situation[] = [
  {
    id: 'salutations-demandes',
    name: 'Salutations & politesse',
    emoji: '👋',
    description: 'Saluer, remercier, s\'excuser, demander de l\'aide',
    color: 'from-rose-500 to-red-600',
    available: true,
  },
  {
    id: 'direction',
    name: 'Demander son chemin',
    emoji: '🗺️',
    description: 'Trouver une rue, comprendre des indications, repérer un point d\'intérêt',
    color: 'from-sky-500 to-blue-600',
    available: true,
  },
  {
    id: 'transport',
    name: 'Transports',
    emoji: '🚆',
    description: 'Train, métro, shinkansen, bus et taxi : billet, voie, IC card, correspondance',
    color: 'from-indigo-500 to-blue-700',
    available: true,
  },
  {
    id: 'hotel',
    name: 'Hôtel & Ryokan',
    emoji: '🏨',
    description: 'Check-in, demander le wifi, le petit-déj, l\'onsen, le yukata, check-out',
    color: 'from-violet-500 to-fuchsia-600',
    available: true,
  },
  {
    id: 'restaurant',
    name: 'Au restaurant',
    emoji: '🍣',
    description: 'Réserver, commander, demander la spécialité, payer et remercier',
    color: 'from-amber-500 to-orange-600',
    available: true,
  },
  {
    id: 'caisse',
    name: 'À la caisse (konbini, magasin)',
    emoji: '🛒',
    description: 'Payer, sac ou pas, micro-ondes, carte de fidélité, sur place ou à emporter',
    color: 'from-emerald-500 to-teal-600',
    available: true,
  },
  {
    id: 'visite',
    name: 'Visites & sites',
    emoji: '🏯',
    description: 'Temples, sanctuaires, musées : billets, photos, horaires, règles',
    color: 'from-yellow-500 to-amber-600',
    available: true,
  },
  {
    id: 'shopping',
    name: 'Shopping & souvenirs',
    emoji: '🛍️',
    description: 'Vêtements, taille, essayage, hors-taxe, souvenirs',
    color: 'from-fuchsia-500 to-pink-600',
    available: true,
  },
];
