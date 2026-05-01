import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';
import { ThemeId } from '../../models/word.model';

@Component({
  selector: 'app-flashcards',
  imports: [RouterLink],
  templateUrl: './flashcards.component.html',
})
export class FlashcardsComponent {
  private readonly vocab = inject(VocabService);
  protected readonly progress = inject(ProgressService);

  readonly theme = input.required<string>();

  protected readonly themeInfo = computed(() => {
    const id = this.theme();
    return id === 'all' ? null : this.vocab.getTheme(id as ThemeId);
  });

  protected readonly deck = computed(() => {
    const t = this.theme() as ThemeId | 'all';
    return this.vocab.shuffle(this.vocab.getWordsByTheme(t));
  });

  protected readonly index = signal(0);
  protected readonly flipped = signal(false);

  protected readonly current = computed(() => this.deck()[this.index()]);

  next() {
    this.flipped.set(false);
    this.index.update((i) => (i + 1) % this.deck().length);
  }
  prev() {
    this.flipped.set(false);
    this.index.update((i) => (i - 1 + this.deck().length) % this.deck().length);
  }
  flip() {
    this.flipped.update((f) => !f);
  }
  markKnown() {
    this.progress.markKnown(this.current().id);
    this.next();
  }
  markUnknown() {
    this.progress.markUnknown(this.current().id);
    this.next();
  }
}
