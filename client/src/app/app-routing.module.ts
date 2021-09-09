import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleListComponent } from './sale-list/sale-list.component';

const routes: Routes = [
  {
    path: 'sales',
    component:  SaleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }   
