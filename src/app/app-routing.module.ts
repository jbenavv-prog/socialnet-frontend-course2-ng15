import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialLayoutComponent } from './layouts/social-layout/social-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SocialLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('./modules/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
