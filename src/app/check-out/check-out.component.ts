import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit,OnDestroy {
  cart: ShoppingCart;
  shipping = {}; 
  subscription : Subscription;
  
  constructor(private shoppingCartService: ShoppingCartService, private oderService: OrderService) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart() ;
    this.subscription = cart$.subscribe(cart => this.cart = cart);
  }

  placeOrder() {
    let order = {
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
    this.subscription.unsubscribe();
  }

}
