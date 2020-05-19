
Plugin.registerCompiler(
  {
    extensions: ["ts", "tsx"],
    filenames: ["tsconfig.json"],
  },
  function () {
    return new TypeScriptCompiler();
  }
);

class TypeScriptCompiler {
  constructor() {
    console.log("constructor called");
  }
  processFilesForTarget(inputFiles) {
  }
}
