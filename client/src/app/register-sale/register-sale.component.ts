import { Component, HostBinding, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-register-sale',
  templateUrl: './register-sale.component.html',
  styleUrls: ['./register-sale.component.css']
})
export class RegisterSaleComponent implements OnInit {

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
  }

}