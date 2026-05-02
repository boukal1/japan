import { Injectable } from '@angular/core';
import {
  SITUATIONS,
  Situation,
  SituationId,
  VocabWord,
  Phrase,
  LearningItem,
} from '../models/word.model';
import { WORDS } from '../data/words';
import { PHRASES } from '../data/phrases';

@Injectable({ providedIn: 'root' })
export class VocabService {
  readonly situations: Situation[] = SITUATIONS;
  readonly words: VocabWord[] = WORDS;
  readonly phrases: Phrase[] = PHRASES;

  getSituation(id: SituationId): Situation | undefined {
    return this.situations.find((s) => s.id === id);
  }

  getWordsBySituation(id: SituationId): VocabWord[] {
    return this.words.filter((w) => w.situation === id);
  }

  getPhrasesBySituation(id: SituationId): Phrase[] {
    return this.phrases.filter((p) => p.situation === id);
  }

  /** Mots + phrases unifiés pour les jeux. */
  getItemsBySituation(id: SituationId): LearningItem[] {
    const ws = this.getWordsBySituation(id).map((w) => ({ ...w, kind: 'word' as const }));
    const ps = this.getPhrasesBySituation(id).map((p) => ({ ...p, kind: 'phrase' as const }));
    return [...ws, ...ps];
  }

  /** Fisher-Yates shuffle (returns a new array). */
  shuffle<T>(array: readonly T[]): T[] {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  /** Pick `n` distinct distractors from same situation, preferring same kind. */
  pickDistractors(exclude: LearningItem, count: number): LearningItem[] {
    const all = this.getItemsBySituation(exclude.situation);
    const sameKind = all.filter((x) => x.kind === exclude.kind && x.id !== exclude.id);
    const pool = sameKind.length >= count ? sameKind : all.filter((x) => x.id !== exclude.id);
    return this.shuffle(pool).slice(0, count);
  }
}
