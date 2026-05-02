import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly theme = inject(ThemeService);

  protected modeIcon(): string {
    const m = this.theme.mode();
    if (m === 'light') return '☀️';
    if (m === 'dark') return '🌙';
    return '🖥️';
  }

  protected modeLabel(): string {
    const m = this.theme.mode();
    if (m === 'light') return 'Clair';
    if (m === 'dark') return 'Sombre';
    return 'Système';
  }
}
