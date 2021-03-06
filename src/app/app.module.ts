import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmInfoComponent } from './components/film-info/film-info.component';
import { IndexComponent } from './components/index/index.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component'
import { NgbdModalContent, NgbdModalComponent } from './components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentComponent } from './components/rent/rent.component';
import { LastmoviesComponent } from './components/lastmovies/lastmovies.component';
import { PopularmoviesComponent } from './components/popularmovies/popularmovies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmListComponent,
    FilmInfoComponent,
    IndexComponent,
    BusquedaComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NgbdModalContent,
    NgbdModalComponent,
    MovieModalComponent,
    RentComponent,
    LastmoviesComponent,
    PopularmoviesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [NgbdModalComponent],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalContent]

})
export class AppModule { }
