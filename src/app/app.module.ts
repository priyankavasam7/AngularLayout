import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/admin/layout/layout.component';
import { DashboardComponent } from './components/admin/views/dashboard/dashboard.component';
import { TrainingRequestsComponent } from './components/admin/views/training-requests/training-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    TrainingRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
