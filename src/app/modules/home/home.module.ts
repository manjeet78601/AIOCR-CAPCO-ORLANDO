import { NgModule } from '@angular/core';
import { SharedModule } from '@/shared/modules/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { TaskComponent } from './pages/tasks/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
