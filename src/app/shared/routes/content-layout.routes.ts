import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'tasks',
    loadChildren: '@/modules/home/home.module#HomeModule'
  },
  {
    path: 'tasks/correction',
    loadChildren: '@/modules/correction/correction.module#CorrectionModule'
  },
  {
    path: 'tasks/highbeneficiary',
    loadChildren: '@/modules/high-confidence-beneficiary/high-confidence-beneficiary.module#HighConfidenceBeneficiaryModule'
  },
  {
    path: 'tasks/lowbeneficiary',
    loadChildren: '@/modules/low-confidence-beneficiary/low-confidence-beneficiary.module#LowConfidenceBeneficiaryModule'
  },
  {
    path: 'tasks/trustdocuments',
    loadChildren: '@/modules/trust-documents/trust-documents.module#TrustDocumentsModule'
  },
  {
    path: 'tasks/devsearch',
    loadChildren: '@/modules/dev-search/dev-search.module#DevSearchModule'
  }
];
