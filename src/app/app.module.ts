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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth-service';
import { ErrorInterceptorInterceptor } from './error-interceptor.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { MoviesHomeComponent } from './movies/movies-home/movies-home.component';
@NgModule({
  declarations: [ //component
    AppComponent,
    NavbarComponent,
    MovieComponent,
    MoviesComponent,
    MovieDetailComponent,
    FooterComponent,
    CategoryComponent,
    DescriptionPipePipe,
    MovieCreateComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AuthComponent,
    MoviesHomeComponent
  ],
  imports: [ //module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AlertifyService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true },
    AuthGuard
  ],//service
  bootstrap: [AppComponent]//startet component
})
export class AppModule { }
