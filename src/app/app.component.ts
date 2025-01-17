import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HomeComponent, SiteHeaderComponent]
})
export class AppComponent {
}
