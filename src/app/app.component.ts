import { Component } from '@angular/core';
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SiteHeaderComponent]
})
export class AppComponent {
}
