Package.describe({
  name: "refapp:meteor-typescript",
  version: "0.0.1",
  summary: "A Typescript compiler plugin for Meteor",
  git: "https://github.com/refapp/meteor-typescript",
  documentation: "README.md",
});

Package.registerBuildPlugin({
  name: "meteor-typescript",
  sources: ["meteor-typescript.ts"],
  npmDependencies: {
    typescript: "3.9.2",
  },
});

Package.onUse(function (api) {
  api.versionsFrom("1.10");
  api.use("isobuild:compiler-plugin@1.0.0");
  api.use("ecmascript");
  api.use("typescript");
  api.mainModule("meteor-typescript.ts");
});

Package.onTest(function (api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("refapp:meteor-typescript");
  api.mainModule("meteor-typescript-tests.js");
});
