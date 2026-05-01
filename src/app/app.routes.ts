import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Nihongo · Accueil',
  },
  {
    path: 'theme/:id',
    loadComponent: () =>
      import('./pages/theme-detail/theme-detail.component').then((m) => m.ThemeDetailComponent),
    title: 'Thème',
  },
  {
    path: 'flashcards/:theme',
    loadComponent: () =>
      import('./pages/flashcards/flashcards.component').then((m) => m.FlashcardsComponent),
    title: 'Flashcards',
  },
  {
    path: 'quiz/:theme',
    loadComponent: () => import('./pages/quiz/quiz.component').then((m) => m.QuizComponent),
    title: 'Quiz',
  },
  {
    path: 'memory/:theme',
    loadComponent: () =>
      import('./pages/memory/memory.component').then((m) => m.MemoryComponent),
    title: 'Memory',
  },
  {
    path: 'progress',
    loadComponent: () =>
      import('./pages/progress/progress.component').then((m) => m.ProgressComponent),
    title: 'Progression',
  },
  { path: '**', redirectTo: '' },
];
