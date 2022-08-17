import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { CateogryModel } from '../models/category-model';
import { MovieModel } from '../models/movie-model';
import { CategoryService } from '../services/category-service';
import { MovieService } from '../services/movie-service';  

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
  providers: [CategoryService, MovieService]
})
export class TemplateFormComponent implements OnInit {
  categories: CateogryModel[] = [];
  movieModel:any={};
  constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
  createMovie(form:NgForm) {
    this.movieService.createMOvie(this.movieModel).subscribe(i=> {
      this.router.navigate(["/movies"]);
    })
  }
  log(c:NgModel)
  {
    console.log(c)
  }


}
