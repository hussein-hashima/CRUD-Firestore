import { Component } from '@angular/core';
import { DBService } from './../services/db.service';
import { Product } from './../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  productsList:Product[]=[];
  constructor(private db:DBService,private router:Router){
    this.db.getProducts().subscribe((data)=>{
      console.log(data);
      this.productsList=data;
    })
  }
  deleteProduct(productId:any){
    this.db.deleteProduct(productId)
    .then(()=>{console.log("deleted!");})
    .catch((err)=>{console.log(err);})
  }
  updateProduct(itemId:any){
    this.router.navigate(['/update',itemId]);
  }
}
