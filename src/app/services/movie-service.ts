import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { MovieModel } from "../models/movie-model";

@Injectable()
export class MovieService {
  private url = "http://localhost:3000/movies";
  private firebaseUrl = "https://movie-angular-5b8de-default-rtdb.europe-west1.firebasedatabase.app";
  constructor(private http: HttpClient) {

  }
  getMovies(categoryId: any): Observable<MovieModel[]> {
    let newUrl: string = this.firebaseUrl + "/movies.json";
    return this.http.get<MovieModel[]>(newUrl).pipe(
      map(data => {
        const newMovies: MovieModel[] = [];
        for (var key in data) {
          data[key].id = key;
          if (categoryId) {
            if (data[key].categoryId == categoryId as string) {
              newMovies.push(data[key]);
            }
          } else {
            newMovies.push(data[key]);
          }
        }
        return newMovies;
      }),
      tap(data => console.log("fetch data", data)),
      catchError(i => {
        throw ("Bir hata meydana geldi");
      })
    );
  }

  getMovie(movieId: any): Observable<MovieModel[]> {
    let newurl: string = this.firebaseUrl;
    if (newurl) {
      newurl += "/movies/" + movieId + ".json";
      console.log(newurl);
    }
    return this.http.get<MovieModel>(newurl).pipe(
      map(data => {
        const movieModelList: MovieModel[] = [];
        if (data) {
          console.log(data);
          movieModelList.push(data);
        }
        return movieModelList;
      }),
      tap(i => console.log("movie girdi", i)),
      catchError(i => {
        throw new Error("Bir Hata meydana geldi");
      }));
  }

  createMOvie(model: MovieModel): Observable<MovieModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': "application/json",
      }),
    };
    return this.http.post<MovieModel>(this.firebaseUrl + "/movies.json", model, httpOptions).pipe(
      tap(data => console.log("post movie ", model)),
      catchError(i => {
        throw new Error("Movie post error");
      })
    )
  }
}
