import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {

  constructor() { }
 name:string;
  ngOnInit(): void {
   this.name=localStorage.getItem('currentUser');
   console.log(this.name);
   
    
  }

}
