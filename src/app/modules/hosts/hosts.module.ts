import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostsRoutingModule } from './hosts-routing.module';
import { HostListComponent } from './host-list/host-list.component';

@NgModule({
  declarations: [HostListComponent],
  imports: [
    CommonModule,
    HostsRoutingModule
  ]
})
export class HostsModule { }
