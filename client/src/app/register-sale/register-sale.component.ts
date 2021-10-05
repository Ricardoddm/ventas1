<<<<<<< HEAD
import { Component, HostBinding, OnInit } from '@angular/core';
=======
import { Component, ElementRef, HostBinding, OnInit, ViewChild, AfterViewInit} from '@angular/core';
>>>>>>> 7a0d9998bd7e695df7199c13fd9ce35de75a92b2
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-register-sale',
  templateUrl: './register-sale.component.html',
  styleUrls: ['./register-sale.component.css']
})

export class RegisterSaleComponent implements AfterViewInit {

  @HostBinding('class') classes = 'row';
  @ViewChild("idCantidad") cantidad!: ElementRef;
  @ViewChild("idSubtotal") subtotal!: ElementRef;
  @ViewChild("idTotal") total!: ElementRef;
  
  sales: any = [];
  consortiums: any = [];
  enterprises: any = [];
  products: any = [];
  productDetail: any = [];
export class RegisterSaleComponent implements OnInit {
  @HostBinding('class') classes='row';

<<<<<<< HEAD
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
      res => {
        this.sales = res;
=======


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

  getEnterprises(idConsotium: string){
    console.log(idConsotium);
    this.salesService.getEnterprises(idConsotium)
    .subscribe(
      res => {
        this.enterprises = res;
>>>>>>> 7a0d9998bd7e695df7199c13fd9ce35de75a92b2
        console.log(res);
      },
      err => console.error(err)
    )
  }

  getProducts(idEnterprise: string){
    console.log(idEnterprise);
    this.salesService.getProducts(idEnterprise)
    .subscribe(
      res => {
        this.products = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

  getProductDetail(idProduct: string){
    console.log(idProduct);
    this.salesService.getProductDetail(idProduct)
    .subscribe(
      res=> {
        this.productDetail = res;
        this.unitPrice = this.productDetail.precio_unitario;
        if(this.productDetail.servicio == 1){
          this.cantidad.nativeElement.value = 1;
          this.cantidad.nativeElement.disabled = true;
          this.subtotal.nativeElement.value = this.unitPrice;        
        }
        else{
          this.cantidad.nativeElement.disabled = false;  
          this.cantidad.nativeElement.value = ''
        }   
      }
    )
  }

  calSubtotal(amount: number){
    console.log(amount);
    this.subtotalPrice = this.unitPrice * amount;
    this.subtotal.nativeElement.value = this.subtotalPrice;
  }

  calTotal(iva: number){
    let ivaC: any = iva / 100;
    let tax: number = this.subtotalPrice * ivaC;
    let total: number = this.subtotalPrice + tax; 
    this.total.nativeElement.value = total;
  }
<<<<<<< HEAD
/*
  update(){
    this.contactosService.updateContacto(this.contacto.id_contacto,this.contacto).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/sales'])
        }, 
        err=>console.log(err)
        
      )
  }*/
}
=======
}
>>>>>>> 7a0d9998bd7e695df7199c13fd9ce35de75a92b2
