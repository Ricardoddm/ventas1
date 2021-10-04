import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleListComponent } from './sale-list/sale-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';
import { RegisterContactComponent } from './register-contact/register-contact.component';
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';

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
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: EditContactComponent
  },
  {
    path: 'register-contact',
    component: RegisterContactComponent
  },
  {
    path: 'vendors',
    component: VendorListComponent
  },
  {
    path: 'vendors/:id',
    component: EditVendorComponent
  },
  {
    path: 'register-vendor',
    component: RegisterVendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }