import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighConfidenceBeneficiaryComponent } from './pages/high-confidence-beneficiary/high-confidence-beneficiary.component';

const routes: Routes = [
  {
    path: '',
    component: HighConfidenceBeneficiaryComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighConfidenceBeneficiaryRoutingModule { }