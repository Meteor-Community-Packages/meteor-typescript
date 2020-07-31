# Changes

## 0.1.6 2020-07-31
Added experimental output caching, enabled if TYPESCRIPT_CACHE is set to any truthy value.
The javascript and source maps produced by Typescript will then be stored under .meteor/local/v1cache and updated
based on the incremental build support.

## 0.1.5 2020-07-26
Reinstated change to make watch mode work during meteor test by sending in source path as "path" to addJavaScript.