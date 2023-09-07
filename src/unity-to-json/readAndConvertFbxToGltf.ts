import convert from 'fbx2gltf';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

export const readAndConvertFbxToGltf = async (filepath: string) => {
  const glbDestPath = path.resolve(os.tmpdir(), `${filepath}.glb`);
  await convert(filepath, glbDestPath);
  const glbBase64 = await fs.readFile(glbDestPath, 'base64');
  await fs.unlink(glbDestPath);
  return glbBase64;
};
