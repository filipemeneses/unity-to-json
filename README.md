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
import { convertUnityProjectToJson, interpretScene } from 'unity-to-json';

const {
  sceneFiles,
  guidMapping,
  filenameMapping,
} = await convertUnityProjectToJson({
  unityProjectRootFolderPath: path.resolve('../path/to/unity-project-root'),
});

const sceneFile = sceneFiles.find((r) => r.filename === 'myScene.unity');

// contains scene represented in JSON with all FBX assets converted to GLTF base64
const scene = await interpretScene({
  sceneData: sceneFile.data,
  guidMapping,
  filenameMapping,
});
```

### Generate files and watch for changes

```js
import path from 'path';
import { convertUnityProjectToJson, interpretScene } from 'unity-to-json';

createUnityProjectToJsonWatcher({
  unityProjectRootFolderPath: path.resolve('../path/to/unity-project-root'),
  sceneFilename: 'SampleScene.unity',
  onSceneChange(context) => {
    // contains scene represented in JSON with all FBX assets converted to GLTF base64
    const scene = await interpretScene(context);
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
