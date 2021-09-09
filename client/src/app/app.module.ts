import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { NavegationComponent } from './navigation/navegation.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleListComponent,
    NavegationComponent,
    RegisterSaleComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }