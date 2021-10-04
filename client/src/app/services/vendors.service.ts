import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../models/vendors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VendorsService {

  API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getVendors(){
    return this.http.get(`${this.API}/vendors`)
  }

  getVendor(id:string){
    return this.http.get(`${this.API}/vendors/${id}`)
  }

  saveVendor(vendor:Vendor){
    return this.http.post(`${this.API}/vendors`, vendor)
  }

  updateVendor(id: string | number, vendor:Vendor){
    return this.http.put(`${this.API}/vendors/${id}`, vendor)
  }

  deleteVendor(id:string){
    return this.http.delete(`${this.API}/vendors/${id}`)
  }
}