import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { MovieModel } from "../models/movie-model";

@Injectable()
export class MovieService {
  private url = "http://localhost:3000/movies";
  constructor(private http: HttpClient) {

  }
  getMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(this.url).pipe(
      tap(data => console.log("tab ile araya girildi")),
      catchError(i => {
        throw("Bir hata meydana geldi");
      })
    );
  }
  private handleError(err: HttpErrorResponse) {


  }

}
