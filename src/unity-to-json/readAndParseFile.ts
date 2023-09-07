import fs from 'fs/promises';
import { parseUnityFile } from '../unity/parseUnityFile';
import { readAndConvertFbxToGltf } from './readAndConvertFbxToGltf';

export const readAndParseFile = async (filepath: string) => {
  if (filepath.endsWith('unity') || filepath.endsWith('meta')) {
    return parseUnityFile(
      await fs.readFile(filepath, 'utf8'),
    );
  }

  if (filepath.endsWith('fbx')) {
    return readAndConvertFbxToGltf(
      filepath,
    );
  }

  return fs.readFile(filepath, 'base64');
};
