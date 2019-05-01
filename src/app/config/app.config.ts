//import { OpaqueToken } from "@angular/core";

//export let APP_CONFIG = new OpaqueToken("app.config");

import {StringConstants} from "../constants/string-constants";
import {UrlNameConstants} from "../constants/url-name-constants";
export interface IAppConfig {
    apiEndpoint: string;
    sidebarItems: any;
}

export const AppConfig: IAppConfig = {    
    apiEndpoint: "http://localhost:3000/api/",

    sidebarItems:[
        { path: '/'+UrlNameConstants.DASHBOARD, title: StringConstants.DASHBOARD,  icon: 'dashboard', class: '' },
        { path: '/'+UrlNameConstants.USERS, title: StringConstants.USERS,  icon:'person', class: '' },
        { path: '/'+UrlNameConstants.RESOURCES, title: StringConstants.RESOURCES,  icon:'content_paste', class: '' },
        { path: '/'+UrlNameConstants.HOSTS, title: StringConstants.HOSTS,  icon:'library_books', class: '' },
        { path: '/'+UrlNameConstants.DATABASES, title: StringConstants.DATABASES,  icon:'bubble_chart', class: '' },
        { path: '/'+UrlNameConstants.TABLES, title: StringConstants.TABLES,  icon:'library_books', class: '' },
        { path: '/'+UrlNameConstants.NOTIFICATIONS, title: StringConstants.NOTIFICATIONS,  icon:'notifications', class: '' }
        
    ]

    
};