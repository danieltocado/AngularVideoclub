import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showModal: boolean;
  currentMovie: Movie;
  peliculasMostrar: Movie[];

  page = 1;

  constructor(public MovieService:MovieService) { }

  ngOnInit(): void {
    this.getByPage()
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
  getByPage(): void {
    this.MovieService.getPage(this.page)
    .subscribe(movies => {
      this.peliculasMostrar = movies;
    })
  }
  nextPage() {
    this.page++;
    this.getByPage();
  }

  backPage():void {
      if(this.page > 1){
      this.page--;
      this.getByPage();
      }
    }

}
