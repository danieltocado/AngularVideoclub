import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
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
  showMovieModalDetail(movie: Movie): void {
    this.showModal = true;
    this.currentMovie = movie;
  }  
  closeMovieModalDetail(): void {
    this.showModal = false;
  }
}
