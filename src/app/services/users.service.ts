import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(){
    return[
      {id:101,name:"rohan",city:"ahm"},
      {id:102,name:"rahul",city:"surat"},
      {id:103,name:"rohit",city:"goa"},
    ]
  }
}
