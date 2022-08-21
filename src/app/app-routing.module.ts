import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesHomeComponent } from './movies/movies-home/movies-home.component';
import { MoviesComponent } from './movies/movies.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },

  {
    path: 'movies', component: MoviesHomeComponent,canActivate:[AuthGuard], children: [
      { path: '', component: MoviesComponent },
      { path: 'category/:id', component: MoviesComponent },
      { path: 'movie-create', component: MovieCreateComponent },
      { path: 'template-form', component: TemplateFormComponent },
      { path: 'reactive-form', component: ReactiveFormComponent },
      { path: ':id', component: MovieDetailComponent },
    ]
  },





  { path: 'auth', component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
