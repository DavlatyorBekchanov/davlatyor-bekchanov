import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPagesComponent } from './main-pages/main-pages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
