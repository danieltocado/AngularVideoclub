import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmInfoComponent } from './components/film-info/film-info.component';
import { IndexComponent } from './components/index/index.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RentComponent } from './components/rent/rent.component';
import { PopularmoviesComponent } from './components/popularmovies/popularmovies.component';
import { LastmoviesComponent } from './components/lastmovies/lastmovies.component';

const routes: Routes = [
  {path:"", component: IndexComponent},
  {path:"home", component: FilmListComponent},
  {path:"info", component: FilmInfoComponent},
  {path:"search", component: BusquedaComponent},
  {path:"login", component: LoginComponent},
  {path:"signup", component: SignupComponent},
  {path: "rent", component: RentComponent},
  {path: "popular", component: PopularmoviesComponent},
  {path: "lastmovies", component: LastmoviesComponent},
  {path: "list", component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
