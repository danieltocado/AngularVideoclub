import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  // backUrl = 'https://cors-anywhere.herokuapp.com/https://154.56.45.23/movies/';
  API_URL = environment.API_URL;

  public peliculas: Movie[] = [];
  peliculaEscogida: object[];

  constructor(public httpClient:HttpClient) { }

  getMovies():Observable<any> {
    return this.httpClient.get(this.API_URL+'/movies/allmovies');
  }

  getPopularMovies():Observable<any> {
    return this.httpClient.get(this.API_URL + '/movies/popular');
  }
  getLastFilms():Observable<any> {
    return this.httpClient.get(this.API_URL + '/movies/lastmovies');
  }

  getMoviesTitle(title: string):Observable<any> {
    return this.httpClient.get(this.API_URL + '/movies/title/' + title);
  }

  getPage(page: number):Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.API_URL + '/movies/page/' + page);
  }

  locateMovie(peliculaEscoger:any):object {

    this.peliculaEscogida = peliculaEscoger;
    console.log(this.peliculaEscogida);

    // localStorage PELICULA ESCOGIDA

    localStorage.setItem("peliEscogida", JSON.stringify(this.peliculaEscogida));
    
    return;
  }

  setMovies(peliculas:Movie[]):void {
   
    this.peliculas = peliculas;
  }

  getMoviesB(): Movie[] {
    return this.peliculas;
  }

  
}
