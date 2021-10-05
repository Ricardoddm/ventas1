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
  enterprises: any = [];
  products: any = [];

  selectedConsort: string = '';
  selectedEnter: string = '';
  newValue: string = '';

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.getSales();
    this.getConsortiums();
  }

  getSales() {
    this.salesService.getSales()
    .subscribe(
      (      res: any) => {
        this.sales = res;
        console.log(res);
      },
      (      err: any) => console.error(err)
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

  getEnterprises(newValue: string){
    console.log(newValue);
    this.salesService.getEnterprises(newValue)
    .subscribe(
      res => {
        this.enterprises = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

  getProducts(newValue: string){
    console.log(newValue);
    this.salesService.getProducts(newValue)
    .subscribe(
      res => {
        this.products = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
