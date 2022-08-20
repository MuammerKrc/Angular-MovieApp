import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let message = "hata oluştu.";
    if (!navigator.onLine)
      return throwError("İnternet bağlantısı bulunamadı");
    if(err.status===401)
      return throwError("Giriş yapılmamıştır");
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
