import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  addToCart(product: Product) {
    
  }

  private create() {
   return this.db.list('/shopping-cart').push({
      dateCreated: new Date().getTime()
    })
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/'+ cartId);
  }

 private async getOrCreateCart() {
    let cartId = localStorage.getItem('cartId');

    if(!cartId) {

      let result = await this.create();
      localStorage.setItem('cartId',result.key);
      return this.getCart(result.key);      
    }
    
    return this.getCart(cartId);    
  }

}
