// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration production` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: '19.2.12',

  // while using a dotnet development server (+local or production database)
  // apiUrl: 'https://localhost:5001/api/',
  // apiWhiteListDomain: ['localhost:5001'],
  // apiBlackListDomain: ['localhost:5001/api/account'],

  // api for use of the production dotnet and database
  apiUrl: 'https://rv.be/api/',
  apiWhiteListDomain: ['rv.be'],
  apiBlackListDomain: ['rv.be/api/account'],

  // Api Key and info for using contactmail functionality
  apiVsoftMailGuid: 'ask for a key',
  apiVsoftSendFromAddress: 'your email address',
  apiVsoftSendFromName: 'Your organisations name',

  // For vsoft
  contentful: {
    spaceId: 'mq8ieqd7mcv8',
    token: 'e92105b30fe907b0de47100961329d50bec5e0476f55473e1b821e4919e4a26e',
  },

  // Banking info
  brokerIban: 'Your IBAN',
  brokerBic: 'Your BIC',
  brokerName: 'Your organisations name',

  // google meetup
  meetupCode: '9310gb141',
};
