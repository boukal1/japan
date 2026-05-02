export type SituationId = 'salutations-demandes' | 'restaurant' | 'caisse';

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

export interface DialogPart {
  romaji: string;
  french: string;
}

/** Une interaction : ce qu'on entend (heard) + une réponse possible (reply). */
export interface Dialog {
  id: string;
  situation: SituationId;
  heard: DialogPart;
  reply: DialogPart;
}

/** Type unifié pour les jeux. */
export type LearningItem =
  | (VocabWord & { kind: 'word' })
  | (Dialog & { kind: 'dialog' });

export const SITUATIONS: Situation[] = [
  {
    id: 'salutations-demandes',
    name: 'Salutations, remerciements & demandes',
    emoji: '👋',
    description: 'Saluer, remercier, s\'excuser, demander quelque chose ou de l\'aide',
    color: 'from-rose-500 to-red-600',
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
];
