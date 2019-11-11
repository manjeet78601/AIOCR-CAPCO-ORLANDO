import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessingLogsComponent } from './pages/processing-logs/processing-logs.component';
import { SharedModule } from '@/shared/modules/shared.module';
import { ProcessingLogsRoutingModule } from './processing-logs-routing.module';

@NgModule({
  declarations: [ProcessingLogsComponent],
  imports: [
    CommonModule,
    //MaterialModule,
    //ReactiveFormsModule,
    ProcessingLogsRoutingModule,
    SharedModule
  ],
})
export class ProcessingLogsModule { }
