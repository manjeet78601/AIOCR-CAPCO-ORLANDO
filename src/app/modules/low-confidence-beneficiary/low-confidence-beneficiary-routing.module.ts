import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LowConfidenceBeneficiaryComponent } from './pages/low-confidence-beneficiary/low-confidence-beneficiary.component';

const routes: Routes = [
  {
    path: '',
    component: LowConfidenceBeneficiaryComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LowConfidenceBeneficiaryRoutingModule { }