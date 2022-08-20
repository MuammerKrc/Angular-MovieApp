import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
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
    }).pipe(
      catchError(this.handleError));

  }
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError));
  }

  private  handleError(err: HttpErrorResponse) {
    let message = "hata oluştu.";
    if(navigator.onLine)
      return throwError("İnternet bağlantısı bulunamadı");
    if (err.error.error) {
      switch (err.error.error.message) {
        case "EMAIL_EXISTS":
          message = "Bu mail adresine bağlı hesap bulunmaktadır.";
          break;
        case "EMAIL_NOT_FOUND":
          message = "Mail adresi bulunamadı";
          break;
        case "INVALID_PASSWORD":
          message = "hatalı password";
          break;
      }
    }
    return throwError(message);
  }
}
