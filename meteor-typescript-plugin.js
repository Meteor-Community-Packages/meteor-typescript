
console.log("registering compiler");

Plugin.registerCompiler(
  {
    extensions: ["ts", "tsx"],
    filenames: ["tsconfig.json"],
  },
  function () {
    console.log("compiler factory");
    console.log(MeteorTypescriptCompiler);
    console.log(typeof MeteorTypescriptCompiler);
    return new MeteorTypescriptCompiler();
  }
);

