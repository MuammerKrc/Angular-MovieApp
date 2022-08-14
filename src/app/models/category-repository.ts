import { CateogryModel } from "./category-model";

export class CategoryRepository{
  private categories:CateogryModel[];

  constructor(){
    this.categories =[
      {id:1,name:"Macera"},
      {id:2,name:"Romanik"},
      {id:3,name:"Aksiyon"},
      {id:4,name:"Komedi"},
    ]
  }


  getCategories():CateogryModel[]{
    return this.categories;
  }
}

