import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';

@Component({
  selector: 'app-main-pages',
  imports: [HeaderComponent, FooterComponent, LandingSectionComponent],
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.scss',
})
export class MainPagesComponent {}
