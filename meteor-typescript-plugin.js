Plugin.registerCompiler(
  {
    extensions: ["ts", "tsx"],
    filenames: ["tsconfig.json"],
  },
  function () {
    return new MeteorTypescriptCompiler();
  }
);
