import path from 'path';
import { UnityOrMetaFile } from '../unity/parseUnityFile';
import { readAndParseFile } from './readAndParseFile';

export const loadAndParseFiles = (files: string[]): Promise<any | UnityOrMetaFile> => Promise.all(
  files.map(async (filepath: string) => {
    const filename = path.basename(filepath);
    const [name, ext] = filename.split('.');
    return {
      name,
      ext,
      filename,
      data: await readAndParseFile(filepath),
    };
  }),
);
