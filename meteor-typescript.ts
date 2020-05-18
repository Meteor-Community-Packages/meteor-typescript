// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See meteor-typescript-tests.js for an example of importing.
export const name = "meteor-typescript";

declare class Plugin {
  static registerCompiler(
    options: { extensions: string[]; filenames: string[] },
    factory: () => any
  ): void;
}

Plugin.registerCompiler(
  {
    extensions: ["ts", "tsx"],
    filenames: ["tsconfig.json"],
  },
  function () {
    return new TypeScriptCompiler();
  }
);

class TypeScriptCompiler extends Compiler {
  constructor() {
    super();
    console.log("constructor called");
  }
  processFilesForTarget(inputFiles: InputFile[]) {
    inputFiles;
  }
}
