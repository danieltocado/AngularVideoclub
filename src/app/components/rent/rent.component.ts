import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { HttpResponse } from '@angular/common/http';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  localUser: object;
  constructor(public orderService: OrderService, movieService: MovieService, userService: UserService) { }
  ngOnInit(): void {
  }
  createOrder(): void {//rentForm: NgForm
    this.localUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.localUser)
    /* const recap: Recap = rentForm.value
    this.orderService.createOrder(Recap)
    console.log('holita'); */
  }
}