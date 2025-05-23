import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-privacy-modal',
  templateUrl: './privacy-modal.component.html',
  standalone: true,
  imports: [AccordionModule],
})
export class PrivacyModalComponent {
  title!: string;
  closeBtnName!: string;

  typeCookiesAndPrivacy!: string;

  public onSelected!: Subject<boolean>;

  accordeonOneAtATime = true;
  accordeonBasicOpen = true;

  constructor(public bsModalRef: BsModalRef, private router: Router) {}

  onAcceptPrivacy() {
    localStorage.setItem('vsoft_privacy', this.typeCookiesAndPrivacy);
    this.bsModalRef.hide();
  }

  onPrivacy() {
    this.router.navigate(['/privacy']);
    this.bsModalRef.hide();
  }

  logSelected(selectedType: string) {
    this.typeCookiesAndPrivacy = selectedType;
  }
}
