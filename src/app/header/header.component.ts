import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProducts } from '../models/iproducts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shoppingCart: Array<IProducts>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.shoppingCart = this.productService.getShoppingCart();
  }

}
