import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxMasonryModule } from 'ngx-masonry';
import { library } from '@fortawesome/fontawesome-svg-core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { ControlMessagesComponent } from '@/shared/components/control-messages/control-messages.component';
import { SpinnerComponent } from '@/shared/components/spinner/spinner.component';
import { LoadingComponent } from '@/shared/components/loading/loading.component';
import { MessageDialogComponent } from '@/shared/components/message-dialog/message-dialog.component';

import {
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAsterisk,
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,


        FontAwesomeModule,
        MaterialModule
    ],
    declarations: [
      ControlMessagesComponent,
      SpinnerComponent,
      LoadingComponent,
      MessageDialogComponent
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,

      MaterialModule,


      FontAwesomeModule,
      NgxMasonryModule,
      NgxJsonViewerModule,

      ControlMessagesComponent,
      SpinnerComponent,
      LoadingComponent,
      MessageDialogComponent
    ]
})
export class SharedModule { }
