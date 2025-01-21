import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HomeComponent, SiteHeaderComponent, CatalogComponent, CartComponent]
})
export class AppComponent {
}
