import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';

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
      private authService: AuthService,
      private shoppingCartService: ShoppingCartService, 
      private oderService: OrderService) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart() ;
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);

    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  placeOrder() {
    let order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map( i=> {
        return {
          product: {
            title: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totoalPrice: i.totalPrice
        }
      })
    };

    this.oderService.storeOrder(order);
  }
  
  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
