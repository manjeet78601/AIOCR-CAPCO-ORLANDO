import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/shared/modules/shared.module';
import { TrustDocumentsRoutingModule } from './trust-documents-routing.module';

import { TrustDocumentsComponent } from './pages/trust-documents/trust-documents.component';
import { TrustDocumentsListingComponent } from './pages/trust-documents/trust-documents-listing.component';
import { TrustDocumentsDisplayComponent } from './pages/trust-documents/trust-documents-display.component';
 import {PdfViewerModule} from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    TrustDocumentsComponent,
    TrustDocumentsListingComponent,
    TrustDocumentsDisplayComponent],
  imports: [
    CommonModule,
    //MaterialModule,
    //ReactiveFormsModule,
    TrustDocumentsRoutingModule,
    SharedModule,
    PdfViewerModule
  ],
})
export class TrustDocumentsModule { }
