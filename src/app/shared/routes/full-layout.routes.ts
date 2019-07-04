import { Routes, RouterModule } from '@angular/router';
import { ReservacionComponent } from '../../reservacion/reservacion.component';
import { PlanningComponent } from '../../planning/planning.component';

// Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  { path: 'reservacion', component: ReservacionComponent },
  { path: 'planning', component: PlanningComponent },
  {
    path: 'full-layout',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  }
];
