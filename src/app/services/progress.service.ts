import { Injectable, signal, computed } from '@angular/core';
import { SituationId } from '../models/word.model';

const STORAGE_KEY = 'japan-app-progress';

export interface QuizScore {
  situation: SituationId;
  score: number;
  total: number;
  date: string;
}

export interface MemoryRecord {
  moves: number;
  seconds: number;
}

export interface Progress {
  knownItemIds: Record<string, number>;
  quizScores: QuizScore[];
  memoryBest: Partial<Record<SituationId, MemoryRecord>>;
}

const EMPTY: Progress = {
  knownItemIds: {},
  quizScores: [],
  memoryBest: {},
};

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly _state = signal<Progress>(this.load());
  readonly state = this._state.asReadonly();

  readonly totalKnown = computed(() => Object.keys(this._state().knownItemIds).length);

  private load(): Progress {
    if (typeof localStorage === 'undefined') return { ...EMPTY };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...EMPTY };
      const parsed = JSON.parse(raw) as Partial<Progress>;
      return {
        knownItemIds: parsed.knownItemIds ?? {},
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

  markKnown(itemId: string) {
    const cur = this._state();
    const count = (cur.knownItemIds[itemId] ?? 0) + 1;
    this.persist({
      ...cur,
      knownItemIds: { ...cur.knownItemIds, [itemId]: count },
    });
  }

  markUnknown(itemId: string) {
    const cur = this._state();
    if (!(itemId in cur.knownItemIds)) return;
    const next = { ...cur.knownItemIds };
    delete next[itemId];
    this.persist({ ...cur, knownItemIds: next });
  }

  isKnown(itemId: string): boolean {
    return (this._state().knownItemIds[itemId] ?? 0) > 0;
  }

  recordQuiz(situation: SituationId, score: number, total: number) {
    const cur = this._state();
    const next: QuizScore = {
      situation,
      score,
      total,
      date: new Date().toISOString(),
    };
    this.persist({
      ...cur,
      quizScores: [next, ...cur.quizScores].slice(0, 50),
    });
  }

  recordMemory(situation: SituationId, moves: number, seconds: number) {
    const cur = this._state();
    const prev = cur.memoryBest[situation];
    const better =
      !prev || moves < prev.moves || (moves === prev.moves && seconds < prev.seconds);
    if (!better) return;
    this.persist({
      ...cur,
      memoryBest: { ...cur.memoryBest, [situation]: { moves, seconds } },
    });
  }

  reset() {
    this.persist({ ...EMPTY });
  }
}
