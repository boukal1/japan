import { Injectable, signal, computed } from '@angular/core';
import { ThemeId } from '../models/word.model';

const STORAGE_KEY = 'japan-app-progress';

export interface QuizScore {
  theme: ThemeId | 'all';
  score: number;
  total: number;
  date: string;
}

export interface MemoryRecord {
  moves: number;
  seconds: number;
}

export interface Progress {
  knownWordIds: Record<string, number>;
  quizScores: QuizScore[];
  memoryBest: Partial<Record<ThemeId | 'all', MemoryRecord>>;
}

const EMPTY: Progress = {
  knownWordIds: {},
  quizScores: [],
  memoryBest: {},
};

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly _state = signal<Progress>(this.load());
  readonly state = this._state.asReadonly();

  readonly totalKnown = computed(() => Object.keys(this._state().knownWordIds).length);

  private load(): Progress {
    if (typeof localStorage === 'undefined') return { ...EMPTY };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...EMPTY };
      const parsed = JSON.parse(raw) as Partial<Progress>;
      return {
        knownWordIds: parsed.knownWordIds ?? {},
        quizScores: parsed.quizScores ?? [],
        memoryBest: parsed.memoryBest ?? {},
      };
    } catch {
      return { ...EMPTY };
    }
  }

  private persist(next: Progress) {
    this._state.set(next);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }

  markKnown(wordId: string) {
    const cur = this._state();
    const count = (cur.knownWordIds[wordId] ?? 0) + 1;
    this.persist({
      ...cur,
      knownWordIds: { ...cur.knownWordIds, [wordId]: count },
    });
  }

  markUnknown(wordId: string) {
    const cur = this._state();
    if (!(wordId in cur.knownWordIds)) return;
    const next = { ...cur.knownWordIds };
    delete next[wordId];
    this.persist({ ...cur, knownWordIds: next });
  }

  isKnown(wordId: string): boolean {
    return (this._state().knownWordIds[wordId] ?? 0) > 0;
  }

  recordQuiz(theme: ThemeId | 'all', score: number, total: number) {
    const cur = this._state();
    const next: QuizScore = {
      theme,
      score,
      total,
      date: new Date().toISOString(),
    };
    this.persist({
      ...cur,
      quizScores: [next, ...cur.quizScores].slice(0, 50),
    });
  }

  recordMemory(theme: ThemeId | 'all', moves: number, seconds: number) {
    const cur = this._state();
    const prev = cur.memoryBest[theme];
    const better =
      !prev || moves < prev.moves || (moves === prev.moves && seconds < prev.seconds);
    if (!better) return;
    this.persist({
      ...cur,
      memoryBest: { ...cur.memoryBest, [theme]: { moves, seconds } },
    });
  }

  knownInTheme(themeId: ThemeId, themeWordIds: string[]): number {
    const known = this._state().knownWordIds;
    return themeWordIds.filter((id) => (known[id] ?? 0) > 0).length;
  }

  reset() {
    this.persist({ ...EMPTY });
  }
}
