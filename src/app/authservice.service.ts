import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  user=[{username:'nikita',password:"nikita"},{username:'Dhanu',password:"Dhanu"}]

  constructor() { }
  checkUser(username:string,password:string)
  {
    console.log("from service");
    const loginuser=this.user.find(data=>{
      console.log("from service"+data.username);
      if(data.username==username && data.password==password)
      console.log("from service"+data);
      
     

    })
    return username;

  }
}
