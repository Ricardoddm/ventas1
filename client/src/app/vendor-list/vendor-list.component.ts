import { Component, OnInit, HostBinding } from '@angular/core';
import { VendorsService } from '../services/vendors.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';

  vendors: any = [];

  constructor(private vendorsService: VendorsService) { }

  ngOnInit() {
    this.getVendors();
  }

  getVendors() {
    this.vendorsService.getVendors()
    .subscribe(
      res => {
        this.vendors = res;
        console.log(res);
      },
      err => console.error(err)
    );
  }
  deleteVendor(id_vendedor: string){
    this.vendorsService.deleteVendor(id_vendedor)
    .subscribe(
      res=>{
        this.vendors=res;
        this.getVendors();
      },
      err=> console.error(err)
    );
  }

}
