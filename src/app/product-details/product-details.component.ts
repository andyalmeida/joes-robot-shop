import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;

  getImageUrl() {
    return `images/robot-parts/${this.product.imageName}`;
  }

  addToCart() { }
}
