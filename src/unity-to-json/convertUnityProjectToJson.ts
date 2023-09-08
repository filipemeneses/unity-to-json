import { glob } from 'glob';
import { loadAndParseFiles } from './loadAndParseFiles';
import { setFileToGuidMapping } from './mapping/guidMapping';
import { setFileToFilenameMapping } from './mapping/filenameMapping';
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

  const sceneFiles = await loadAndParseFiles(await glob(SCENES_FILES_GLOB));
  const metaFiles = await loadAndParseFiles(await glob(META_FILES_GLOB));
  const fbxFiles = await loadAndParseFiles(await glob(FBX_FILES_GLOB));

  const guidMapping = metaFiles.reduce((obj: any, v: any) => setFileToGuidMapping(obj, v), {});

  const filenameMapping = [
    ...sceneFiles,
    ...metaFiles,
    ...fbxFiles,
  ].reduce((obj, v) => setFileToFilenameMapping(obj, v), {});

  return {
    sceneFiles,
    guidMapping,
    filenameMapping,
  };
};
