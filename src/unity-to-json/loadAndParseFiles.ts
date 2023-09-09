import path from 'path';
import { UnityOrMetaFile } from '../unity/parseUnityFile';
import { readAndParseFile } from './readAndParseFile';

export const loadAndParseFiles = (
  unityProjectRootFolderPath: string,
  files: string[],
): Promise<any | UnityOrMetaFile> => Promise.all(
  files.map(async (filepath: string) => ({
    filepath: path.relative(unityProjectRootFolderPath, filepath),
    data: await readAndParseFile(filepath),
  })),
);
