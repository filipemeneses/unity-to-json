import watch from 'glob-watcher';
import path from 'path';
import { getUnityProjectGlobs } from './getUnityProjectGlobs';
import { convertUnityProjectToJson } from './convertUnityProjectToJson';
import { loadAndParseFiles } from './loadAndParseFiles';
import { toUnixPath } from './toUnixPath';

export const createUnityProjectToJsonWatcher = async ({
  unityProjectRootFolderPath,
  sceneFilename,

  customSceneFolderPath,
  customAssetsFolderPath,

  onSceneChange,
}: {
  unityProjectRootFolderPath: string,
  sceneFilename: string,

  customSceneFolderPath?: string,
  customAssetsFolderPath?: string,

  // eslint-disable-next-line no-unused-vars
  onSceneChange: (e: any) => any
}) => {
  if (!onSceneChange) {
    throw new Error('Missing onSceneChange function');
  }

  const context = await convertUnityProjectToJson({
    unityProjectRootFolderPath,

    customSceneFolderPath,
    customAssetsFolderPath,
  });

  const sceneFile = context.files.find((f) => path.basename(f.filepath) === sceneFilename);

  if (!sceneFile) {
    throw new Error(`Missing scene file. "${sceneFilename}" not found. Current possible scene files listed: ${JSON.stringify(context.files.filter((f) => f.filepath.endsWith('unity')).map((f: any) => f.filepath))}`);
  }

  const {
    SCENES_FILES_GLOB,
    META_FILES_GLOB,
    FBX_FILES_GLOB,
  } = getUnityProjectGlobs({
    unityProjectRootFolderPath,
    customSceneFolderPath,
    customAssetsFolderPath,
  });

  const onFileUnlink = async (filepath: string) => {
    context.files = context.files.filter((f) => toUnixPath(filepath).endsWith(f.filepath));

    await onSceneChange(context);
  };

  const onFileAdd = async (metaFilepath: string) => {
    if (!metaFilepath.endsWith('meta')) {
      return;
    }

    const filepath = metaFilepath.slice(0, metaFilepath.length - 5);
    const newFiles = await loadAndParseFiles(unityProjectRootFolderPath, [
      filepath,
      metaFilepath,
    ]);

    context.files = context.files.concat(newFiles);

    await onSceneChange(context);
  };
  const onFileChange = async (filepath: string) => {
    if (filepath.endsWith('meta')) {
      return;
    }

    const [file] = await loadAndParseFiles(unityProjectRootFolderPath, [
      filepath,
    ]);

    const localFile = context.files.find((f) => toUnixPath(filepath).endsWith(f.filepath));
    localFile.data = file.data;

    if (path.basename(filepath) !== sceneFilename) {
      return;
    }

    await onSceneChange(context);
  };

  const watcher = watch([
    SCENES_FILES_GLOB,
    META_FILES_GLOB,
    FBX_FILES_GLOB,
  ], {
    delay: 0,
  });

  await onSceneChange(context);

  watcher.on('change', onFileChange);
  watcher.on('add', onFileAdd);
  watcher.on('unlink', onFileUnlink);
};
