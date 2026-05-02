import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';
import { SituationId } from '../../models/word.model';

@Component({
  selector: 'app-flashcards',
  imports: [RouterLink],
  templateUrl: './flashcards.component.html',
})
export class FlashcardsComponent {
  private readonly vocab = inject(VocabService);
  protected readonly progress = inject(ProgressService);

  readonly situation = input.required<string>();

  protected readonly situationInfo = computed(() =>
    this.vocab.getSituation(this.situation() as SituationId),
  );

  protected readonly deck = computed(() =>
    this.vocab.shuffle(this.vocab.getItemsBySituation(this.situation() as SituationId)),
  );

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
