  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SaleListComponent } from './sale-list/sale-list.component';
import { RegisterSaleComponent } from './register-sale/register-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SaleListComponent,
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


