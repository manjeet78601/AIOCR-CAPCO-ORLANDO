import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@/shared/modules/shared.module';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from '@/layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from '@/layouts/content-layout/content-layout.component';
import { NavComponent } from '@/layouts/nav/nav.component';
import { FooterComponent } from '@/layouts/footer/footer.component';

import { JwtInterceptor } from '@/core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from '@/core/interceptors/error.interceptor';

import { MessageDialogComponent } from '@/shared/components/message-dialog/message-dialog.component';


import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { template } from '@angular/core/src/render3';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
// import {NgxSpinnerModule} from 'ngx-spinner';




@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    NavComponent,
    FooterComponent

    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    // NgxSpinnerModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
   NgIdleKeepaliveModule.forRoot()




  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MessageDialogComponent
  ]
})
export class AppModule { }
