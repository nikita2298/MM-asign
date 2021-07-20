import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    isLoggedIn=false;
    data:any;

  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,private authService:AuthserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.data=this.authService.checkUser(this.f.username.value, this.f.password.value);
    console.log(this.data);
    
    localStorage.setItem("currentUser", this.data);

    console.log("in submit",this.f.username.value, this.f.password.value);
    //this.isLoggedIn=true;
   // this.loading=true;
   this.router.navigate(['/loginhome']); 
  // this.reloadPage();

    

   
}
reloadPage() {

  window.location.reload();
}

}
