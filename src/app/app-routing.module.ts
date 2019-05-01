import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'',
        loadChildren:'./modules/layout/layout.module#LayoutModule'
      }
    ]
  }
      // ,
      // {
      //   path:'/',
      //   component:LayoutComponent,
      //   children:[
      //   {
      //     path:'',
      //     loadChildren:'modules/layout/layout.module#LayoutModule'
      //   }
      // ]
      // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
