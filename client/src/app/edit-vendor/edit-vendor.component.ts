import { Component, OnInit, HostBinding } from '@angular/core';
import { VendorsService } from '../services/vendors.service';
import { Vendor } from '../models/vendors';
import{ Router, ActivatedRoute }from '@angular/router';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {
  @HostBinding('class') classes='row';

  vendorEdited: Vendor={
    id_vendedor: 0,
    nombre_vendedor :'',
    telefono: '',
    correo: '',
    RFC: ''
  };

  edit: boolean = false;

  constructor(private vendorsService: VendorsService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.vendorsService.getVendor(params.id)
    .subscribe(
      res=>{
        this.vendorEdited = res;
        console.log(this.vendorEdited);
      },
      err=>console.error(err)
    )
  }

  editVendor(){
    this.vendorsService.updateVendor(this.vendorEdited.id_vendedor!, this.vendorEdited)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/vendors']);
        },
        err=>console.log(err)
      )
  }




}
