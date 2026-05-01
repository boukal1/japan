import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';
import { ThemeId } from '../../models/word.model';

@Component({
  selector: 'app-theme-detail',
  imports: [RouterLink],
  templateUrl: './theme-detail.component.html',
})
export class ThemeDetailComponent {
  private readonly vocab = inject(VocabService);
  protected readonly progress = inject(ProgressService);

  readonly id = input.required<string>();

  protected readonly theme = computed(() => this.vocab.getTheme(this.id() as ThemeId));
  protected readonly words = computed(() => this.vocab.getWordsByTheme(this.id() as ThemeId));
  protected readonly known = computed(() => {
    const k = this.progress.state().knownWordIds;
    return this.words().filter((w) => (k[w.id] ?? 0) > 0).length;
  });
}
