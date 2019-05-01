import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutRoutes } from './layout-routing.module';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {UserListComponent} from "../users/user-list/user-list.component";
import {TableListComponent} from "../tables/table-list/table-list.component";
import {ResourceListComponent} from "../resources/resource-list/resource-list.component";
import {HostListComponent} from "../hosts/host-list/host-list.component";
import {DatabaseListComponent} from "../databases/database-list/database-list.component";
import {NotificationListComponent} from "../notifications/notification-list/notification-list.component";
@NgModule({
  declarations: [
    DashboardComponent,
    UserListComponent,
    TableListComponent,
    ResourceListComponent,
    HostListComponent,
    DatabaseListComponent,
    NotificationListComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LayoutRoutes)
  ]
})
export class LayoutModule { }
