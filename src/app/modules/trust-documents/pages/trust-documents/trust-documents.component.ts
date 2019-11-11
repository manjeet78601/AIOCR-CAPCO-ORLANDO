import { Component } from '@angular/core';
import { ResultsCheckingService } from '@/core/services/results-checking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trust-documents',
  templateUrl: './trust-documents.component.html',
  styleUrls: ['./trust-documents.component.scss']
})
export class TrustDocumentsComponent {

  trustIsSelected : boolean = false;
  private _routerSubscription: any;

  constructor(
    private resultsCheckingService: ResultsCheckingService,
    private _route: ActivatedRoute
  ) {
    this.resultsCheckingService.isSelected$
      .subscribe( isSelected => this.trustIsSelected = isSelected )

    this._routerSubscription = this._route.url.subscribe(url => {
      this.resultsCheckingService.reset();
    });
  }



}
