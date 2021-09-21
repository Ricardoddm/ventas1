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

  edit: any = [];

  contactEdited: Contact={
    id_contacto: 0,
    nombre_contacto :'',
    telefono: '',
    correo: '',
    RFC: ''
  }

  constructor(private contactsService: ContactsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.contactsService.getContact(params.id)
    .subscribe(
      res=>{
        this.edit = res;
        console.log(this.edit);
      },
      err=>console.error(err)
    )
  }

  editContact(){
    const params = this.activedRoute.snapshot.params;
    this.contactsService.updateContact(params.id, this.contactEdited)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/contacts']);
        },
        err=>console.log(err)
      )
  }




}
