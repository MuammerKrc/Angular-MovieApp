import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { CateogryModel } from '../models/category-model';
import { CategoryRepository } from '../models/category-repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: CateogryModel[];
  categoriRepository: CategoryRepository;
  selectedCategory: CateogryModel = null;
  displayAll: boolean = true;

  constructor() {
    this.categoriRepository = new CategoryRepository();
    this.categories = this.categoriRepository.getCategories();
  }

  ngOnInit(): void {
  }
  clickLinkEvent(item?: CateogryModel) {
    console.log("girdi");
    if (item) {
      this.selectedCategory = item;
      this.displayAll = false;
      console.log("boş");

    }
    else {
      this.displayAll = true;
      console.log("dolu");

    }
  }
}
