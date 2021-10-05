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


  getConsortiums(){
    return this.http.get(`${this.API}/sales/consortium`)
  }

  getEnterprises(id: string ){
    return this.http.get(`${this.API}/sales/enterprise/${id}`)
  }

  getProducts(id: string){
    return this.http.get(`${this.API}/sales/product/${id}`)
  }

  getProductDetail(id: string){
    return this.http.get(`${this.API}/products/${id}`)
  }
}
<<<<<<< HEAD
=======

>>>>>>> 7a0d9998bd7e695df7199c13fd9ce35de75a92b2
