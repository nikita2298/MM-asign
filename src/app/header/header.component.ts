import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
  navbarOpen= false;
  isLoggedIn=false;

  constructor( private router: Router) { }
  ngOnChanges(){
    
  }

  ngOnInit(): void {
    if (localStorage.getItem("currentUser") != null)
    {
       this.isLoggedIn=true;
    }
    //window.location.reload();
    //this.router.navigate(['/loginhome']); 

  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
