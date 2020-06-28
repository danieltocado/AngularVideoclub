import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  // backUrl = 'https://cors-anywhere.herokuapp.com/https://154.56.45.23/movies/';
  backUrl = 'http://localhost:3000/movies/';

  peliculas: object[];
  peliculaEscogida: object[];

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any> {
    return this.httpClient.get(this.backUrl+'allmovies');
  }

  getMoviesTitle(title: string):Observable<any> {
    return this.httpClient.get(this.backUrl + 'title/' + title);
  }

  locateMovie(peliculaEscoger:any):object {
    this.peliculaEscogida = peliculaEscoger;
    console.log(this.peliculaEscogida);
    return;
  }

  setMovies(peliculas:object[]):void {
   
    this.peliculas = peliculas;
  }

  getMoviesB():object {
    return this.peliculas;
  }
}
