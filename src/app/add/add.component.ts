import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DBService } from '../services/db.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private router:Router ,private db:DBService){

  }
  onSubmit(form : NgForm){
    this.db.addProduct(form.value)
    .then((data)=>{
      console.log('product added:',data.id); 
      this.router.navigate(['/']);
    })
    .catch((err)=>{console.log(err);});
  }
  onCancel(){
    this.router.navigate(['/']);
  }
}
