import path from 'path';
import { glob } from 'glob';
import { readAndParseFile } from './readAndParseFile';
import { UnityOrMetaFile } from '../unity/parseUnityFile';

const relativeWindowsSafeUrl = (url: string) => path.resolve(__dirname, url).replace(/\\/g, '/');

const loadAndParseFiles = (files: string[]): Promise<any | UnityOrMetaFile> => Promise.all(
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

export const convertUnityProjectToJson = async ({
  unityProjectRootFolderPath,
}: {
  unityProjectRootFolderPath: string,
}) => {
  const SCENES_FILES_GLOB = relativeWindowsSafeUrl(
    `${path.resolve(unityProjectRootFolderPath, './Assets/Scenes')}/**/*.unity`,
  );
  const META_FILES_GLOB = relativeWindowsSafeUrl(
    `${path.resolve(unityProjectRootFolderPath, './Assets')}/**/*.meta`,
  );
  const FBX_FILES_GLOB = relativeWindowsSafeUrl(
    `${path.resolve(unityProjectRootFolderPath, './Assets')}/**/*.fbx`,
  );

  const sceneFiles = await loadAndParseFiles(await glob(SCENES_FILES_GLOB));
  const metaFiles = await loadAndParseFiles(await glob(META_FILES_GLOB));
  const fbxFiles = await loadAndParseFiles(await glob(FBX_FILES_GLOB));

  const guidMapping = metaFiles.reduce((guidMap: {[k: string]: any}, metaFile: any) => {
    const guid = metaFile.data.guid || metaFile.data[0]?.guid;

    // eslint-disable-next-line no-param-reassign
    guidMap[guid] = metaFile;

    return guidMap;
  }, {});

  const filenameMapping = [
    ...sceneFiles,
    ...metaFiles,
    ...fbxFiles,
  ].reduce((filenameMap, contents) => {
    const { name } = contents;

    // eslint-disable-next-line no-param-reassign
    filenameMap[name] = contents;

    return filenameMap;
  }, {});

  return {
    sceneFiles,
    guidMapping,
    filenameMapping,
  };
};
