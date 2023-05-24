import { Component } from '@angular/core';

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Rohan';
  demo = 'Learn Angular';
  name = 'Rohan';
  disable = false;
  pageTitle:string="services in angular";
  users!:any[];

  title2 = 'if-else';
  show = 'not';

  title3 = 'multiple conditions';

  title4 = 'Switch case';
  color = 'black';

  displayVal = '';
  count = 0;

  // users = ['rohan', 'kavya', 'gautam', 'keval'];
  // userdetails = [
  //   { name: 'rohan', email: 'rohan@testScheduler.com', phone: 795585 },
  //   { name: 'kavya', email: 'kavya@testScheduler.com', phone: 795586 },
  //   { name: 'gautam', email: 'gautam@testScheduler.com', phone: 795587 },
  //   { name: 'keval', email: 'keval@testScheduler.com', phone: 795588 },
  //   { name: 'manhar', email: 'manhar@testScheduler.com', phone: 795589 },
  // ];

  colors = Colors;

  constructor() {}

  getData(val: string) {
    console.warn(val);
  }

  getValue(val: string) {
    console.log(val);
    this.displayVal = val;
  }

  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }

  
  add(){
    this.title = "this is video of local storage";
  }

  session:any;

  saveData(){
    let data = {id : 1 , name : "xyz"}
    localStorage.setItem('session',JSON.stringify(data));
  }
  loadData(){
    let data:any = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }
}
