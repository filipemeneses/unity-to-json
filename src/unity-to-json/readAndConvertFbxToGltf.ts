import convert from 'fbx2gltf';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import os from 'os';
import crypto from 'crypto';

const getFileHash = (filepath: string) => {
  const fd = fs.createReadStream(filepath);

  const hash = crypto.createHash('sha1');
  hash.setEncoding('hex');

  return new Promise((resolve) => {
    fd.on('end', () => {
      hash.end();
      resolve(hash.read());
    });
    fd.on('error', () => resolve(''));
    fd.pipe(hash);
  });
};

const silentlyReadFile = async (filepath: string) => {
  try {
    const result = await fsPromises.readFile(filepath, 'base64');
    return result;
  } catch (e) {
    return '';
  }
};

export const readAndConvertFbxToGltf = async (filepath: string) => {
  const fbxHash = await getFileHash(filepath);
  const glbDestPath = path.resolve(os.tmpdir(), `${fbxHash}.glb`);

  const recentlyGeneratedGlb = await silentlyReadFile(glbDestPath);
  if (recentlyGeneratedGlb) {
    return recentlyGeneratedGlb;
  }

  await convert(filepath, glbDestPath);

  const glbBase64 = await fsPromises.readFile(glbDestPath, 'base64');

  return glbBase64;
};
