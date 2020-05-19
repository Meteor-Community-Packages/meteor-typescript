declare namespace MeteorCompiler {
  export interface ErrorOptions {
    message: string;
    sourcePath: string;
    line: number;
    func: string;
  }

  export class InputFile {
    /**
     * @summary Returns the full contents of the file as a buffer.
     * @memberof InputFile
     * @returns {Buffer}
     */
    public getContentsAsBuffer(): Buffer;

    /**
     * @summary Returns the name of the package or `null` if the file is not in a
     * package.
     * @memberof InputFile
     * @returns {String}
     */
    getPackageName(): string;

    /**
     * @summary Returns the relative path of file to the package or app root
     * directory. The returned path always uses forward slashes.
     * @memberof InputFile
     * @returns {String}
     */
    getPathInPackage(): string;

    /**
     * @summary Returns a hash string for the file that can be used to implement
     * caching.
     * @memberof InputFile
     * @returns {String}
     */
    getSourceHash(): string;

    /**
     * @summary Returns the architecture that is targeted while processing this
     * file.
     * @memberof InputFile
     * @returns {String}
     */
    getArch(): string;

    /**
     * @summary Returns the full contents of the file as a string.
     * @memberof InputFile
     * @returns {String}
     */
    getContentsAsString(): string;

    /**
     * @summary Returns the filename of the file.
     * @memberof InputFile
     * @returns {String}
     */
    getBasename(): string;

    /**
     * @summary Returns the directory path relative to the package or app root.
     * The returned path always uses forward slashes.
     * @memberof InputFile
     * @returns {String}
     */
    getDirname(): string;

    /**
     * @summary Returns an object of file options such as those passed as the
     *          third argument to api.addFiles.
     * @memberof InputFile
     * @returns {Object}
     */
    getFileOptions(): Object;

    /**
     * @summary Call this method to raise a compilation or linting error for the
     * file.
     * @param {Object} options
     * @param {String} options.message The error message to display.
     * @param {String} [options.sourcePath] The path to display in the error message.
     * @param {Integer} options.line The line number to display in the error message.
     * @param {String} options.func The function name to display in the error message.
     * @memberof InputFile
     */
    public error(options: ErrorOptions): void;
  }

  export class Compiler {
    public processFilesForTarget(inputFiles: InputFile[]): void;
  }
}
