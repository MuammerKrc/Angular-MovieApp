import { HttpClient } from "@angular/common/http";
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

  user = new Subject<UserModel>();


  signUp(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(this.createUserModel));
  }
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(this.createUserModel)
    );
  }
  createUserModel(response: AuthResponse) {
    var expirationDate = new Date(new Date().getTime() + (Number(response.expiresIn) * 1000));
    var newuser = new UserModel(response.email, expirationDate, response.idToken, response.localId, response.refreshToken);
    this.user.next(newuser);
  }

}
