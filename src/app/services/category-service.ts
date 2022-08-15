import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CateogryModel } from "../models/category-model";

@Injectable()
export class CategoryService{
  private url ="http://localhost:3000/categories";

  constructor(private http:HttpClient){}

  getCategories():Observable<CateogryModel[]>{
    return this.http.get<CateogryModel[]>(this.url);
  }
}
