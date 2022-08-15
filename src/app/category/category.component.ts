import { Component, OnInit } from '@angular/core';
import { CateogryModel } from '../models/category-model';
import { CategoryService } from '../services/category-service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  categories: CateogryModel[];
  selectedCategory: CateogryModel = null;
  displayAll: boolean = true;

  constructor(private categoryService:CategoryService) {
  }

  ngOnInit(): void {
    var $categoryobser=this.categoryService.getCategories();
    $categoryobser.subscribe(i=>{
      this.categories=i;
    })
  }
  clickLinkEvent(item?: CateogryModel) {
    if (item) {
      this.selectedCategory = item;
      this.displayAll = false;
    }
    else {
      this.displayAll = true;
    }
  }
}
