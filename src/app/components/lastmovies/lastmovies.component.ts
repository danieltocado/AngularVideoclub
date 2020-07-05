import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-lastmovies',
  templateUrl: './lastmovies.component.html',
  styleUrls: ['./lastmovies.component.css']
})
export class LastmoviesComponent implements OnInit {

  peliculasMostrar:object;
  constructor(public MovieService:MovieService) { }

  ngOnInit(){
    this.MovieService.getLastFilms()
    .subscribe(
      res => this.peliculasMostrar = res,
      error => console.log(error),
      () => console.log(this.peliculasMostrar)
    )
  }

}
