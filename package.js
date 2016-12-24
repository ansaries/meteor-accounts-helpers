Package.describe({
  name: 'ansaries:accounts-helpers',
  summary: 'Useful helpers for Accounts',
  version: '0.1.7',
  git: 'https://github.com/ansaries/meteor-accounts-helpers'
});

var packages = [
  'check@1.0.6',
  'accounts-base@1.2.1',
  'accounts-ui@1.1.6',
  'underscore@1.0.4',  
  'service-configuration@1.0.5',  
  'aldeed:simple-schema@1.3.3'
];

Package.on_use(function(api, where) {

  api.use(packages);
  api.imply(packages);

  api.add_files([
    'client/hooks.js',
    'client/helpers.js'
  ], 'client');

  api.add_files([
    'server/lib.js'
  ], 'server');

});
