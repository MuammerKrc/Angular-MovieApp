import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  user: Subject<UserModel>;
  constructor(private authService: AuthService) {
    this.user = this.authService.userObser;
    this.user.subscribe(userResponse => {
      debugger;
      if (userResponse) {
        debugger;
        this.isAuthenticated = true;
        this.userModel = userResponse;
      }
      else {
        debugger;
        this.isAuthenticated = false;
      }
    });
  }

  ngOnInit(): void {
  }
}
