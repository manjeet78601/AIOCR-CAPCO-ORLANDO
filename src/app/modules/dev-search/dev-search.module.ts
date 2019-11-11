import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevSearchComponent } from './pages/dev-search/dev-search.component';
import { SharedModule } from '@/shared/modules/shared.module';
import { DevSearchRoutingModule } from './dev-search-routing.module';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [DevSearchComponent],
  imports: [
    CommonModule,
    DevSearchRoutingModule,
    SharedModule,
    MatPaginatorModule
  ],
})
export class DevSearchModule { }