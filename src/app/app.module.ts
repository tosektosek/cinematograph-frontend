import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MovieService} from './movie/movie.service';
import { MovieComponent } from './movie/movie/movie.component';
import {RouterModule} from '@angular/router';
import {movieRoutes} from './movie/routes';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(movieRoutes, { useHash: true})
  ],
  providers: [MovieService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
