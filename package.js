Package.describe({
  name: "refapp:meteor-typescript",
  version: "0.0.1",
  summary: "A Typescript compiler plugin for Meteor",
  git: "https://github.com/ref-app/meteor-typescript",
  documentation: "README.md",
});

const COMPILER_VERSION = "0.0.1";

Package.registerBuildPlugin({
  name: "meteor-typescript",
  use: ["refapp:meteor-typescript-compiler@" + COMPILER_VERSION],
  sources: ["meteor-typescript-plugin.js"],
  npmDependencies: {
    typescript: "3.9.2",
  },
});

Package.onUse(function (api) {
  api.use("isobuild:compiler-plugin@1.0.0");
  api.versionsFrom("1.10");
  api.use("ecmascript");
  api.use("refapp:meteor-typescript-compiler@" + COMPILER_VERSION);
});
