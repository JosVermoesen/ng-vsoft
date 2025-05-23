import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { LanguageModalComponent } from './language-modal/language-modal.component';
import { PrivacyModalComponent } from '../footer/privacy/privacy-modal/privacy-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [RouterLink, TranslateModule],
})
export class NavbarComponent implements OnInit {
  bsModalRef!: BsModalRef;
  modalService = inject(BsModalService);
  translate = inject(TranslateService);

  faBars = faBars;
  faGlobe = faGlobe;

  ngOnInit() {
    const cpStatus = localStorage.getItem('vsoft_privacy');
    if (!cpStatus) {
      this.privacyModal();
    }
  }

  privacyModal() {
    // console.log('no policies viewed yet!');
    const lblTitle = 'Cookies en Privacy';
    const lblCloseBtnName = 'Sluiten';

    const initialState = {
      title: lblTitle,
    };
    this.bsModalRef = this.modalService.show(PrivacyModalComponent, {
      initialState,
    });
    this.bsModalRef.content.closeBtnName = lblCloseBtnName;
  }

  onLanguageModal() {
    const lblTitle = this.translate.instant('NAVBAR.LanguageModalTitle');
    const lblCloseBtnName = this.translate.instant(
      'NAVBAR.LanguageModalCloseBtnName'
    );

    const initialState = {
      title: lblTitle,
    };
    this.bsModalRef = this.modalService.show(LanguageModalComponent, {
      initialState,
    });
    this.bsModalRef.content.onSelected.subscribe(() => {
      // when closed do something eventualy
    });

    this.bsModalRef.content.closeBtnName = lblCloseBtnName;
  }
}
