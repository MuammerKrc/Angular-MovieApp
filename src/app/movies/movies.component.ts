import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie-model';
import { MovieRepository } from '../models/movie-repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  filterText: string = "";
  title: string = "Bulunan Filmler"
  movies: MovieModel[];
  filteredMovie: MovieModel[];
  populerMovies: MovieModel[];
  event: any;
  movieRepository: MovieRepository;
  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.populerMovies = this.movieRepository.getPopularMovie();
    this.filteredMovie = this.movies;
  }

  ngOnInit(): void {
  }
  searchChanged() {
    this.filteredMovie = this.filterText ? this.movies.filter(i => i.description.indexOf(this.filterText) !== -1 || i.title.indexOf(this.filterText) !== -1) : this.movies;
  }
  addListEvent(event: any, id: Number) {
    this.event = event;
    console.log(event.target);
    if (event.target.classList.contains('btn-outline-primary')) {
      event.target.classList.remove("btn-outline-primary");
      event.target.classList.add("btn-outline-warning");
      event.target.innerHTML = "Listeden Çıkar";
    } else {
      event.target.classList.add("btn-outline-primary");
      event.target.classList.remove("btn-outline-warning");
      event.target.innerHTML = "Listeye Ekle";
    }
  }
}
