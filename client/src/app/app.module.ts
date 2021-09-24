import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SaleListComponent } from './sale-list/sale-list.component';

import{SalesService} from './services/sales.service'
import{RegisterSaleComponent}from './register-sale/register-sale.component';
import { RegisterContactComponent } from './register-contact/register-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component'
@NgModule({

  // El bloque de declarations es solo para declarar los componentes propios
  declarations: [
    AppComponent,
    NavigationComponent,
    SaleListComponent,
    RegisterSaleComponent,
    RegisterContactComponent,
    ContactListComponent,
    EditContactComponent
  ],

  // El bloque de imports es solo para modulos nativos del nucleo de AngularJS
  imports: [
    BrowserModule,
    AppRoutingModule,
    // El modulo de Http se debe declarar como import
    HttpClientModule,
    FormsModule
  ],
  
  providers: [
    SalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
