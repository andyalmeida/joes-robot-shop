import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  filter = '';
  
  constructor(
    private cartService: CartService, 
    private productService: ProductService
  ) {}
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  getFilteredProducts() {
    return this.filter === '' 
      ? this.products 
      : this.products.filter(product => product.category === this.filter);
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }
}
