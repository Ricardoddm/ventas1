import { Component, OnInit, HostBinding } from '@angular/core';
import { Contact } from '../models/contacts';
import { ContactsService } from '../services/contacts.service';
import{ Router, ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-register-contact',
  templateUrl: './register-contact.component.html', 
  styleUrls: ['./register-contact.component.css']
})
export class RegisterContactComponent implements OnInit {
  @HostBinding('class') classes='row';

  contacto: Contact={
    id_contacto: 0,
    nombre_contacto :'',
    telefono: '',
    correo: '',
    RFC: ''
  };  
  edit: boolean=false;

  constructor(private contactsService: ContactsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveContact(){
    this.contactsService.saveContact(this.contacto)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/contacts']);
        },
        err=>console.log(err)
      )
  }
  
}
