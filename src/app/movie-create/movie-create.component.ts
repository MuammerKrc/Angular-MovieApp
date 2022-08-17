import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CateogryModel } from '../models/category-model';
import { MovieModel } from '../models/movie-model';
import { CategoryService } from '../services/category-service';
import { MovieService } from '../services/movie-service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService,MovieService]
})
export class MovieCreateComponent implements OnInit {
  categories: CateogryModel[] = [];
  constructor(private categoryService: CategoryService,private movieService:MovieService,private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
  createMovie(title: any, desc: any, img: any, category: any) {
    console.log(title.value, desc.value, img.value, category.value);
    var newMovie: MovieModel = {
      id: "",
      description: desc.value,
      imageUrl: img.value,
      isPopular: false,
      title: title.value,
      categoryId:"",
    };
    this.movieService.createMOvie(newMovie).subscribe(i=>{
      this.router.navigate(["/movies"])
    });
  }
}
