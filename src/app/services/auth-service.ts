import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthResponse } from "../models/auth-model";
import { UserModel } from "../models/user-model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  api_key: string = "AIzaSyAAGYPpGjmDLKye8f5GM78P8CiMlRlDubU";

  constructor(private http: HttpClient) {
  }

  userObser = new BehaviorSubject<UserModel>(null);

  signUp(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(response => {
      this.createUserModel(response);
    }));
  }
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        this.createUserModel(response);
      })
    );
  }

  createUserModel(response: AuthResponse) {
    var expirationDate = new Date(new Date().getTime() + (Number(response.expiresIn) * 1000));
    var newuser = new UserModel(response.email, expirationDate, response.idToken, response.localId, response.refreshToken);
    this.userObser.next(newuser);
    localStorage.setItem("user", JSON.stringify(newuser));
  }
  autoLogin(){
    const user =JSON.parse(localStorage.getItem("user"))
    if(!user)
    {
      return;
    }
    var loadedUser=new UserModel(user.email,user.tokenExpirationDate,user.idToken,user.localId,user.refreshToken);

    if(loadedUser.token)
    {
      this.userObser.next(loadedUser);
    }
  }

  logout() {
    this.userObser.next(null);
    localStorage.removeItem("user");
  }

}
