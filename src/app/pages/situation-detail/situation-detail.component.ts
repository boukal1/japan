import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';
import { SituationId } from '../../models/word.model';

@Component({
  selector: 'app-situation-detail',
  imports: [RouterLink],
  templateUrl: './situation-detail.component.html',
})
export class SituationDetailComponent {
  private readonly vocab = inject(VocabService);
  protected readonly progress = inject(ProgressService);

  readonly id = input.required<string>();

  protected readonly situation = computed(() =>
    this.vocab.getSituation(this.id() as SituationId),
  );
  protected readonly words = computed(() =>
    this.vocab.getWordsBySituation(this.id() as SituationId),
  );
  protected readonly dialogs = computed(() =>
    this.vocab.getDialogsBySituation(this.id() as SituationId),
  );
  protected readonly knownCount = computed(() => {
    const k = this.progress.state().knownItemIds;
    const ws = this.words().filter((w) => (k[w.id] ?? 0) > 0).length;
    const ds = this.dialogs().filter((d) => (k[d.id] ?? 0) > 0).length;
    return ws + ds;
  });
  protected readonly totalCount = computed(() => this.words().length + this.dialogs().length);
}
