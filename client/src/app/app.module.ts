import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import{SalesService} from './services/sales.service'
import{RegisterSaleComponent}from './register-sale/register-sale.component'

@NgModule({

  // El bloque de declarations es solo para declarar los componentes propios
  declarations: [
    AppComponent,
    NavigationComponent,
    SaleListComponent,
    RegisterSaleComponent
  ],

  // El bloque de imports es solo para modulos nativos del nucleo de AngularJS
  imports: [
    //FormModule necesario para usar ngModels
    FormsModule,
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