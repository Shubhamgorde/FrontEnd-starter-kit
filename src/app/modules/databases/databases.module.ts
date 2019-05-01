import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabasesRoutingModule } from './databases-routing.module';
import { DatabaseListComponent } from './database-list/database-list.component';

@NgModule({
  declarations: [ DatabaseListComponent],
  imports: [
    CommonModule,
    DatabasesRoutingModule
  ]
})
export class DatabasesModule { }
