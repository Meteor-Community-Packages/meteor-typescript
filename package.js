const COMPILER_VERSION = "0.3.18";
const TYPESCRIPT_VERSION = "5.3.2";
const MY_VERSION = COMPILER_VERSION; // Keep in sync

Package.describe({
  name: "refapp:meteor-typescript",
  version: MY_VERSION,
  summary: "A Typescript compiler plugin for Meteor",
  git: "https://github.com/Meteor-Community-Packages/meteor-typescript",
  documentation: "README.md",
});

Package.registerBuildPlugin({
  name: "meteor-typescript",
  use: ["refapp:meteor-typescript-compiler@" + COMPILER_VERSION],
  sources: ["meteor-typescript-plugin.js"],
  npmDependencies: {
    typescript: TYPESCRIPT_VERSION,
  },
});

Package.onUse(function (api) {
  api.use("isobuild:compiler-plugin@1.0.0");
  api.versionsFrom("1.10");
  api.use("ecmascript");
  api.use("refapp:meteor-typescript-compiler@" + COMPILER_VERSION);
});
