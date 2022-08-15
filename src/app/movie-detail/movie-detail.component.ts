import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModel } from '../models/movie-model';
import { MovieService } from '../services/movie-service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  movie: MovieModel = {
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    isPopular: false
  }
  constructor(private movieService: MovieService, private activatedRouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(i => {
      var $movieObser = this.movieService.getMovie(i["id"]);
      $movieObser.subscribe(data => {
        this.movie = data[0];
        console.log("tek movie", this.movie);
        console.log(this.movie.title);
      });
    })
  }

  
}
