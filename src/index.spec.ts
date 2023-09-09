import * as unityToJsonModule from '.';
import { readAndConvertFbxToGltf } from './unity-to-json/readAndConvertFbxToGltf';
import { convertUnityProjectToJson } from './unity-to-json/convertUnityProjectToJson';
import { createUnityProjectToJsonWatcher } from './unity-to-json/createUnityProjectToJsonWatcher';

import { parseUnityFile } from './unity/parseUnityFile';

describe('unityToJsonModule', () => {
  it('should export `parseUnityFile`', () => {
    expect(unityToJsonModule).toHaveProperty('parseUnityFile');
    expect(unityToJsonModule).toHaveProperty('readAndConvertFbxToGltf');
    expect(unityToJsonModule).toHaveProperty('convertUnityProjectToJson');
    expect(unityToJsonModule).toHaveProperty('createUnityProjectToJsonWatcher');

    expect(unityToJsonModule.parseUnityFile).toEqual(parseUnityFile);
    expect(unityToJsonModule.readAndConvertFbxToGltf).toEqual(readAndConvertFbxToGltf);
    expect(unityToJsonModule.convertUnityProjectToJson).toEqual(convertUnityProjectToJson);

    expect(unityToJsonModule.createUnityProjectToJsonWatcher)
      .toEqual(createUnityProjectToJsonWatcher);
  });
});
