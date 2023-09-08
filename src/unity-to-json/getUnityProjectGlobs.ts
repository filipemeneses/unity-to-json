import path from 'path';
import normalize from 'normalize-path';

export const getUnityProjectGlobs = ({
  unityProjectRootFolderPath,

  customSceneFolderPath,
  customAssetsFolderPath,
}: {
  unityProjectRootFolderPath: string,

  customSceneFolderPath?: string,
  customAssetsFolderPath?: string,
}) => {
  const SCENES_FILES_GLOB = normalize(
    `${customSceneFolderPath ?? path.resolve(unityProjectRootFolderPath, './Assets/Scenes')}/**/*.unity`,
  );
  const ASSETS_FOLDER_PATH = customAssetsFolderPath ?? path.resolve(unityProjectRootFolderPath, './Assets');
  const META_FILES_GLOB = normalize(`${ASSETS_FOLDER_PATH}/**/*.meta`);
  const FBX_FILES_GLOB = normalize(`${ASSETS_FOLDER_PATH}/**/*.fbx`);

  return {
    SCENES_FILES_GLOB,
    META_FILES_GLOB,
    FBX_FILES_GLOB,
  };
};
