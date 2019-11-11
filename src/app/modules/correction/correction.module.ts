import { NgModule } from '@angular/core';
import { SharedModule } from '@/shared/modules/shared.module';
import { CorrectionComponent } from './pages/correction/correction.component';

import { CorrectionRoutingModule } from './correction-routing.module';

@NgModule({
  declarations: [CorrectionComponent],
  imports: [
    CorrectionRoutingModule,
    SharedModule
  ],
})
export class CorrectionModule { }
