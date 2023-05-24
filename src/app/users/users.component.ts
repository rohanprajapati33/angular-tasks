import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  data! : string;
  name! : string;
  price! :number;
  product : Product = new Product();
  constructor(){

  }
  handleData(e:any){
    this.data= e.target.value;
  }
  updateProduct(){
    this.product = new Product();
    this.product.name = this.name;
    this.product.price = this.price;
  }
}
