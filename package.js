Package.describe({
  name: 'refapp:meteor-typescript',
  version: '0.0.1',
  summary: 'A Typescript compiler plugin for Meteor',
  git: 'https://github.com/refapp/meteor-typescript',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.10');
  api.use('typescript');
  api.use('ecmascript');
  api.mainModule('meteor-typescript.ts');
});

Package.onTest(function(api) {
  api.use('typescript');
  api.use('ecmascript');
  api.use('tinytest');
  api.use('refapp:meteor-typescript');
  api.mainModule('meteor-typescript-tests.ts');
});
