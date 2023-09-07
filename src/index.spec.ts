import * as unityToJsonModule from '.';

import {
  parseUnityFile,
} from './unity/parseUnityFile';

describe('unityToJsonModule', () => {
  it('should export `parseUnityFile`', () => {
    expect(unityToJsonModule).toHaveProperty('parseUnityFile');

    expect(unityToJsonModule.parseUnityFile).toEqual(parseUnityFile);
  });
});
