import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Auth } from './pages/auth/auth';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Auth },
  { path: 'inicio', component: Home, canActivate: [authGuard] }, 
  { path: 'proyectos', component: Projects, canActivate: [authGuard] },
  { path: 'proyectos/:id', component: ProjectDetail, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];