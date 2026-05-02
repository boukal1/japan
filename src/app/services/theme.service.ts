import { Injectable, computed, effect, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'nihongo-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly mode = signal<ThemeMode>(this.load());

  /** Booléen "actuellement sombre", tient compte du mode système. */
  readonly isDark = computed(() => this.resolveDark(this.mode()));

  constructor() {
    // Applique le thème quand le mode change.
    effect(() => {
      const m = this.mode();
      this.persist(m);
      this.apply(m);
    });

    // Réagit au changement système si on est en mode 'system'.
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener?.('change', () => {
        if (this.mode() === 'system') this.apply('system');
      });
    }
  }

  set(mode: ThemeMode) {
    this.mode.set(mode);
  }

  /** Cycle clair → sombre → système → clair. */
  cycle() {
    const next: ThemeMode =
      this.mode() === 'light' ? 'dark' : this.mode() === 'dark' ? 'system' : 'light';
    this.mode.set(next);
  }

  private load(): ThemeMode {
    if (typeof localStorage === 'undefined') return 'system';
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' || v === 'system' ? v : 'system';
  }

  private persist(m: ThemeMode) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, m);
    }
  }

  private apply(m: ThemeMode) {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', this.resolveDark(m));
  }

  private resolveDark(m: ThemeMode): boolean {
    if (m === 'dark') return true;
    if (m === 'light') return false;
    return typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
  }
}
