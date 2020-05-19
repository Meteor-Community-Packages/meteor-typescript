Plugin.registerCompiler(
  {
    extensions: ["ts", "tsx"],
    filenames: ["tsconfig.json"],
  },
  function () {
    console.log("compiler factory");
    return new MeteorTypescriptCompiler();
  }
);
