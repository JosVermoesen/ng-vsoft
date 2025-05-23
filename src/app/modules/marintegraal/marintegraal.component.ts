import { Component, OnInit } from '@angular/core';

import { Entry } from 'contentful';

import { ContentfulService } from './../../global/shared/services/contentful.service';
import { SeoService } from './../../global/shared/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { MdToHtmlPipe } from '../../global/shared/helpers/md-to-html.pipe';
import { NgIf } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-marintegraal',
  templateUrl: './marintegraal.component.html',
  standalone: true,
  imports: [AccordionModule, NgIf, MdToHtmlPipe, TranslateModule],
})
export class MarintegraalComponent implements OnInit {
  accordeonUpdateOpen = true;
  accordeonOneAtATime = true;

  contentfulUpdatesEntry!: Entry<any>;
  contentfulContractTypesEntry!: Entry<any>;

  constructor(private seoS: SeoService, private cfService: ContentfulService) {}

  ngOnInit(): void {
    this.seoS.setAll('MARINTEGRAAL');

    const contentfulUpdateId = '64Wa2kez6Yo9OqgdAAxq8s';
    this.cfService.getContentDetail(contentfulUpdateId).subscribe((result) => {
      this.contentfulUpdatesEntry = result;
    });
    const contentfulContractTypesId = '1eD6PrHZAV7K843r9KUvXN';
    this.cfService
      .getContentDetail(contentfulContractTypesId)
      .subscribe((result) => {
        this.contentfulContractTypesEntry = result;
      });
    // 1eD6PrHZAV7K843r9KUvXN
  }
}
