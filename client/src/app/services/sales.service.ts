import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from '../models/sales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SalesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getContactos(){
    return this.http.get(`${this.API_URI}/sales`);
  }
  getContacto(id_contacto:number|string){
    return this.http.get(`${this.API_URI}/sales/${id_contacto}`)
  }
  deleteContacto(id_contacto:number|string){
    return this.http.delete(`${this.API_URI}/sales/${id_contacto}`)
  }
  saveContacto(contacto:Sale){
    return this.http.post(`${this.API_URI}/sales`, contacto)
  }
  updateContacto(id_contacto:number|any,update:Sale): Observable<Sale>{
    return this.http.put(`${this.API_URI}/sales/${id_contacto}`,update)
  }
}