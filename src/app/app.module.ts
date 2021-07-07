import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DoughnutGraphComponent } from './components/doughnut-graph/doughnut-graph.component';
import { InfinitySpinnerComponent } from './components/infinity-spinner/infinity-spinner.component';
import { LoddingSpinnersComponent } from './components/lodding-spinners/lodding-spinners.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DialogComponent,
    SidebarComponent,
    LoddingSpinnersComponent,
    InfinitySpinnerComponent,
    DoughnutGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
