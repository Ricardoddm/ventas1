import { Component, OnInit, HostBinding } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  contacts: any = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactsService.getContacts()
    .subscribe(
      res => {
        this.contacts = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }
  deleteContact(id_contacto: string){
    this.contactsService.deleteContact(id_contacto)
    .subscribe(
      res=>{
        this.contacts=res;
        this.getContacts();
      },
      err=> console.error(err)
    );
  }
}
