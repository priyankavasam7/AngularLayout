import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/admin/layout/layout.component';
import { DashboardComponent } from './components/admin/views/dashboard/dashboard.component';
import { TrainingRequestsComponent } from './components/admin/views/training-requests/training-requests.component';

const routes: Routes = [
  {
    path: 'admin', // Base path for the admin section
    component: LayoutComponent, // Layout component contains the <router-outlet>
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Child route (dashboard)
      {path:'training-requests',component:TrainingRequestsComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
