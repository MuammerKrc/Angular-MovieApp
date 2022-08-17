import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthResponse } from "../models/auth-model";




@Injectable({
  providedIn: "root"
})
export class AuthService {
  api_key: string = "AIzaSyAAGYPpGjmDLKye8f5GM78P8CiMlRlDubU";

  constructor(private http: HttpClient) {
  }

  signUp(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}
