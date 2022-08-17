import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginModel: boolean = true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required,Validators.email]),
    password: new FormControl("", [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }
  loginUser() {
    console.log(this.loginForm.value);
  }
  toggle() {
    this.isLoginModel = !this.isLoginModel;
  }
  write() {
    console.log(this.loginForm);
  }
}
