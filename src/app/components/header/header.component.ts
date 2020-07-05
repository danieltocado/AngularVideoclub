import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private UserService:UserService, public MovieService:MovieService) { }

  ngOnInit(): void {
    console.log('soy el header')
  }

  getUser(): User {
    return this.UserService.getUser();
  }

  logout(): void {
    this.UserService.logout();
    this.UserService.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  buscaTitulo(event) {
    if(event.target.value.length >= 3){
      this.MovieService.getMoviesTitle(event.target.value)
      .subscribe(res => this.MovieService.setMovies(res))
    }
  }

  
}
