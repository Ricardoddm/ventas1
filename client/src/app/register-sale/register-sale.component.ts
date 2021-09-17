import { Component, HostBinding, OnInit } from '@angular/core';
import {Sale} from 'src/app/models/sales';
import{ SalesService }from '../services/sales.service';
import{Router, ActivatedRoute}from '@angular/router'
@Component({
  selector: 'app-register-sale',
  templateUrl: './register-sale.component.html',
  styleUrls: ['./register-sale.component.css']
})
export class RegisterSaleComponent implements OnInit {
  @HostBinding('class') classes='row';

  contacto: Sale={
    id_contacto: 0,
    nombre_contacto :'',
    telefono: '',
    correo: '',
    RFC: ''
  };
  edit: boolean=false;
  constructor(private contactosService: SalesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params=this.activedRoute.snapshot.params;
    if (params.id){
      this.contactosService.getContacto(params.id)
      .subscribe(
        res=>{
          console.log(res);
          this.contacto=res;
          this.edit=true;
        },
        err=>console.error(err)
      )
    }
  }
  save(){
    delete this.contacto.id_contacto;
    this.contactosService.saveContacto(this.contacto)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/sales'])
        },
        err=>console.log(err)
      )
  }
  /*update(){
    this.contactosService.updateContacto(this.contacto.id_contacto,this.contacto)
      .subscribe(
        res=>{
          this.router.navigate(['/sales'])
        },
        err=>console.log(err)
        
      )
  }*/
}