import path from 'path';
import { readAndParseFile } from './readAndParseFile';

describe('readAndParseFile', () => {
  describe('for FBX files', () => {
    it('should convert FBX to GLTF', async () => {
      const fixturePath = path.resolve(__dirname, 'fixture/UnityProject/Assets/blasterB.fbx');

      await expect(
        readAndParseFile(fixturePath),
      ).resolves.toStartWith('Z2xURgIAAADsdAAAOBUAAEpTT057CiJhc3NldCI6IHsKImdlbmVyYXRvciI6ICJGQlgyZ2xURiB2MC45LjciLAoidmVyc2lvbiI6ICIyLjAiCn0sCiJzY2VuZSI6IDAsCiJidWZmZXJzIjogWwp7CiJieXRlTGVuZ3RoIjogMjQ0NzIKfQpdLAoiYnVmZmVyVmlld3MiOiBbCnsKImJ1ZmZlciI6IDAsCiJieXRlTGVuZ3RoIjogMTA5MiwKImJ5dGVPZmZzZXQiOiAwLAoidGFyZ2V0Ijog');
    });
  });
  describe('for Unity files', () => {
    it('should parse Unity YAML to JSON', async () => {
      const fixturePath = path.resolve(__dirname, 'fixture/UnityProject/Assets/Scenes/SampleScene.unity');
      await expect(
        readAndParseFile(fixturePath),
      ).resolves.toBeInstanceOf(Object);
    });
  });
  describe('for Unity meta files ', () => {
    it('should parse Unity YAML to JSON', async () => {
      const fixturePath = path.resolve(__dirname, 'fixture/UnityProject/Assets/Scenes/SampleScene.unity.meta');
      await expect(
        readAndParseFile(fixturePath),
      ).resolves.toEqual([
        {
          fileId: '2',
          type: 'fileFormatVersion:',
          guid: '9fc0d4010bbf28b4594072e72b8655ab',
          DefaultImporter: {
            externalObjects: {},
            userData: null,
            assetBundleName: null,
            assetBundleVariant: null,
          },
        },
      ]);
    });
  });
  describe('for anything except fbx, meta, unity', () => {
    it('should return contents as base64', () => {
      const fixturePath = path.resolve(__dirname, 'fixture/test.txt');
      expect(
        readAndParseFile(fixturePath),
      ).resolves.toEqual('YQ==');
    });
  });
});
