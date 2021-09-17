import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleListComponent } from './sale-list/sale-list.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';
import { SalesService } from './services/sales.service';

const routes: Routes = [
  {
    path: 'sales',
    component:  SaleListComponent
  },
  {
    path: 'register-sale',
    component: RegisterSaleComponent
  },
  {
    path: 'sale/edit/:id',
    component: RegisterSaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
