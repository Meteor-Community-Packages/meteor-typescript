# Changes

## 0.3.18 2023-11-25

- Typescript upgraded to 5.3.2

## 0.3.17 2023-08-25

- Typescript upgraded to 5.2.2

## 0.3.16 2023-06-07

- Typescript upgraded to 5.1.3

## 0.3.15 2023-04-02

- No longer enforces source maps and adds support for an environment variable TYPESCRIPT_SOURCEMAP for overriding the setting in tsconfig.json

## 0.3.14 2023-03-20

- Upgrade because I aborted the previous deploy which seems to have made it corrupt and I don’t know how to upgrade it.

## 0.3.13 2023-03-20

- Typescript upgraded to 5.0.2

## 0.3.12 2022-12-29

- Adding support for environment variable TYPESCRIPT_FAIL_ON_COMPILATION_ERRORS

## 0.3.11 2022-12-03

- Typescript upgraded to 4.9.3

## 0.3.10 2022-09-07

- Typescript upgraded to 4.8.2

## 0.3.9 2022-06-08

- Typescript upgraded to 4.7.3

## 0.3.8 2022-03-08

- Typescript upgraded to 4.6.2

## 0.3.7 2021-11-30

- Typescript upgraded to 4.5.2

## 0.3.6 2021-09-01

- Typescript upgraded to 4.4.2

## 0.3.5 2021-05-29

- Typescript upgraded to 4.3.2

## 0.3.4 2021-05-29
- Broken publish

## 0.3.3 2021-02-25

- Typescript upgraded to 4.2.2

## 0.3.2 2020-12-08

- Relax the meteor core typescript dependency so the compiler works with meteor 1.12

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
