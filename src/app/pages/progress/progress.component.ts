import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { VocabService } from '../../services/vocab.service';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-progress',
  imports: [RouterLink],
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
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

  protected readonly recentQuizzes = computed(() => this.progress.state().quizScores.slice(0, 10));

  protected readonly memoryRecords = computed(() => {
    const map = this.progress.state().memoryBest;
    return Object.entries(map).map(([themeKey, rec]) => ({
      themeKey,
      themeName: themeKey === 'all' ? 'Tous les thèmes' : (this.vocab.getTheme(themeKey as never)?.name ?? themeKey),
      moves: rec!.moves,
      seconds: rec!.seconds,
    }));
  });

  themeName(id: string): string {
    if (id === 'all') return 'Tous les thèmes';
    return this.vocab.getTheme(id as never)?.name ?? id;
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
