import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../models/movie-model';
import { AlertifyService } from '../services/alertify-service';
import { MovieService } from '../services/movie-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]//serviceleri böyle inject edersek global değil sınıf içerisinde istediği sürece implement edileceği bilinecek
})
export class MoviesComponent implements OnInit {
  filterText: string = "";
  errorResponse: string;
  gettingError: boolean = false;
  title: string = "Bulunan Filmler"
  movies: MovieModel[] = [];
  filteredMovie: MovieModel[];
  populerMovies: MovieModel[];
  event: any;
  constructor(private alertify: AlertifyService, private movieService: MovieService) {
    // this.populerMovies = this.movieRepository.getPopularMovie();

  }

  ngOnInit(): void {
    this.gettingError = false;
    var $movieobser = this.movieService;
    $movieobser.getMovies().subscribe(i => {
      this.movies = i;
      this.filteredMovie = i;
      this.populerMovies = i.filter(i => i.isPopular);
    }, (i) => {
      this.errorResponse = i;
      this.gettingError = true;
    });
  }

  searchChanged() {
    this.filteredMovie = this.filterText ? this.movies.filter(i => i.description.indexOf(this.filterText) !== -1 || i.title.indexOf(this.filterText) !== -1) : this.movies;
  }
  addListEvent(event: any, item: MovieModel) {
    this.event = event;
    console.log(event.target);
    if (event.target.classList.contains('btn-outline-primary')) {
      event.target.classList.remove("btn-outline-primary");
      event.target.classList.add("btn-outline-warning");
      event.target.innerHTML = "Listeden Çıkar";
      this.alertify.success(item.title + " listeye eklendi");
    } else {
      event.target.classList.add("btn-outline-primary");
      event.target.classList.remove("btn-outline-warning");
      event.target.innerHTML = "Listeye Ekle";
      this.alertify.error(item.title + " listeden çıkarıldı");
    }
  }
}
