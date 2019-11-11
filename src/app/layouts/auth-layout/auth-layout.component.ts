import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  version : String = environment.version
  mode : Boolean = environment.production
  host : String = environment.url_correction_service
  build : String;

  constructor() {
  }

  ngOnInit() {
    if (this.mode) {
      this.build = 'prod build'
    }
  }

}
