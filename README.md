# Multi-language single page app (spa) using Angular and Bootstrap

## Getting started for users

Working version here: [Vsoft software site](https://vsoft.be)
Working version here: [RV Insurance site](https://rv.be)

marIntegraal users can get in touch for their own version of this app (including use of mail service via our dotnet core server)

## Development Tools used for this app on december 2024

- [Install NVM for different versions of NodeJS)](https://github.com/coreybutler/nvm-windows/releases)
- In terminal `nvm install 20.14.0` and `nvm use 20.14.0`

- [Angular CLI v19)](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli@19`
- [Visual Studio Code](https://code.visualstudio.com/)

- Clone this repository: `git clone https://github.com/JosVermoesen/ng-vsoft.git`
- Run `npm install` inside the project root.
- Run `ng serve` in a terminal from the project root.
- Profit. :tada:

## NPM packages used for this app

- [bootstrap](https://www.npmjs.com/package/bootstrap): `npm i bootstrap@5`
- [bootswatch](https://www.npmjs.com/package/bootswatch): `npm i bootswatch@5`
- [jquery](https://www.npmjs.com/package/jquery): `npm i jquery`
- [fontawesome angular](https://www.npmjs.com/package/@fortawesome/angular-fontawesome): `npm i @fortawesome/angular-fontawesome`
- [fontawesome svg core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core): `npm i @fortawesome/fontawesome-svg-core`
- [fontawesome free sold svg icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons): `npm i @fortawesome/free-solid-svg-icons`
- [bootstrap icons](https://www.npmjs.com/package/bootstrap-icons): `npm i bootstrap-icons`
- [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap): `npm i ngx-bootstrap`
- [@ngx-translate/core](https://www.npmjs.com/package/@ngx-translate/core): `npm i @ngx-translate/core`
- [@ngx-translate/http-loader](https://www.npmjs.com/package/@ngx-translate/http-loader): `npm i @ngx-translate/http-loader`

- install all packages in one commandline: `npm i bootstrap@5 bootswatch@5 jquery @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons bootstrap-icons ngx-bootstrap @ngx-translate/core @ngx-translate/http-loader`

## file styles.css

For use of bootstrap, add into file styles.css:

```bash
@use 'bootstrap/dist/css/bootstrap.min.css';
```

## warnings for contentful

In angular.json, to avoid CommonJs warnings, add **allowedCommonJsDependencies** in the options section for **lodash, axios and qs**:

```bash
"builder": "@angular-devkit/build-angular:browser",
          "options": {
            "allowedCommonJsDependencies": [
              "lodash",
              "axios",
              "qs"
            ],
            ...
```

## file angular.json scripts

For use of js from bootstrap and jquiry, add into scripts section:

```bash
"scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
```

## tsconfig.json changes for using version stamp in app

Before building, set resolveJsonModule to 'true' :

```bash
"compilerOptions": {
    ...
    "resolveJsonModule": true,
    ...
```

## Best practices: use lazy loading modules

- Generate modules ex. a hosting module: `ng generate module modules/hosting --route hosting --module app.module`
- Generate modules ex. a contact module: `ng generate module modules/contact --route contact --module app.module`

## Good practice: Updating Angular as needed

This app is on Angular 19. Update to latest Angular 19 with:
`ng update @angular/cli@19 @angular/core@19`

Follow the instructions eventualy for fixes
