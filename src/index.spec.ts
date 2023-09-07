import * as unityToJsonModule from '.';
import { convertFbxToGltf } from './unity-to-json/convertFbxToGltf';

import {
  parseUnityFile,
} from './unity/parseUnityFile';

describe('unityToJsonModule', () => {
  it('should export `parseUnityFile`', () => {
    expect(unityToJsonModule).toHaveProperty('parseUnityFile');
    expect(unityToJsonModule).toHaveProperty('convertFbxToGltf');

    expect(unityToJsonModule.parseUnityFile).toEqual(parseUnityFile);
    expect(unityToJsonModule.convertFbxToGltf).toEqual(convertFbxToGltf);
  });
});
