import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/shared/modules/shared.module';
import { LowConfidenceBeneficiaryRoutingModule } from './low-confidence-beneficiary-routing.module';

import { LowConfidenceBeneficiaryComponent } from './pages/low-confidence-beneficiary/low-confidence-beneficiary.component';
import { LowConfidenceBeneficiaryListingComponent } from './pages/low-confidence-beneficiary/low-confidence-beneficiary-listing.component';
import { LowConfidenceBeneficiaryDisplayComponent } from './pages/low-confidence-beneficiary/low-confidence-beneficiary-display.component';

 import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    LowConfidenceBeneficiaryComponent,
    LowConfidenceBeneficiaryListingComponent,
    LowConfidenceBeneficiaryDisplayComponent],
  imports: [
    CommonModule,
    //MaterialModule,
    //ReactiveFormsModule,
    LowConfidenceBeneficiaryRoutingModule,
    SharedModule,
     PdfViewerModule
  ],
})
export class LowConfidenceBeneficiaryModule { }
