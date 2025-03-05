import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-main-pages',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.scss',
})
export class MainPagesComponent {}
