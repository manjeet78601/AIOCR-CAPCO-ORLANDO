import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevSearchComponent } from './pages/dev-search/dev-search.component';

const routes: Routes = [
  {
    path: '',
    component: DevSearchComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevSearchRoutingModule { }