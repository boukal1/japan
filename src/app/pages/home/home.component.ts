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

  protected readonly situations = this.vocab.situations;

  protected readonly stats = computed(() => {
    const known = this.progress.state().knownItemIds;
    return this.situations.map((s) => {
      const items = this.vocab.getItemsBySituation(s.id);
      const total = items.length;
      const learned = items.filter((it) => (known[it.id] ?? 0) > 0).length;
      return {
        situation: s,
        total,
        learned,
        percent: Math.round((learned / Math.max(1, total)) * 100),
        wordsCount: this.vocab.getWordsBySituation(s.id).length,
        phrasesCount: this.vocab.getPhrasesBySituation(s.id).length,
      };
    });
  });
}
