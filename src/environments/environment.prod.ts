export const environment = {
  production: true,
  version: '19.2.13',

  // ApiUrl of the production database
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
  meetupCode: 'your meetupcode',
};
