import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleListComponent } from './sale-list/sale-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';
import { RegisterContactComponent } from './register-contact/register-contact.component';

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
    path: 'sale/edit/:id_contacto',
    component: RegisterSaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
