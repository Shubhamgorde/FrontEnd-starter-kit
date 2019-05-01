import { Component, OnInit, Inject } from '@angular/core';
import * as $ from "jquery";
import { IAppConfig, AppConfig } from '../../config/app.config';
//declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor( @Inject(AppConfig) private config: IAppConfig) { 
    const ROUTES: RouteInfo[] = config.sidebarItems;
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnInit() {
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
