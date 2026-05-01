import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';
import { ThemeId, VocabWord } from '../../models/word.model';

interface QuizQuestion {
  word: VocabWord;
  options: VocabWord[];
}

const QUESTION_COUNT = 10;

@Component({
  selector: 'app-quiz',
  imports: [RouterLink],
  templateUrl: './quiz.component.html',
})
export class QuizComponent {
  private readonly vocab = inject(VocabService);
  private readonly progress = inject(ProgressService);

  readonly theme = input.required<string>();

  protected readonly themeInfo = computed(() => {
    const id = this.theme();
    return id === 'all' ? null : this.vocab.getTheme(id as ThemeId);
  });

  protected readonly questions = signal<QuizQuestion[]>([]);
  protected readonly current = signal(0);
  protected readonly score = signal(0);
  protected readonly selected = signal<string | null>(null);
  protected readonly finished = signal(false);

  constructor() {
    queueMicrotask(() => this.start());
  }

  protected readonly currentQuestion = computed(() => this.questions()[this.current()]);

  start() {
    const themeKey = this.theme() as ThemeId | 'all';
    const pool = this.vocab.shuffle(this.vocab.getWordsByTheme(themeKey)).slice(0, QUESTION_COUNT);
    const qs: QuizQuestion[] = pool.map((word) => {
      const distractors = this.vocab.pickDistractors(word, 3);
      const options = this.vocab.shuffle([word, ...distractors]);
      return { word, options };
    });
    this.questions.set(qs);
    this.current.set(0);
    this.score.set(0);
    this.selected.set(null);
    this.finished.set(false);
  }

  pick(opt: VocabWord) {
    if (this.selected() !== null) return;
    this.selected.set(opt.id);
    if (opt.id === this.currentQuestion().word.id) {
      this.score.update((s) => s + 1);
      this.progress.markKnown(opt.id);
    }
  }

  nextQuestion() {
    if (this.current() + 1 >= this.questions().length) {
      this.finish();
      return;
    }
    this.current.update((c) => c + 1);
    this.selected.set(null);
  }

  finish() {
    this.finished.set(true);
    this.progress.recordQuiz(
      this.theme() as ThemeId | 'all',
      this.score(),
      this.questions().length,
    );
  }

  isCorrect(opt: VocabWord): boolean {
    return this.selected() !== null && opt.id === this.currentQuestion().word.id;
  }
  isWrongPick(opt: VocabWord): boolean {
    const sel = this.selected();
    return sel === opt.id && opt.id !== this.currentQuestion().word.id;
  }

  protected readonly progressPercent = computed(() =>
    Math.round(((this.current() + (this.selected() ? 1 : 0)) / Math.max(1, this.questions().length)) * 100),
  );
}
