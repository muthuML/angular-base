import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout.component';


const routes: Routes = [
	{
		path: '',
		component: HomeLayoutComponent,
		children: [
			{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./modules/landing-page/landing-page.module').then((m) => m.LandingPageModule),
      },
      {
				path: 'users',
				loadChildren: () =>
					import('./modules/users/users.module').then((m) => m.UsersModule),
			}
		],
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
