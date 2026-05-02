import { Component, OnDestroy, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';
import { LearningItem, SituationId } from '../../models/word.model';

interface QuizQuestion {
  item: LearningItem;
  options: LearningItem[];
}

const QUESTION_COUNT = 10;
const AUTO_ADVANCE_WORD_MS = 4200;
const AUTO_ADVANCE_DIALOG_MS = 7800;

@Component({
  selector: 'app-quiz',
  imports: [RouterLink],
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnDestroy {
  private readonly vocab = inject(VocabService);
  private readonly progress = inject(ProgressService);

  readonly situation = input.required<string>();

  protected readonly situationInfo = computed(() =>
    this.vocab.getSituation(this.situation() as SituationId),
  );

  protected readonly questions = signal<QuizQuestion[]>([]);
  protected readonly current = signal(0);
  protected readonly score = signal(0);
  protected readonly selected = signal<string | null>(null);
  protected readonly finished = signal(false);

  promptRomaji = (item: LearningItem) => this.vocab.promptRomaji(item);
  promptFrench = (item: LearningItem) => this.vocab.promptFrench(item);

  private advanceTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    queueMicrotask(() => this.start());
  }

  ngOnDestroy() {
    this.cancelAutoAdvance();
  }

  protected readonly currentQuestion = computed(() => this.questions()[this.current()]);

  protected readonly verdict = computed<'idle' | 'correct' | 'wrong'>(() => {
    const sel = this.selected();
    if (sel === null) return 'idle';
    return sel === this.currentQuestion()?.item.id ? 'correct' : 'wrong';
  });

  start() {
    this.cancelAutoAdvance();
    const id = this.situation() as SituationId;
    const pool = this.vocab
      .shuffle(this.vocab.getItemsBySituation(id))
      .slice(0, QUESTION_COUNT);
    const qs: QuizQuestion[] = pool.map((item) => {
      const distractors = this.vocab.pickDistractors(item, 3);
      const options = this.vocab.shuffle([item, ...distractors]);
      return { item, options };
    });
    this.questions.set(qs);
    this.current.set(0);
    this.score.set(0);
    this.selected.set(null);
    this.finished.set(false);
  }

  pick(opt: LearningItem) {
    if (this.selected() !== null) return;
    this.selected.set(opt.id);
    const item = this.currentQuestion().item;
    if (opt.id === item.id) {
      this.score.update((s) => s + 1);
      this.progress.markKnown(opt.id);
    }
    const delay = item.kind === 'dialog' ? AUTO_ADVANCE_DIALOG_MS : AUTO_ADVANCE_WORD_MS;
    this.advanceTimer = setTimeout(() => this.nextQuestion(), delay);
  }

  nextQuestion() {
    this.cancelAutoAdvance();
    if (this.current() + 1 >= this.questions().length) {
      this.finish();
      return;
    }
    this.current.update((c) => c + 1);
    this.selected.set(null);
  }

  private cancelAutoAdvance() {
    if (this.advanceTimer) {
      clearTimeout(this.advanceTimer);
      this.advanceTimer = null;
    }
  }

  finish() {
    this.cancelAutoAdvance();
    this.finished.set(true);
    this.progress.recordQuiz(
      this.situation() as SituationId,
      this.score(),
      this.questions().length,
    );
  }

  isCorrect(opt: LearningItem): boolean {
    return this.selected() !== null && opt.id === this.currentQuestion().item.id;
  }
  isWrongPick(opt: LearningItem): boolean {
    const sel = this.selected();
    return sel === opt.id && opt.id !== this.currentQuestion().item.id;
  }

  protected readonly progressPercent = computed(() =>
    Math.round(((this.current() + (this.selected() ? 1 : 0)) / Math.max(1, this.questions().length)) * 100),
  );
}
