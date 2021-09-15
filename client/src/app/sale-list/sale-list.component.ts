import { Component, HostBinding, OnInit } from '@angular/core';

//Se importa el servicio de ventas y el modelo de ventas
import { SalesService } from '../services/sales.service';
import { Sale } from '../models/sales';


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
    this.salesService.getContactos().subscribe(
      res=>{
        this.cont=res;
      },
      err=> console.error(err)
    );
  }

}
