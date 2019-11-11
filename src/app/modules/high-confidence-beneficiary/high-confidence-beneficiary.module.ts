import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/shared/modules/shared.module';
import { HighConfidenceBeneficiaryRoutingModule } from './high-confidence-beneficiary-routing.module';

import { HighConfidenceBeneficiaryComponent } from './pages/high-confidence-beneficiary/high-confidence-beneficiary.component';
import { HighConfidenceBeneficiaryListingComponent } from './pages/high-confidence-beneficiary/high-confidence-beneficiary-listing.component';
import { HighConfidenceBeneficiaryDisplayComponent } from './pages/high-confidence-beneficiary/high-confidence-beneficiary-display.component';

 import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    HighConfidenceBeneficiaryComponent,
    HighConfidenceBeneficiaryListingComponent,
    HighConfidenceBeneficiaryDisplayComponent],
  imports: [
    CommonModule,
    //MaterialModule,
    //ReactiveFormsModule,
    HighConfidenceBeneficiaryRoutingModule,
    SharedModule,
     PdfViewerModule
  ],
})
export class HighConfidenceBeneficiaryModule { }
