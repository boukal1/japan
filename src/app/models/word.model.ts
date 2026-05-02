export type SituationId = 'salutations-demandes' | 'restaurant';

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

export type PhraseDirection = 'speak' | 'listen';

export interface Phrase {
  id: string;
  situation: SituationId;
  romaji: string;
  french: string;
  /** 'speak' = phrase à dire (par défaut), 'listen' = phrase qu'on peut vous dire. */
  direction?: PhraseDirection;
}

/** Unified type so games can mix words and phrases. */
export type LearningItem =
  | (VocabWord & { kind: 'word' })
  | (Phrase & { kind: 'phrase' });

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
];
