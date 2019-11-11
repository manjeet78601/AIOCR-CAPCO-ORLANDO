import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { CONTENT_ROUTES } from '@/shared/routes/content-layout.routes';
import { ADMIN_ROUTES } from '@/shared/routes/admin-layout.routes';

import { AuthGuard } from '@/core/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: 'content',
    component: ContentLayoutComponent,
    children: CONTENT_ROUTES,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: ContentLayoutComponent,
    children: ADMIN_ROUTES,
    canActivate: [AuthGuard]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
