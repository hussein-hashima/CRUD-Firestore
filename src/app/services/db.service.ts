import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  constructor(private firestore:Firestore) { }
  addProduct(product:Product){
    let productRef=collection(this.firestore,"products");
    return addDoc(productRef,product);
  }
  getProducts(){
    let productRef=collection(this.firestore,"products");
    return collectionData(productRef,{idField:'id'}) as Observable<Product[]>;
  }
  deleteProduct(id:string){
    let docRef=doc(this.firestore,"products/"+id);
    return deleteDoc(docRef)
  }
  getProduct(id:string){
    let docRef=doc(this.firestore,"products/"+id);
    return docData(docRef,{idField:"id"}) as Observable<Product>
  }
  updateProduct(id:string,product:Product){
    let docRef=doc(this.firestore,"products/"+id);
    return setDoc(docRef,product);
  }
}
