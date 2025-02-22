import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: "Home - Joe's Robot Shop"},
    {path: 'catalog', component: CatalogComponent, title: "Catalog - Joe's Robot Shop"},
    {path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop"},
    {path: 'sign-in', component: SignInComponent},
    {path: '**', redirectTo: ''}
];
