import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Nihongo · Accueil',
  },
  {
    path: 'situation/:id',
    loadComponent: () =>
      import('./pages/situation-detail/situation-detail.component').then(
        (m) => m.SituationDetailComponent,
      ),
    title: 'Situation',
  },
  {
    path: 'flashcards/:situation',
    loadComponent: () =>
      import('./pages/flashcards/flashcards.component').then((m) => m.FlashcardsComponent),
    title: 'Flashcards',
  },
  {
    path: 'quiz/:situation',
    loadComponent: () => import('./pages/quiz/quiz.component').then((m) => m.QuizComponent),
    title: 'Quiz',
  },
  {
    path: 'memory/:situation',
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
