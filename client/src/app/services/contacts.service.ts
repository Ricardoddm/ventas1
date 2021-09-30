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

  getContact(id:string){
    return this.http.get(`${this.API}/contacts/${id}`)
  }

  saveContact(contact:Contact){
    return this.http.post(`${this.API}/contacts`, contact)
  }

  updateContact(id: string | number, contact:Contact){
    return this.http.put(`${this.API}/contacts/${id}`, contact)
  }

  deleteContact(id:string){
    return this.http.delete(`${this.API}/contacts/${id}`)
  }
  
  getConsortiums(){
    return this.http.get(`${this.API}/sales/consortium`)
  }
}
