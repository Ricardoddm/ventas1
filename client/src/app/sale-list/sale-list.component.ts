import { Component, HostBinding, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';
import {RegisterSaleComponent} from '../register-sale/register-sale.component'


@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  cont: any = [];

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.getcontactos();
  }
  getcontactos(){
    this.salesService.getContactos()
    .subscribe(
      res=>{
        this.cont=res;
      },
      err=> console.error(err)
    );
  }
  delete(id_contacto: string){
    this.salesService.deleteContacto(id_contacto).subscribe(
      res=>{
        this.cont=res;
        this.getcontactos();
      },
      err=> console.error(err)
    );
  }
}


