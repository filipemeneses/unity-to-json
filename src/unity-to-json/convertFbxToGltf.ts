import convert from 'fbx2gltf';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

export const convertFbxToGltf = async (filepath: string) => {
  const glbDestPath = path.resolve(os.tmpdir(), `${filepath}.glb`);
  const destPath = await convert(filepath, glbDestPath);
  const glbBase64 = await fs.readFile(destPath, 'base64');
  await fs.unlink(destPath);
  return glbBase64;
};
