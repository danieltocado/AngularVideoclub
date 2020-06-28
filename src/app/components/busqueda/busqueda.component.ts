import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

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

}

