# meteor-typescript
[Meteor](https://meteor.com) typescript compiler plugin package.

Depends on https://github.com/Meteor-Community-Packages/meteor-typescript-compiler for the bulk of the implementation.

This project is just a small wrapper to install the compiler as a Meteor plugin.

## History
This plugin is based on the incremental compilation support released in Typescript 3.6 and works like a dropin replacement
to the old barbatus:typescript package and its forks.

Some main attributes:

* Outputs type compilation errors as part of the build process and will fail if a file could not be transpiled to js.
* Uses settings in tsconfig.json (overrides a few, like "incremental")

If the `TYPESCRIPT_FAIL_ON_COMPILATION_ERRORS` environment variable is set to a value other than 0 or false, compilation errors
will also make the meteor compilation fail. Since files with compilation errors often still emit javascript code, that is something
you probably want to enable in ci build environments only.

For convenience and to allow e.g. faster production builds without modifying your tsconfig.json file,
you can override the sourceMap setting via the `TYPESCRIPT_SOURCEMAP` environment variable.
Set it to `0` or `false` to disable source map generation and any other non-empty string value to enable them.

## How to install and use

```sh
# meteor remove typescript # (if needed)
# meteor add refapp:meteor-typescript
```

## Cached files
To get advantage of cached files on a build server, ensure that you save and restore the content of the .meteor/local/plugin-cache directory between builds.

## How to test using the provided test application (requires a system with proper symlink support)

```
git clone git@github.com:ref-app/meteor-typescript.git
git clone git@github.com:ref-app/meteor-typescript-compiler.git

cd meteor-typescript/tests/small-typescript-app/
meteor npm install
meteor run
```

This builds the two packages and uses them to try to compile the small example app.

## Contributors

* Per Bergland - https://github.com/perbergland