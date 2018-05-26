import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {MovieService} from './movie/movie.service';
import {RouterModule} from '@angular/router';
import {movieRoutes} from './movie/routes';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { NavComponent } from './shared/nav/nav.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import {sharedRoutes} from './shared/routes';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    NavComponent,
    MainPageComponent,
    MovieAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(sharedRoutes, {useHash: true}),
    RouterModule.forRoot(movieRoutes, { useHash: true}),
    NgbModule.forRoot()
  ],
  providers: [MovieService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
