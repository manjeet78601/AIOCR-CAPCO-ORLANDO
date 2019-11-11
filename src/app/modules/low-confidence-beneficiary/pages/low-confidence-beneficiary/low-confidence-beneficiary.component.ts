import { Component } from '@angular/core';
import { ResultsCheckingService } from '@/core/services/results-checking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-low-confidence-beneficiary',
  templateUrl: './low-confidence-beneficiary.component.html',
  styleUrls: ['./low-confidence-beneficiary.component.scss']
})
export class LowConfidenceBeneficiaryComponent {

  lowIsSelected : boolean = false;
  private _routerSubscription: any;

  constructor(
    private resultsCheckingService: ResultsCheckingService,
    private _route: ActivatedRoute
  ) { 
    this.resultsCheckingService.isSelected$
      .subscribe( isSelected => this.lowIsSelected = isSelected )

    this._routerSubscription = this._route.url.subscribe(url => {
        this.resultsCheckingService.reset();
    });
  }

}