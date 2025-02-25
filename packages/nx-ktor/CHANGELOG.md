## [3.2.1](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v3.2.0...nx-ktor/v3.2.1) (2023-12-12)


### Bug Fixes

* **nx-spring-boot:** fix generated parent `pom.xml`  of a multi-module project was not valid ([02b1e2d](https://github.com/tinesoft/nxrocks/commit/02b1e2ddec341ca611fe73c497703a33f96ab156))

# [3.2.0](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v3.1.1...nx-ktor/v3.2.0) (2023-12-12)


### Features

* add `projectNameAndRootFormat` option to better control where projects are generated ([5c449b5](https://github.com/tinesoft/nxrocks/commit/5c449b58265295b953a355890a7102b20c3ab094))
* add migrations to automate making `serve`-like targets depend on `^install` ([f3449ea](https://github.com/tinesoft/nxrocks/commit/f3449ea8a2843d4b763dd9c361e72e034fb84982))
* make `serve`-like targets depend on `^install` to automatically install dependencies first ([c85b7a6](https://github.com/tinesoft/nxrocks/commit/c85b7a6c398a849cddb403a8013c68723d47f9b9))

## [3.1.1](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v3.1.0...nx-ktor/v3.1.1) (2023-11-25)


### Bug Fixes

* **common-jvm:** fix bug when checking if an  xml node is empty ([9f956a0](https://github.com/tinesoft/nxrocks/commit/9f956a04b7234319ee7be3e02c1c5f871050de5b))

# [3.1.0](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v3.0.3...nx-ktor/v3.1.0) (2023-11-22)


### Bug Fixes

* **common-jvm:** improve utility method to disable a Gradle plugin ([8e1e5b9](https://github.com/tinesoft/nxrocks/commit/8e1e5b9fc9b9e07fd0c8f9d2cbfc31a809416873))


### Features

* make `install` target depend on the one from the dependency ([b2878dc](https://github.com/tinesoft/nxrocks/commit/b2878dca47f660c8faa9e1caf0733550abda17cb))

## [3.0.3](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v3.0.2...nx-ktor/v3.0.3) (2023-11-16)


### Bug Fixes

* hide `preset` generators from `Nx Console` and improve generators decription ([c868384](https://github.com/tinesoft/nxrocks/commit/c868384a03963c8636f5fe161d619ba4f32324c9))

## [3.0.2](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v3.0.1...nx-ktor/v3.0.2) (2023-10-31)


### Bug Fixes

* **common-jvm:** fix parent module not found when `runFromParentModule` flag is `true` ([840f8f6](https://github.com/tinesoft/nxrocks/commit/840f8f6dfa4c4d2a69c1f6d0e7b7ba472862050d))

## [3.0.1](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v3.0.0...nx-ktor/v3.0.1) (2023-10-28)


### Bug Fixes

* **common:** simplify the path to common utils ([c87be7f](https://github.com/tinesoft/nxrocks/commit/c87be7f883053cd31cd3015712b6929ddea4fdc7))
* **nx-ktor:** update the URL to generate Ktor projects ([3774c8a](https://github.com/tinesoft/nxrocks/commit/3774c8ae249ad8bc24c3fd9fe12f53e260eb847e))
* remove explicit dependency on `@nx/devkit` (inherited from `common`) ([a1d44c9](https://github.com/tinesoft/nxrocks/commit/a1d44c9eed3cf73216aaf70c9f47c9eef0753215))

# [3.0.0](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v2.1.0...nx-ktor/v3.0.0) (2023-10-22)


### Bug Fixes

* **common:**  update dependencies used by the `common` module ([e78ae32](https://github.com/tinesoft/nxrocks/commit/e78ae32a157d7823aab64454ccd637a4f4a505dc))


### Features

* **common-jvm:** move common JVM-related utils to a dedicated package ([1bf12fb](https://github.com/tinesoft/nxrocks/commit/1bf12fb38650261584e7face404f5477470dc40d))
* **common:** allow setting cacheable operations when add the plugin to `nx.json` ([9fb5177](https://github.com/tinesoft/nxrocks/commit/9fb51770c991912a6c8d9bc1b99af4f171f1df58))
* **nx-ktor:** add `install`  target to cacheable operations ([1e37b6c](https://github.com/tinesoft/nxrocks/commit/1e37b6c9993f6902d7c4b392255e4b83918eb839))
* **nx-ktor:** add migration to add `install` target in cacheable operations ([bb13ccb](https://github.com/tinesoft/nxrocks/commit/bb13ccb93e40200d9966dd7d243d10779532ff9b))
* update to Nx workspace `v17.x.x` ([c5b4ef3](https://github.com/tinesoft/nxrocks/commit/c5b4ef3db2bb8b5e5b2e09a09892a09c4c52b017)), closes [#195](https://github.com/tinesoft/nxrocks/issues/195)


### BREAKING CHANGES

* Nx `v17.x.x` is now the minimum required version to use the plugin

# [2.1.0](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v2.0.5...nx-ktor/v2.1.0) (2023-10-08)


### Bug Fixes

* **common:** fix ProjectGraph for `Gradle` multi-module projects ([0ef0d17](https://github.com/tinesoft/nxrocks/commit/0ef0d1736fe100002ab2d547b830ab9de0e42a19))


### Features

* **common-cli:** add `common-cli` to share code among our `create-*` CLI packages ([bcb5fd2](https://github.com/tinesoft/nxrocks/commit/bcb5fd2a0cda945b708fb0e42195bde82cac47c7))
* **common:** add utilities for multi-module `maven`/`gradle` projects ([f2e4939](https://github.com/tinesoft/nxrocks/commit/f2e49396bd5fec312c401040c5511567a092a18c))
* **common:** add utilities to add `maven`/`gradle` modules ([2237201](https://github.com/tinesoft/nxrocks/commit/2237201646307ade853c180f5b25e9e2e56e5ad7))
* **create-nx-ktor:** add custom CLI to create Ktor projects ([882d382](https://github.com/tinesoft/nxrocks/commit/882d3826e4bc6ec3ed386ded3cc0d752bd5c4077))
* **create-nx-spring-boot:** add custom CLI to create Spring Boot projects ([32ca53c](https://github.com/tinesoft/nxrocks/commit/32ca53c61cc1c25027d72434e13b71ec1a100acb))
* **nx-ktor:** add support for creating multi-modules projects ([b1ad355](https://github.com/tinesoft/nxrocks/commit/b1ad35545774ec1d1937608f25a10c41303595db))
* **nx-spring-boot:** add support for creating multi-modules projects ([7c2de5a](https://github.com/tinesoft/nxrocks/commit/7c2de5a07f92fad481f3bda5ce61a71ba78c89c0))
* update dependencies and fix lint issues ([cfac383](https://github.com/tinesoft/nxrocks/commit/cfac383c7d2aebd329a98f410df66b726b64d28a))

## [2.0.5](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v2.0.4...nx-ktor/v2.0.5) (2023-05-25)


### Bug Fixes

* **nx-ktor:** add missing executors in the `executors.json` file ([ef6aed5](https://github.com/tinesoft/nxrocks/commit/ef6aed5c1d221bc1ee59f7e07883da582cd8303f))
* **nx-ktor:** remove `library` project type in `project` generator ([c5c47c7](https://github.com/tinesoft/nxrocks/commit/c5c47c7a2cfb34647fce43a49809e75e7cc243f5))

## [2.0.4](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v2.0.3...nx-ktor/v2.0.4) (2023-05-25)


### Bug Fixes

* **nx-ktor:** update and align default versions with  `Ktor Starter` ([134c709](https://github.com/tinesoft/nxrocks/commit/134c709cf5e944c6a37fa464110ab1b21c8b3506))

## [2.0.3](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v2.0.2...nx-ktor/v2.0.3) (2023-05-12)


### Bug Fixes

* **common:** fix dependency graph generation failure on `windows` OS ([26ef7c4](https://github.com/tinesoft/nxrocks/commit/26ef7c476cd4bc158b4df818a84be428a25c6adc)), closes [#170](https://github.com/tinesoft/nxrocks/issues/170)
* **common:** fix deprecated usage of dependency graph API ([badf089](https://github.com/tinesoft/nxrocks/commit/badf089040b31682df94c97818bf7e96201d42f9))

## [2.0.2](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v2.0.1...nx-ktor/v2.0.2) (2023-05-06)


### Bug Fixes

* loosen `peerDependencies` on `@nx/*` to support v16.0.0 AND higher ([fb2f8df](https://github.com/tinesoft/nxrocks/commit/fb2f8df907fe9a498cc310862f08571e6c87dd6b))

## [2.0.1](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v2.0.0...nx-ktor/v2.0.1) (2023-05-04)


### Bug Fixes

* **common:** bump version of `@nxrocks/common` for Nx 16 support ([980a86f](https://github.com/tinesoft/nxrocks/commit/980a86fe0ee16e7d0efb5578b3eef45a00ac9654)), closes [#169](https://github.com/tinesoft/nxrocks/issues/169)

# [2.0.0](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v1.0.1...nx-ktor/v2.0.0) (2023-05-03)


### Features

* update to Nx workspace `v16.0.0` ([ab11ea8](https://github.com/tinesoft/nxrocks/commit/ab11ea89becafa9555f43527c95167827089a6e6))


### BREAKING CHANGES

* Nx `v16.x.x` is now the minimum required version to use the plugin

## [1.0.1](https://github.com/tinesoft/nxrocks/compare/nx-ktor/v1.0.0...nx-ktor/v1.0.1) (2023-04-11)


### Bug Fixes

* **nx-ktor:** fix wrong `package.json` shipped ([cbfc734](https://github.com/tinesoft/nxrocks/commit/cbfc734762fee85e13583f2975eae720a371c9fd))

# 1.0.0 (2023-04-10)


### Features

* **nx-ktor:** add `nx-ktor` plugin ([cb74a79](https://github.com/tinesoft/nxrocks/commit/cb74a79d23a79b1eda79c2555d092d8151cf7e49))
