import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.scss']
})
export class MessageDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<MessageDialogComponent>) { }

  ngOnInit(){
  }

  close() {
    this.dialogRef.close();

  }

  onSubmit() {

  }

}
