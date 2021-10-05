import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from '../models/sales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SalesService {

  API_URI = 'http://localhost:3000/api';
  getSales: any;

  constructor(private http: HttpClient) { }

  getContactos(){
    return this.http.get(`${this.API_URI}/sales`);
  }


  getConsortiums(){
    return this.http.get(`${this.API_URI}/sales/consortium`)
  }

  getEnterprises(id: string ){
    return this.http.get(`${this.API_URI}/sales/enterprise/${id}`)
  }

  getProducts(id: string){
    return this.http.get(`${this.API_URI}/sales/product/${id}`)
  }

  getProductDetail(id: string){
    return this.http.get(`${this.API_URI}/products/${id}`)
  }
}
