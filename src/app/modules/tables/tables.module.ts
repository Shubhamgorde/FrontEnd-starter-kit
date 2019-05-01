import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TableListComponent } from './table-list/table-list.component';

@NgModule({
  declarations: [TableListComponent],
  imports: [
    CommonModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
