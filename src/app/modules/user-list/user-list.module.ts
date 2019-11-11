import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user-list/user-list.component';
import { SharedModule } from '@/shared/modules/shared.module';
import { UserListRoutingModule } from './user-list-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule,
    MatPaginatorModule
  ],
})

export class UserListModule { }
