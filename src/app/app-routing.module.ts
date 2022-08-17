import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/category/:id', component: MoviesComponent },
  { path: 'movies/movie-create', component: MovieCreateComponent },
  { path: 'movies/template-form', component: TemplateFormComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
