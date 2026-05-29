export const environment = {
  production: true,
  version: '21.2.15',

  // ApiUrl of the production database
  apiUrl: 'https://rv.be/api/',
  apiWhiteListDomain: ['rv.be'],
  apiBlackListDomain: ['rv.be/api/account'],

  // Api Key and info for using contactmail functionality
  apiVsoftMailGuid: '5205fa57-766f-4af0-9207-d993d81d759b',
  apiVsoftSendFromAddress: 'josvermoesen@rv.be',
  apiVsoftSendFromName: 'Roelandt & Vermoesen 1935',

  // For vsoft
  contentful: {
    spaceId: 'mq8ieqd7mcv8',
    token: 'e92105b30fe907b0de47100961329d50bec5e0476f55473e1b821e4919e4a26e',
  },

  // Banking info
  brokerIban: 'BE83891854037015',
  brokerBic: 'VDSPBE91',
  brokerName: 'Roelandt en Vermoesen bv',

  // google meetup
  meetupCode: '9310gb141',
};
