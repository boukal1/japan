import { Injectable } from '@angular/core';
import { THEMES, Theme, ThemeId, VocabWord, Phrase } from '../models/word.model';
import { WORDS } from '../data/words';
import { PHRASES } from '../data/phrases';

@Injectable({ providedIn: 'root' })
export class VocabService {
  readonly themes: Theme[] = THEMES;
  readonly words: VocabWord[] = WORDS;
  readonly phrases: Phrase[] = PHRASES;

  getPhrasesByTheme(id: ThemeId | 'all'): Phrase[] {
    if (id === 'all') return this.phrases;
    return this.phrases.filter((p) => p.theme === id);
  }

  getTheme(id: ThemeId): Theme | undefined {
    return this.themes.find((t) => t.id === id);
  }

  getWordsByTheme(id: ThemeId | 'all'): VocabWord[] {
    if (id === 'all') return this.words;
    return this.words.filter((w) => w.theme === id);
  }

  getById(id: string): VocabWord | undefined {
    return this.words.find((w) => w.id === id);
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

  /** Pick `n` distinct distractors from same theme (or any) excluding `exclude`. */
  pickDistractors(exclude: VocabWord, count: number): VocabWord[] {
    const sameTheme = this.words.filter(
      (w) => w.theme === exclude.theme && w.id !== exclude.id,
    );
    const pool = sameTheme.length >= count
      ? sameTheme
      : this.words.filter((w) => w.id !== exclude.id);
    return this.shuffle(pool).slice(0, count);
  }
}
