import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contacts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get(`${this.API}/contacts`)
  }
}
