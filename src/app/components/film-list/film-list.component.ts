import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

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

}
