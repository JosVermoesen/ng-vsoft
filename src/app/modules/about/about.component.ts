import { Component, OnInit } from '@angular/core';

import { SeoService } from './../../global/shared/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [TranslateModule],
})
export class AboutComponent implements OnInit {
  constructor(private seoS: SeoService) {}

  ngOnInit(): void {
    this.seoS.setAll('ABOUT');
  }
}
