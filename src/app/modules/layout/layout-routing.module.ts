import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UrlNameConstants} from '../../constants/url-name-constants';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {UserListComponent} from "../users/user-list/user-list.component";
import {TableListComponent} from "../tables/table-list/table-list.component";
import {ResourceListComponent} from "../resources/resource-list/resource-list.component";
import {HostListComponent} from "../hosts/host-list/host-list.component";
import {DatabaseListComponent} from "../databases/database-list/database-list.component";
import {NotificationListComponent} from "../notifications/notification-list/notification-list.component";
export const LayoutRoutes: Routes = [
  { path: UrlNameConstants.DASHBOARD,     component: DashboardComponent },
  { path: UrlNameConstants.USERS,         component: UserListComponent },
  { path: UrlNameConstants.TABLES,        component: TableListComponent },
  { path: UrlNameConstants.RESOURCES,     component: ResourceListComponent },
  { path: UrlNameConstants.HOSTS,         component: HostListComponent },
  { path: UrlNameConstants.DATABASES,     component: DatabaseListComponent },
  { path: UrlNameConstants.NOTIFICATIONS, component: NotificationListComponent }
];

