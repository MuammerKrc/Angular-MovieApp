import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'movies', component: MoviesComponent,canActivate:[AuthGuard] },
  { path: 'movies/category/:id', component: MoviesComponent,canActivate:[AuthGuard] },
  { path: 'movies/movie-create', component: MovieCreateComponent,canActivate:[AuthGuard] },
  { path: 'movies/template-form', component: TemplateFormComponent,canActivate:[AuthGuard] },
  { path: 'movies/reactive-form', component: ReactiveFormComponent,canActivate:[AuthGuard] },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
