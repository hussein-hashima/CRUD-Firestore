import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DBService } from '../services/db.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productId: any;
  product: Product = {};
  constructor(private aR: ActivatedRoute, private router: Router, private db: DBService) {
    this.productId = this.aR.snapshot.params["id"];
    this.db.getProduct(this.productId)
      .subscribe((data) => { this.product = data; })
  }
  onSubmit(form: NgForm) {
    this.db.updateProduct(this.productId, form.value)
      .then((data) => {
        console.log("product updated!");
        this.router.navigate(['/'])
      })
      .catch((err) => {
        console.log(err);
      })
  }
  onCancel() {
    this.router.navigate(['/'])
  }
}
