import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user-model';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  userModel: UserModel;
  constructor(private authService: AuthService,private router:Router) {
    this.authService.userObser.subscribe(userResponse => {
      if (userResponse) {
        this.isAuthenticated = true;
        this.userModel = userResponse;
      }
      else {
        this.isAuthenticated = false;
      }
    });
  }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
