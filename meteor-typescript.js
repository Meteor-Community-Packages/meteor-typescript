
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
    console.log("TypeScriptCompiler constructor called");
  }
  processFilesForTarget(inputFiles) {
    console.log("processFilesForTarget called");
    for (const inputFile of inputFiles) {
      console.log(inputFile.getPathInPackage());
    }
  }
}
