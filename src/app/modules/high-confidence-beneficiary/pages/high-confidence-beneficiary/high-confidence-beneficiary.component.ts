import { Component } from '@angular/core';
import { ResultsCheckingService } from '@/core/services/results-checking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-high-confidence-beneficiary',
  templateUrl: './high-confidence-beneficiary.component.html',
  styleUrls: ['./high-confidence-beneficiary.component.scss']
})
export class HighConfidenceBeneficiaryComponent {

  highIsSelected:boolean = false;
  private _routerSubscription: any;

  constructor(
    private resultsCheckingService: ResultsCheckingService,
    private _route: ActivatedRoute
  ) {
    this.resultsCheckingService.isSelected$
      .subscribe( isSelected => this.highIsSelected = isSelected )

    this._routerSubscription = this._route.url.subscribe(url => {
      this.resultsCheckingService.reset();
    });
  }

}
