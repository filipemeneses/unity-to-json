import path from 'path';
import { readAndParseFile } from './readAndParseFile';

describe('readAndParseFile', () => {
  describe('for FBX files', () => {
    it('should convert FBX to GLTF', async () => {
      const fixturePath = path.resolve(__dirname, 'fixture/blasterA.fbx');

      expect(
        readAndParseFile(fixturePath),
      ).resolves.toStartWith('Z2xURgIAAAD8ZgAALBUAAEpTT057CiJhc3NldCI6IHsKImdlbmVyYXRvciI6ICJGQlgyZ2xURiB2MC45LjciLAoid');
    });
  });
  describe('for Unity files', () => {
    it('should parse Unity YAML to JSON', async () => {
      const fixturePath = path.resolve(__dirname, 'fixture/unityScene.unity');
      expect(
        readAndParseFile(fixturePath),
      ).resolves.toBeInstanceOf(Object);
    });
  });
  describe('for Unity meta files ', () => {
    it('should parse Unity YAML to JSON', async () => {
      const fixturePath = path.resolve(__dirname, 'fixture/unityScene.unity.meta');
      expect(
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
