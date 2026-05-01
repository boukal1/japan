import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private readonly vocab = inject(VocabService);
  protected readonly progress = inject(ProgressService);

  protected readonly themes = this.vocab.themes;
  protected readonly totalWords = this.vocab.words.length;

  protected readonly themeStats = computed(() => {
    const known = this.progress.state().knownWordIds;
    return this.themes.map((t) => {
      const ids = this.vocab.getWordsByTheme(t.id).map((w) => w.id);
      const learned = ids.filter((id) => (known[id] ?? 0) > 0).length;
      return {
        theme: t,
        total: ids.length,
        learned,
        percent: Math.round((learned / ids.length) * 100),
      };
    });
  });
}
