import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SocialLayoutComponent } from './layouts/social-layout/social-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SocialLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'perfil', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
