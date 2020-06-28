import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmInfoComponent } from './components/film-info/film-info.component';
import { IndexComponent } from './components/index/index.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", component: IndexComponent},
  {path:"home", component: HomeComponent},
  {path:"display", component: FilmListComponent},
  {path:"info", component: FilmInfoComponent},
  {path:"search", component: BusquedaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
