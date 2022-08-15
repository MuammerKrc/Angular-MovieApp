import { Component, OnInit } from '@angular/core';
import { CateogryModel } from '../models/category-model';
import { CategoryService } from '../services/category-service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService]
})
export class MovieCreateComponent implements OnInit {
  categories: CateogryModel[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

}
