import path from 'path';
import { convertFbxToGltf } from './convertFbxToGltf';

describe('convertFbxToGltf', () => {
  it('should convert FBX to GLTF', async () => {
    const fixturePath = path.resolve(__dirname, 'fixture/blasterA.fbx');

    await expect(
      convertFbxToGltf(fixturePath),
    ).resolves.toStartWith('Z2xURgIAAAD8ZgAALBUAAEpTT057CiJhc3NldCI6IHsKImdlbmVyYXRvciI6ICJGQlgyZ2xURiB2MC45LjciLAoid');
  });
});
