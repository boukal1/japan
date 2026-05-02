export type SituationId = 'salutations-demandes';

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

export interface Phrase {
  id: string;
  situation: SituationId;
  romaji: string;
  french: string;
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
];
