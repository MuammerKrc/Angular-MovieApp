import { MovieModel } from "./movie-model";

export class MovieRepository {
  private movies: MovieModel[];
  constructor() {
    this.movies = [
      { id: 1, title: "film 1", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quam incidun", imageUrl: "1.jpeg",isPopular:false },
      { id: 2, title: "film 2",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quam incidun", imageUrl: "2.jpeg" ,isPopular:true},
      { id: 3, title: "film 3",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quam incidun", imageUrl: "3.jpeg" ,isPopular:true},
      { id: 4, title: "film 4",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quam incidun", imageUrl: "4.jpeg" ,isPopular:true},
      { id: 5, title: "film 5",  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quam incidun", imageUrl: "5.jpeg" ,isPopular:false},
    ]
  }

  getMovies(): MovieModel[] {
    return this.movies;
  }

  // "strickNullCheck":false tsconfig üzerinden ayarlandığında undefined dönmesi durumda hata alınmaz
  getMovieById(id: number):MovieModel | undefined {
    return this.movies.find(i=>i.id==id);
  }

  getPopularMovie():MovieModel[]{
    return this.movies.filter(i=>i.isPopular);
  }
}
