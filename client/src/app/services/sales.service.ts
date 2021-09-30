import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from '../models/sales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SalesService {

  API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getSales(){
    return this.http.get(`${this.API}/sales`)
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
}
