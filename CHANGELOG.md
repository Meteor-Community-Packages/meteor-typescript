# Changes

## 0.3.1 2020-12-07

- Use cache path relative source directory also in test mode to be able to reuse incremental cache

## 0.3.0 2020-11-25

- Major rewrite to use incremental watching compiler for much faster (re)compiles

## 0.2.2 2020-11-21

- Typescript upgraded to 4.1.2
- Turned on strict ts mode in tsconfig and adapted compiler code accordingly

## 0.2.1 2020-09-07

- Add back setting of disk cache directory for BabelCompiler

## 0.2.0 2020-09-07

- Typescript upgraded to 4.0.2
- Output caching is now enabled by default but can be disabled through by setting METEOR_TYPESCRIPT_CACHE_DISABLED to a truthy value
- Cache files are now stored in .meteor/local/pluginCache/refapp_meteor-typescript/[version]

## 0.1.6 2020-07-31

Added experimental output caching, enabled if TYPESCRIPT_CACHE is set to any truthy value.
The javascript and source maps produced by Typescript will then be stored under .meteor/local/.typescript-incremental/v1cache and updated
based on the incremental build support.

## 0.1.5 2020-07-26

Reinstated change to make watch mode work during meteor test by sending in source path as "path" to addJavaScript.
