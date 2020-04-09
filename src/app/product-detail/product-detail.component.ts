import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from '../models/iproducts';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: IProducts;

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }

  addToCart() {
    this.productService.addToCart(this.product);
  }

}
