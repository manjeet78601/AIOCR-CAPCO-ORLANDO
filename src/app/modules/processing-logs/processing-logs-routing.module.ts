import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessingLogsComponent } from './pages/processing-logs/processing-logs.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessingLogsComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessingLogsRoutingModule { }