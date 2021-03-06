import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  showModal: boolean;
  currentMovie: Movie;
  peliculasMostrar: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit() {
    this.MovieService.getMovies()
    .subscribe(
      res => this.peliculasMostrar = res,
      error => console.error(error),
      () => console.log(this.peliculasMostrar)
    )
  }
  buscaTitulo(event) {
    if(event.target.value.length >= 3){
      this.MovieService.getMoviesTitle(event.target.value)
      .subscribe(res => this.MovieService.setMovies(res))
    }
  }
  showMovieModalDetail(movie: Movie): void {
    this.showModal = true;
    this.currentMovie = movie;
  }  
  closeMovieModalDetail(): void {
    this.showModal = false;
  }

}

