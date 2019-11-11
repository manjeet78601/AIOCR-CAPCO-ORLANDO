import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ResultsCheckingService } from '@/core/services/results-checking.service';
import { ResultId } from '@/shared/models/resultId';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-low-confidence-beneficiary-listing',
  templateUrl: './low-confidence-beneficiary-listing.component.html',
  styleUrls: ['./low-confidence-beneficiary-listing.component.scss']
})
export class LowConfidenceBeneficiaryListingComponent implements OnInit, AfterViewInit {

  isLoading : boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageIndex = 0;
  pageLength = 10;


  constructor(
    private resultsCheckingService: ResultsCheckingService,
  ) { }

  dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['index', 'fs_id', 'filename', 'button'];

  ngOnInit() {
    this.resultsCheckingService.getLowResults().subscribe((res : []) => {
      this.isLoading = false;
      let result;
      result = []
      res.forEach( (item, index) => {
        if(item['has_user_update'] === false) result.push(item);
      });
      console.log(result);
      this.dataSource.data = result;
      },
      (error) => console.log(error)
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator);
  }

  selectId(resultId: ResultId) {

    this.resultsCheckingService.getHighLowResultData(resultId, "low");

  }

}
