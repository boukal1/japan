import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';
import { SituationId } from '../../models/word.model';

@Component({
  selector: 'app-progress',
  imports: [RouterLink],
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  private readonly vocab = inject(VocabService);
  protected readonly progress = inject(ProgressService);

  protected readonly situations = this.vocab.situations;

  protected readonly totalItems = computed(() =>
    this.situations.reduce(
      (n, s) => n + this.vocab.getItemsBySituation(s.id).length,
      0,
    ),
  );

  protected readonly stats = computed(() => {
    const known = this.progress.state().knownItemIds;
    return this.situations.map((s) => {
      const items = this.vocab.getItemsBySituation(s.id);
      const learned = items.filter((it) => (known[it.id] ?? 0) > 0).length;
      return {
        situation: s,
        total: items.length,
        learned,
        percent: Math.round((learned / Math.max(1, items.length)) * 100),
      };
    });
  });

  protected readonly recentQuizzes = computed(() => this.progress.state().quizScores.slice(0, 10));

  protected readonly memoryRecords = computed(() => {
    const map = this.progress.state().memoryBest;
    return Object.entries(map).map(([key, rec]) => ({
      key,
      name: this.vocab.getSituation(key as SituationId)?.name ?? key,
      moves: rec!.moves,
      seconds: rec!.seconds,
    }));
  });

  situationName(id: SituationId): string {
    return this.vocab.getSituation(id)?.name ?? id;
  }

  formatTime(s: number): string {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' });
  }

  reset() {
    if (confirm('Réinitialiser toute la progression ? Cette action est irréversible.')) {
      this.progress.reset();
    }
  }
}
