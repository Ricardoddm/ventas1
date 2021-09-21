import { Component, HostBinding, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Sale} from 'src/app/models/sales';
import{ SalesService }from '../services/sales.service';
import{Router, ActivatedRoute}from '@angular/router';
=======
import { ContactsService } from '../services/contacts.service';

>>>>>>> 28bc0c277fc0c63d66bc08e4d44b0243c6c27967
@Component({
  selector: 'app-register-sale',
  templateUrl: './register-sale.component.html',
  styleUrls: ['./register-sale.component.css']
})
export class RegisterSaleComponent implements OnInit {
  @HostBinding('class') classes='row';

<<<<<<< HEAD
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
    if (params.id_contacto){
      this.contactosService.getContacto(params.id_contacto).subscribe(
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
    this.contactosService.saveContacto(this.contacto).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/sales']);
        },
        err=>console.log(err)
      )
=======
  @HostBinding('class') classes = 'row';

  contacts: any = [];
  selected: string = '';

  constructor(private salesService: ContactsService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.salesService.getContacts()
    .subscribe(
      res => {
        this.contacts = res;
        console.log(res);
      },
      err => console.error(err)
    );
>>>>>>> 28bc0c277fc0c63d66bc08e4d44b0243c6c27967
  }

  update(){
    this.contactosService.updateContacto(this.contacto.id_contacto,this.contacto).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/sales'])
        }, 
        err=>console.log(err)
        
      )
  }
}
