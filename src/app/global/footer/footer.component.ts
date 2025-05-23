import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [RouterLink, TranslateModule],
})
export class FooterComponent {
  version: string = environment.version;
  year = new Date().getFullYear();
}
