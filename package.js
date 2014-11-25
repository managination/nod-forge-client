Package.describe({
  name: 'mgn:node-forge-client',
  summary: 'This package adds a global `frg` variable to give access to the encryption, decryption and hashing functions from forge on the client.',
  version: '1.0.3',
  git: 'https://github.com/managination/nod-forge-client.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('forge.bundle.js', 'client');
  api.addFiles('mng:node-forge-client.js', 'client');
  api.export(['frg'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mgn:node-forge-client');
  api.addFiles('mng:node-forge-client-tests.js', 'client');
});
