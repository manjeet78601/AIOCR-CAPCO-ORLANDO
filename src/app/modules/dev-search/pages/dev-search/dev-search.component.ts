import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';

import { ResultsCheckingService } from '@/core/services/results-checking.service'
import { ResultId } from '@/shared/models/resultId'

import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dev-search',
  templateUrl: './dev-search.component.html',
  styleUrls: ['./dev-search.component.scss']
})
export class DevSearchComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  filename: string;
  fsId: string;
  urlPng: string;
  imgClicked: boolean = false;
  width = '900';

  dataSource = new MatTableDataSource([]);
  columnHeaders: string[] = ['index', 'fs_id', 'filename', 'button'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  isLoading : boolean = true;

  constructor(private resultCheckingService : ResultsCheckingService) {
    this._subscribeServices();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  private _subscribeServices() {
    this.subscriptions.push(
      this.resultCheckingService.getListPng()
      .subscribe( list => {
        this.isLoading = false;
        let result;
        result = list;
        this.dataSource.data = result;
      })
    )
  }

  selectId(resultId : ResultId) {
    this.imgClicked = false;
    this.fsId = resultId.fs_id;
    this.filename = resultId.filename;
    this.urlPng = this.resultCheckingService.getUrlPng(resultId);
    window.scroll(0,0);
  }

  imgZoom() {
    this.imgClicked = !this.imgClicked;
  }

}
