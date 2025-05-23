import { Component, OnInit } from '@angular/core';

import { SeoService } from './../../global/shared/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-hosting',
  templateUrl: './hosting.component.html',
  standalone: true,
  imports: [AccordionModule, TranslateModule],
})
export class HostingComponent implements OnInit {
  accordeonOneAtATime = true;
  accordeonHostingOpen = true;

  constructor(private seoS: SeoService) {}

  ngOnInit(): void {
    this.seoS.setAll('HOSTING');
  }
}
