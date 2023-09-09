# unity-to-json

Node.js package to convert Unity scene and FBX files into JSON

---

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]


## Install

```bash
npm install unity-to-json
```

```bash
yarn add unity-to-json
```

## Usage

### Generate files once

```js
import path from 'path';
import { convertUnityProjectToJson } from 'unity-to-json';

const {
  version,
  files
} = await convertUnityProjectToJson({
  unityProjectRootFolderPath: path.resolve('../path/to/unity-project-root'),
});
```

### Generate files and watch for changes

```js
import path from 'path';
import { convertUnityProjectToJson, interpretScene } from 'unity-to-json';

createUnityProjectToJsonWatcher({
  unityProjectRootFolderPath: path.resolve('../path/to/unity-project-root'),
  sceneFilename: 'SampleScene.unity',
  onSceneChange({ version , files }) => {
    // files = all FBX, Unity, Meta files
  }
});
```

## Examples

- [Svelte + Vite + Typescript + Three.js](https://github.com/filipemeneses/svelte-vite-unity-threejs)


[build-img]:https://github.com/filipemeneses/unity-to-json/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/filipemeneses/unity-to-json/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/unity-to-json
[npm-img]:https://img.shields.io/npm/v/unity-to-json
[npm-url]:https://www.npmjs.com/package/unity-to-json
[issues-img]:https://img.shields.io/github/issues/filipemeneses/unity-to-json
[issues-url]:https://github.com/filipemeneses/unity-to-json/issues
[codecov-img]:https://codecov.io/gh/filipemeneses/unity-to-json/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/filipemeneses/unity-to-json
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
