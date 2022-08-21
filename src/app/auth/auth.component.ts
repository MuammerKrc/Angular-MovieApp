import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthResponse } from '../models/auth-model';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoading: boolean = false;
  isLoginModel: boolean = true;
  isGettingError:boolean=false;
  errorMsg:string="";
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthService,private router:Router) { }


  ngOnInit(): void {
  }
  loginUser() {
    this.isLoading = true;
    this.isGettingError=false;
    let authsResponse: Observable<AuthResponse>;
    var email = this.loginForm.get('email').value;
    var password = this.loginForm.get('password').value;
    if (!this.isLoginModel) {
      authsResponse = this.authService.signUp(email, password);
    } else {
      authsResponse = this.authService.login(email, password);
    }
    authsResponse.subscribe(data => {
      this.isLoading = false;
      this.router.navigateByUrl('/movies');
    }, err => {
      debugger;
      this.isLoading = false;
      this.isGettingError=true;
      this.errorMsg=err;
    });
  }
  toggle() {
    this.isLoginModel = !this.isLoginModel;
  }
  write() {
    console.log(this.loginForm);
  }
}
