import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.css']
})
export class PopularmoviesComponent implements OnInit {
  showModal: boolean;
  currentMovie: Movie;
 
  peliculasMostrar:object;
  constructor(public MovieService:MovieService) { }

  ngOnInit(){
    this.MovieService.getPopularMovies()
    .subscribe(
      res => this.peliculasMostrar = res,
      error => console.log(error),
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
  getMovies(): Movie[] {
    return this.MovieService.getMoviesB();
  }

}
