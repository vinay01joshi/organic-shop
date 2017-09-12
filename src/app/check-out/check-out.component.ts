import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy {
  userId: string;
  cart: ShoppingCart;
  shipping = {}; 
  cartSubscription : Subscription;
  userSubscription : Subscription;
  
  constructor(
      private router: Router,
      private authService: AuthService,
      private shoppingCartService: ShoppingCartService, 
      private oderService: OrderService) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart() ;
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);

    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.oderService.placeOrder(order);   
    this.router.navigate(['/order-success',result.key]);
  }
  
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
