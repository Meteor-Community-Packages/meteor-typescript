#!/usr/bin/env ts-node

// ts-node-script tests/compilerWatchTest.ts

import * as ts from "typescript";

export const formatHost: ts.FormatDiagnosticsHost = {
  getCanonicalFileName: (path) => path,
  getCurrentDirectory: ts.sys.getCurrentDirectory,
  getNewLine: () => ts.sys.newLine,
};

const cachePath = "./outfiles"; //  "../.meteor/local/plugin-cache/refapp_meteor-typescript/local/v2cache";

function watchMain() {
  const configPath = ts.findConfigFile(
    /*searchPath*/ "../",
    ts.sys.fileExists,
    "tsconfig.json"
  );
  if (!configPath) {
    throw new Error("Could not find a valid 'tsconfig.json'.");
  }

  // TypeScript can use several different program creation "strategies":
  //  * ts.createEmitAndSemanticDiagnosticsBuilderProgram,
  //  * ts.createSemanticDiagnosticsBuilderProgram
  //  * ts.createAbstractBuilder
  // The first two produce "builder programs". These use an incremental strategy
  // to only re-check and emit files whose contents may have changed, or whose
  // dependencies may have changes which may impact change the result of prior
  // type-check and emit.
  // The last uses an ordinary program which does a full type check after every
  // change.
  // Between `createEmitAndSemanticDiagnosticsBuilderProgram` and
  // `createSemanticDiagnosticsBuilderProgram`, the only difference is emit.
  // For pure type-checking scenarios, or when another tool/process handles emit,
  // using `createSemanticDiagnosticsBuilderProgram` may be more desirable.
  const createProgram = ts.createEmitAndSemanticDiagnosticsBuilderProgram;

  // Note that there is another overload for `createWatchCompilerHost` that takes
  // a set of root files.
  const host = ts.createWatchCompilerHost(
    configPath,
    {
      tsBuildInfoFile: `${cachePath}/buildinfo.tsbuildinfo`,
      incremental: true,
      noEmit: false,
      outDir: `${cachePath}/out/`,
      sourceMap: true,
    },
    {
      ...ts.sys,
      write: (s) => console.log(s),
      readFile: (path, encoding) => {
        if (path.includes("buildinfo")) {
          console.log(`reading ${path}`);
        }
        return ts.sys.readFile(path, encoding);
      },
    },
    createProgram,
    reportDiagnostic,
    reportWatchStatusChanged
  );

  // You can technically override any given hook on the host, though you probably
  // don't need to.
  // Note that we're assuming `origCreateProgram` and `origPostProgramCreate`
  // doesn't use `this` at all.
  const origCreateProgram = host.createProgram;
  host.createProgram = (rootNames, options, host, oldProgram) => {
    console.log("** We're about to create the program! **");
    return origCreateProgram(rootNames, options, host, oldProgram);
  };
  const origPostProgramCreate = host.afterProgramCreate;

  host.afterProgramCreate = (program) => {
    const { emit: origEmit } = program;
    console.log("** We finished making the program! **");
    origPostProgramCreate?.({
      ...program,
      emit: (targetSourceFile, origWriteFile, ...emitRest) => {
        const writeFile: typeof origWriteFile = (path, ...rest) => {
          console.log(`emitting ${path} writeFile`);
          const realWriteFile = origWriteFile ?? ts.sys.writeFile;
          realWriteFile(path, ...rest);
        };
        console.log(`Emitting`);
        const result = origEmit(targetSourceFile, writeFile, ...emitRest);
        result.emittedFiles?.forEach((emittedFile) =>
          console.log(`Emitted ${emittedFile}`)
        );
        console.log(`Emitting complete`);
        return result;
      },
    });
  };

  // `createWatchProgram` creates an initial program, watches files, and updates
  // the program over time.
  return ts.createWatchProgram(host);
}

function reportDiagnostic(diagnostic: ts.Diagnostic) {
  console.error(
    "Error",
    diagnostic.code,
    ":",
    ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      formatHost.getNewLine()
    )
  );
}

/**
 * Prints a diagnostic every time the watch status changes.
 * This is mainly for messages like "Starting compilation" or "Compilation completed".
 */
function reportWatchStatusChanged(diagnostic: ts.Diagnostic) {
  console.info("reportWatchStatusChanged");
  console.info(ts.formatDiagnostic(diagnostic, formatHost));
}

const watch = watchMain();
if (watch) {
}
