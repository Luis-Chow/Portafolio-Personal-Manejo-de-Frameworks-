import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Auth } from './pages/auth/auth';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Auth },
  { path: 'proyectos', component: Projects },
  { path: 'proyectos/:id', component: ProjectDetail },
  { path: '**', redirectTo: '' }
];