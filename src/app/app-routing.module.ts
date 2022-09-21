import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
			{ path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
			}
				]
	}

];
