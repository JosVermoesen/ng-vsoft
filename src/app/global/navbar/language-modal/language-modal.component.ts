import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { LanguageService } from '../services/language.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf],
})
export class LanguageModalComponent implements OnInit {
  public bsModalRef = inject(BsModalRef);
  private languageService = inject(LanguageService);

  title!: string;
  closeBtnName!: string;

  languages: {
    text: string;
    subtext: string;
    value: string;
    img: string;
    enabled: boolean;
  }[] = [];
  selected = '';

  public onSelected!: Subject<boolean>;

  public ngOnInit(): void {
    this.onSelected = new Subject();
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }

  select(lng: string) {
    this.languageService.setLanguage(lng);
    // this.saveSettings();
    // this.popoverCtrl.dismiss();

    this.onSelected.next(true);
    this.bsModalRef.hide();
  }
}
