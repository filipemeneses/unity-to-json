import { glob } from 'glob';
import { loadAndParseFiles } from './loadAndParseFiles';
import { getUnityProjectGlobs } from './getUnityProjectGlobs';

export const convertUnityProjectToJson = async ({
  unityProjectRootFolderPath,

  customSceneFolderPath,
  customAssetsFolderPath,
}: {
  unityProjectRootFolderPath: string,

  customSceneFolderPath?: string,
  customAssetsFolderPath?: string,
}) => {
  const {
    SCENES_FILES_GLOB,
    META_FILES_GLOB,
    FBX_FILES_GLOB,
  } = getUnityProjectGlobs({
    unityProjectRootFolderPath,

    customSceneFolderPath,
    customAssetsFolderPath,
  });

  const sceneFiles = await loadAndParseFiles(
    unityProjectRootFolderPath,
    await glob(SCENES_FILES_GLOB),
  );
  const metaFiles = await loadAndParseFiles(
    unityProjectRootFolderPath,
    await glob(META_FILES_GLOB),
  );
  const fbxFiles = await loadAndParseFiles(
    unityProjectRootFolderPath,
    await glob(FBX_FILES_GLOB),
  );

  const files = [
    ...sceneFiles,
    ...metaFiles,
    ...fbxFiles,
  ];

  return {
    version: 'unity-to-json@v2',
    files,
  };
};
