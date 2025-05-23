import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

import { AccordionModule } from 'ngx-bootstrap/accordion';

import { MarintegraalRoutingModule } from './marintegraal-routing.module';
import { MarintegraalComponent } from './marintegraal.component';

import { SharedModule } from '../../global/shared/shared.module';
import { ContentfulService } from './../../global/shared/services/contentful.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule.forRoot(),
        MarintegraalRoutingModule,
        AccordionModule.forRoot(),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        MarintegraalComponent,
    ],
    providers: [ContentfulService],
})
export class MarintegraalModule {}
