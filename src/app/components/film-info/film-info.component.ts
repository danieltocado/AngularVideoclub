import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  peliculaMuestra: any;
  

  constructor(public MovieService:MovieService) { }

  ngOnInit() {
    this.peliculaMuestra = this.MovieService.peliculaEscogida;
    console.log("Pelicula escogida",this.peliculaMuestra)
    
  }

}
