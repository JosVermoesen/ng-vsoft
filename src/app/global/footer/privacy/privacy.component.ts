import { Component, OnInit } from '@angular/core';

import { Entry } from 'contentful';

import { ContentfulService } from './../../../global/shared/services/contentful.service';
import { MdToHtmlPipe } from '../../shared/helpers/md-to-html.pipe';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
  standalone: true,
  imports: [MdToHtmlPipe],
})
export class PrivacyComponent implements OnInit {
  contentfulItem!: Entry<any>;

  constructor(private cfService: ContentfulService) {}

  ngOnInit() {
    const contentfulId = '1dT2EAqGoQfcRDcXi62YmX';
    this.cfService.getContentDetail(contentfulId).subscribe((result) => {
      this.contentfulItem = result;
      // console.log(this.contentfulItem);
    });
  }

  refresh(): void {
    localStorage.removeItem('vsoft_privacy');
    window.location.reload();
  }
}
