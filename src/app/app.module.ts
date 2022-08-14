import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { DescriptionPipePipe } from './description-pipe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //component
    AppComponent,
    NavbarComponent,
    MovieComponent,
    MoviesComponent,
    MovieDetailComponent,
    FooterComponent,
    CategoryComponent,
    DescriptionPipePipe
  ],
  imports: [ //module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],//service
  bootstrap: [AppComponent]//startet component
})
export class AppModule { }
