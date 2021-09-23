import { Component, OnInit, HostBinding } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../models/contacts';
import{ Router, ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @HostBinding('class') classes='row';

  contactEdited: Contact={
    id_contacto: 0,
    nombre_contacto :'',
    telefono: '',
    correo: '',
    RFC: ''
  };

  edit: boolean = false;

  constructor(private contactsService: ContactsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.contactsService.getContact(params.id)
    .subscribe(
      res=>{
        this.contactEdited = res;
        console.log(this.contactEdited);
      },
      err=>console.error(err)
    )
  }

  editContact(){
    this.contactsService.updateContact(this.contactEdited.id_contacto!, this.contactEdited)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/contacts']);
        },
        err=>console.log(err)
      )
  }




}
