import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [ NgbModule, RouterModule.forChild(DashboardRoutes) ],
  declarations: [
    Dashboard1Component,
  ]
})
export class DashboardModule { }
