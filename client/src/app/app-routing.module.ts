import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleListComponent } from './sale-list/sale-list.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';

const routes: Routes = [
  {
    path: 'sales',
    component:  SaleListComponent
  },
  {
    path: 'register-sale',
    component: RegisterSaleComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }   
