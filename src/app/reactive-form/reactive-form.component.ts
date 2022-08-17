import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CateogryModel } from '../models/category-model';
import { MovieModel } from '../models/movie-model';
import { CategoryService } from '../services/category-service';
import { MovieService } from '../services/movie-service';
import { ImageValidator } from './custom-validator/image-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [CategoryService, MovieService]
})
export class ReactiveFormComponent implements OnInit {
  categories: CateogryModel[] = [];
  movieForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    description: new FormControl(null, [Validators.required]),
    imageUrl: new FormControl("", [Validators.required,ImageValidator.isValidExtension]),
    categoryId: new FormControl(null, [Validators.required])
  });
  constructor(private categoryService: CategoryService, private movieService: MovieService, private router: Router) { }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie() {
    var newMovie = (this.movieForm.value);
    console.log(this.movieForm);
    // this.movieService.createMOvie(newMovie).subscribe(i => {
    //   this.router.navigateByUrl('/movies');
    // });
  }
  clear() {
    this.movieForm.patchValue({
      title: "",
      description: ""
    });
  }
}
