import { Component, HostBinding, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-register-sale',
  templateUrl: './register-sale.component.html',
  styleUrls: ['./register-sale.component.css']
})
export class RegisterSaleComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  sales: any = [];
  consortiums: any = [];
  selected: string = '';

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.getSales();
    this.getConsortiums();
  }

  getSales() {
    this.salesService.getSales()
    .subscribe(
      res => {
        this.sales = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  getConsortiums() {
    this.salesService.getConsortiums()
    .subscribe(
      res => {
        this.consortiums = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
