import { Component, HostBinding, OnInit } from '@angular/core';
import {Sale} from 'src/app/models/sales'

@Component({
  selector: 'app-register-sale',
  templateUrl: './register-sale.component.html',
  styleUrls: ['./register-sale.component.css']
})
export class RegisterSaleComponent implements OnInit {
  @HostBinding('class') classes='row';

  contacto: Sale={
    id_contacto:0,
    nombre_contacto :'',
    telefono: '',
    correo: '',
    rfc: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
