import { Component, OnInit } from '@angular/core';

import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { SeoService } from './../../global/shared/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 2000, noPause: true, showIndicators: true },
    },
  ],
  standalone: true,
  imports: [CarouselModule, RouterLink, FaIconComponent, TranslateModule],
})
export class HomeComponent implements OnInit {
  faAccounting = faBook;
  faHosting = faCloud;
  faApps = faMobile;

  constructor(private seoS: SeoService) {}

  ngOnInit(): void {
    this.seoS.setAll('HOME');
  }
}
