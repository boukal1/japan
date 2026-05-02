import { Component, OnDestroy, OnInit, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';
import { SituationId } from '../../models/word.model';

interface MemoryCard {
  key: string;
  pairId: string;
  text: string;
  side: 'romaji' | 'french';
  flipped: boolean;
  matched: boolean;
}

const PAIR_COUNT = 6;

@Component({
  selector: 'app-memory',
  imports: [RouterLink],
  templateUrl: './memory.component.html',
})
export class MemoryComponent implements OnInit, OnDestroy {
  private readonly vocab = inject(VocabService);
  private readonly progress = inject(ProgressService);

  readonly situation = input.required<string>();

  protected readonly situationInfo = computed(() =>
    this.vocab.getSituation(this.situation() as SituationId),
  );

  protected readonly cards = signal<MemoryCard[]>([]);
  protected readonly moves = signal(0);
  protected readonly seconds = signal(0);
  protected readonly finished = signal(false);
  protected readonly best = computed(
    () => this.progress.state().memoryBest[this.situation() as SituationId],
  );

  private firstPick: MemoryCard | null = null;
  private lock = false;
  private timerId: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  start() {
    this.stopTimer();
    const id = this.situation() as SituationId;
    const pairs = this.vocab.shuffle(this.vocab.getWordsBySituation(id)).slice(0, PAIR_COUNT);
    const cards: MemoryCard[] = pairs.flatMap((w) => [
      { key: w.id + '-r', pairId: w.id, text: w.romaji, side: 'romaji' as const, flipped: false, matched: false },
      { key: w.id + '-f', pairId: w.id, text: w.french, side: 'french' as const, flipped: false, matched: false },
    ]);
    this.cards.set(this.vocab.shuffle(cards));
    this.moves.set(0);
    this.seconds.set(0);
    this.finished.set(false);
    this.firstPick = null;
    this.lock = false;
    this.timerId = setInterval(() => this.seconds.update((s) => s + 1), 1000);
  }

  private stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  pick(card: MemoryCard) {
    if (this.lock || card.flipped || card.matched) return;

    this.cards.update((arr) => arr.map((c) => (c.key === card.key ? { ...c, flipped: true } : c)));

    const updated = this.cards().find((c) => c.key === card.key)!;

    if (!this.firstPick) {
      this.firstPick = updated;
      return;
    }

    this.moves.update((m) => m + 1);

    if (this.firstPick.pairId === updated.pairId && this.firstPick.key !== updated.key) {
      const matchId = updated.pairId;
      this.cards.update((arr) =>
        arr.map((c) => (c.pairId === matchId ? { ...c, matched: true } : c)),
      );
      this.progress.markKnown(matchId);
      this.firstPick = null;
      if (this.cards().every((c) => c.matched)) {
        this.win();
      }
    } else {
      this.lock = true;
      const a = this.firstPick.key;
      const b = updated.key;
      setTimeout(() => {
        this.cards.update((arr) =>
          arr.map((c) => (c.key === a || c.key === b ? { ...c, flipped: false } : c)),
        );
        this.firstPick = null;
        this.lock = false;
      }, 800);
    }
  }

  private win() {
    this.stopTimer();
    this.finished.set(true);
    this.progress.recordMemory(this.situation() as SituationId, this.moves(), this.seconds());
  }

  formatTime(s: number): string {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }
}
