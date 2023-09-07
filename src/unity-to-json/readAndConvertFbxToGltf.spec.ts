import path from 'path';
import { readAndConvertFbxToGltf } from './readAndConvertFbxToGltf';

describe('readAndConvertFbxToGltf', () => {
  it('should convert FBX to GLTF', async () => {
    const fixturePath = path.resolve(__dirname, 'fixture/blasterA.fbx');

    await expect(
      readAndConvertFbxToGltf(fixturePath),
    ).resolves.toStartWith('Z2xURgIAAAD8ZgAALBUAAEpTT057CiJhc3NldCI6IHsKImdlbmVyYXRvciI6ICJGQlgyZ2xURiB2MC45LjciLAoid');
  });
});
