import { Component } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-office-info-modal',
    templateUrl: './office-info-modal.component.html',
    standalone: true,
})
export class OfficeInfoModalComponent {
  title!: string;

  constructor(public bsModalRef: BsModalRef) {}

}
