import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProcessingLogsService } from '@/core/services/processing-logs.service';
import * as moment from 'moment';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { MessageDialogComponent } from '@/shared/components/message-dialog/message-dialog.component';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-processing-logs',
  templateUrl: './processing-logs.component.html',
  styleUrls: ['./processing-logs.component.scss']
})
export class ProcessingLogsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder, 
    private search: ProcessingLogsService,
    private dialog: MatDialog
  ) { }

  loading : boolean = false;
  
  ocrFormIsValid: boolean;
  documentFormIsValid: boolean;
  fsFormIsValid: boolean;
  dateFormIsValid: boolean;

  firstDate;
  secondDate;

  searchType: string;

  dateRangeInvalid: boolean = false;

  searchTypeForm: FormGroup;
  ocrReturnIdForm: FormGroup;
  documentIdForm: FormGroup;
  fsIdForm: FormGroup;
  dateRangeForm: FormGroup;

  emptyArray = [];

  logData = new MatTableDataSource([]);

  displayedColumns: string[] = ['id', 'service_id', 'loglevel_id', 'fs_id', 'document_id', 'ocrreturn_id', 'entry'];

  ngOnInit() {
    this.searchTypeForm = this.formBuilder.group({
      searchType: ['']
    });

    this.ocrReturnIdForm = this.formBuilder.group({
      ocrReturnId: ['', Validators.required]
    });

    this.documentIdForm = this.formBuilder.group({
      documentId: ['', Validators.required]
    });

    this.fsIdForm = this.formBuilder.group({
      fsId: ['', Validators.required]
    });

    this.dateRangeForm = this.formBuilder.group({
      firstDate: ['', Validators.required],
      secondDate: ['', Validators.required]
    });

    this.searchTypeForm.get('searchType').valueChanges.subscribe(value => { 
      // show correct form in html
      this.searchType = value; 
      // reset forms when user clicks away
      this.ocrReturnIdForm.reset();
      this.documentIdForm.reset();
      this.fsIdForm.reset();
      this.dateRangeForm.reset();
    });

    this.ocrReturnIdForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.ocrFormIsValid = true
      } else {
        this.ocrFormIsValid = false;
      }
    });

    this.documentIdForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.documentFormIsValid = true
      } else {
        this.documentFormIsValid = false;
      }
    });

    this.fsIdForm.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.fsFormIsValid = true
      } else {
        this.fsFormIsValid = false;
      }
    });

    this.dateRangeForm.statusChanges.subscribe((status) => {
      this.firstDate = this.dateRangeForm.value.firstDate;
      this.secondDate = this.dateRangeForm.value.secondDate;
      if (status === 'VALID' && moment(this.firstDate).isBefore(this.secondDate)) {
        this.dateFormIsValid = true;
        this.dateRangeInvalid = false;
      } else if (status === 'VALID' && moment(this.firstDate).isSame(this.secondDate)) {
        this.dateFormIsValid = true;
        this.dateRangeInvalid = false;
      } else if (moment(this.secondDate).isBefore(this.firstDate)) {
        this.dateRangeInvalid = true;
        this.dateFormIsValid = false;
      } else {
        this.dateFormIsValid = false;
        this.dateRangeInvalid = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.logData.paginator = this.paginator;
  }

  submitOcrReturn() {
    const data = {
      'ocrreturn_id': this.ocrReturnIdForm.value.ocrReturnId
    }
    this.search.getLogsByOcr(data).subscribe(
      res => {
        this.setResult(res);
      },
      err => console.log(err)
    );
  }

  submitDocument() {
    const data = {
      'document_id': this.documentIdForm.value.documentId
    }
    this.search.getLogsByDocument(data).subscribe(
      res => {
        this.setResult(res);
      },
      err => console.log(err)
    );
  }

  submitFs() {
    const data = {
      'fs_id': this.fsIdForm.value.fsId
    }
    this.search.getLogsByFs(data).subscribe(
      res => {
        this.setResult(res);
      },
      err => console.log(err)
    );
  }

  submitDate() {
    const data = {
      'firstDate': moment(this.dateRangeForm.value.firstDate).format('MM/DD/YYYY'),
      'secondDate': moment(this.dateRangeForm.value.secondDate).format('MM/DD/YYYY')
    }
    this.search.getLogsByDateRange(data).subscribe(
      res => {
        this.setResult(res);
      },
      err => console.log(err)
    );
  }

  setResult(data) {
    console.log(data);
    if (data === null || data.length < 1)  {
      this.openDialog();
    } else if (data.length >= 1) {
      let response;
      response = data;
      let resultData = response;
      this.logData = resultData;

      // not sure if needed 
      // this.emptyArray = data;
      // this.logData = this.emptyArray;
      // this.emptyArray = [];

    }
    // not sure if needed 
    // else {
      // this.emptyArray.push(data);
      // this.logData = this.emptyArray;
      // this.emptyArray = [];
    //}
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(MessageDialogComponent, dialogConfig);
  }
}