import { Component, HostBinding, OnInit } from '@angular/core';
import {Sale} from 'src/app/models/sales';
import{ SalesService }from '../services/sales.service';

@Component({
  selector: 'app-register-sale',
  templateUrl: './register-sale.component.html',
  styleUrls: ['./register-sale.component.css']
})
export class RegisterSaleComponent implements OnInit {
  @HostBinding('class') classes='row';

  contacto: Sale={
    id_contacto:0,
    nombre_contacto :' ',
    telefono: ' ',
    correo: ' ',
    RFC: ' '
  };
  constructor(private contactosService: SalesService ) { }

  ngOnInit(): void {
  }
  SaveNewContacto(){
    console.log(this.contacto);
  }

}
