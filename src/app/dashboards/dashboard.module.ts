import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard.routing';
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  imports: [FormsModule, CommonModule, NgbModule, ChartsModule, ChartistModule, NgApexchartsModule, RouterModule.forChild(DashboardRoutes), PerfectScrollbarModule],
  declarations: [
    Dashboard1Component,
  ]
})
export class DashboardModule { }
