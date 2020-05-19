# meteor-typescript
[Meteor](https://meteor.com) typescript compiler plugin package.

Depends on https://github.com/ref-app/meteor-typescript-compiler for the bulk of the implementation.

This project is just a small wrapper to install the compiler as a Meteor plugin.

## Work in progress
The intent is build a plugin based on the incremental compilation support released in Typescript 3.6 and have it work just like the old barbatus:typescript package but much faster. Keep the following properties:

* Output type errors as part of the build process
* Use settings in tsconfig.json

## How to test (on a system with proper symlink support)

```
git clone git@github.com:ref-app/meteor-typescript.git
git clone git@github.com:ref-app/meteor-typescript-compiler.git

cd meteor-typescript/tests/small-typescript-app/
meteor npm install
meteor run
```

This builds the two packages and uses them to try to compile the small example app.