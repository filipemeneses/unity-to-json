import path from 'path';
import { readAndConvertFbxToGltf } from './readAndConvertFbxToGltf';

describe('readAndConvertFbxToGltf', () => {
  it('should convert FBX to GLTF', async () => {
    const fixturePath = path.resolve(__dirname, 'fixture/UnityProject/Assets/blasterB.fbx');

    await expect(
      readAndConvertFbxToGltf(fixturePath),
    ).resolves.toStartWith('Z2xURgIAAADsdAAAOBUAAEpTT057CiJhc3NldCI6IHsKImdlbmVyYXRvciI6ICJGQlgyZ2xURiB2MC45LjciLAoidmVyc2lvbiI6ICIyLjAiCn0sCiJzY2VuZSI6IDAsCiJidWZmZXJzIjogWwp7CiJieXRlTGVuZ3RoIjogMjQ0NzIKfQpdLAoiYnVmZmVyVmlld3MiOiBbCnsKImJ1ZmZlciI6IDAsCiJieXRlTGVuZ3RoIjogMTA5MiwKImJ5dGVPZmZzZXQiOiAwLAoidGFyZ2V0Ijog');
  });
});
