import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

if (environment.production) {
  enableProdMode();

  // disable any console.log debugging statements in production mode
  window.console.log = function () {
    ('');
  };
  window.console.error = function () {
    ('');
  };
}
/* window.console.log = function () {
  ('');
}; */

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
