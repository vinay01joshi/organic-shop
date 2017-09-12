import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/services/order.service';
import { AuthService } from '../shared/services/auth.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;
  constructor(orderService: OrderService, authService: AuthService) { 
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }
}
