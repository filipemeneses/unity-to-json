import path from 'path';
import { UnityOrMetaFile } from '../unity/parseUnityFile';
import { readAndParseFile } from './readAndParseFile';
import { toUnixPath } from './toUnixPath';

export const loadAndParseFiles = (
  unityProjectRootFolderPath: string,
  files: string[],
): Promise<any | UnityOrMetaFile> => Promise.all(
  files.map(async (filepath: string) => ({
    filepath: toUnixPath(path.relative(unityProjectRootFolderPath, filepath)),
    data: await readAndParseFile(filepath),
  })),
);
