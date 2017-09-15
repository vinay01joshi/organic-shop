import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  order$;
  orderId;
  constructor(private orderService: OrderService ,private route: ActivatedRoute) {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.order$ = orderService.getOrderByOrderId(this.orderId)
  }

  ngOnInit() {
  }

}
