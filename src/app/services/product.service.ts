import { Injectable } from '@angular/core';
import { IProducts } from '../models/iproducts';
import { products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  shoppingCart: Array<IProducts>;
  products: Array<IProducts>;
  constructor() {
    this.products = products;
  }

  getProducts(): Array<IProducts> {
    return this.products;
  }

  getShoppingCart(): Array<IProducts> {
    return this.shoppingCart;
  }

  addToCart(product: IProducts) {
    this.shoppingCart.push(product);
  }
}
