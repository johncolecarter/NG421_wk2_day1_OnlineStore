import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { IProducts } from './models/iproducts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Array<IProducts>;

  constructor(private productService: ProductService) { }

  NgOnInit() {
    this.products = this.productService.getProducts();
  }
}
