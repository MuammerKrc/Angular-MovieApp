import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { MovieModel } from "../models/movie-model";

@Injectable()
export class MovieService {
  private url = "http://localhost:3000/movies";
  constructor(private http: HttpClient) {

  }
  getMovies(categoryId: any): Observable<MovieModel[]> {
    let newUrl: string = this.url;
    if (categoryId) {
      newUrl += "?categoryId=" + categoryId;
      console.log("categoryId girdi ", categoryId, newUrl);
    }
    return this.http.get<MovieModel[]>(newUrl).pipe(
      tap(data => console.log("tab ile araya girildi")),
      catchError(i => {
        throw ("Bir hata meydana geldi");
      })
    );
  }

  getMovie(movieId: any): Observable<MovieModel[]> {
    let newurl: string = this.url;
    if (newurl) {
      newurl += "?id=" + movieId;
    }
    return this.http.get<MovieModel[]>(newurl).pipe(
      tap(i => console.log("movie girdi", i)),
      catchError(i => {
        throw new Error("Bir Hata meydana geldi");
      }));
  }
}
