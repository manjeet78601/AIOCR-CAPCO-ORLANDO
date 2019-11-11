import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'userlist',
    pathMatch: 'full'
  },
  {
    path: 'logs',
    loadChildren: '@/modules/processing-logs/processing-logs.module#ProcessingLogsModule'
  },
  {
    path: 'users',
    loadChildren: '@/modules/user-list/user-list.module#UserListModule'
  },
  {
    path: 'images',
    loadChildren: '@/modules/dev-search/dev-search.module#DevSearchModule'
  }
];
