import { Component, OnInit, HostBinding } from '@angular/core';
import { Vendor } from '../models/vendors';
import { VendorsService } from '../services/vendors.service';
import{ Router, ActivatedRoute }from '@angular/router';


@Component({
  selector: 'app-register-vendor',
  templateUrl: './register-vendor.component.html',
  styleUrls: ['./register-vendor.component.css']
})
// export class RegisterVendorComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class RegisterVendorComponent implements OnInit {
  @HostBinding('class') classes='row';

  vendedor: Vendor={
    id_vendedor: 0,
    nombre_vendedor:'',
    telefono: '',
    correo: '',
    RFC: ''
  };  
  edit: boolean=false;

  constructor(private vendorsService: VendorsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveVendor(){
    this.vendorsService.saveVendor(this.vendedor)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/vendors']);
        },
        err=>console.log(err)
      )
  }
  
}

