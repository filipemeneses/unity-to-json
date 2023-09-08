import watch from 'glob-watcher';
import path from 'path';
import { getUnityProjectGlobs } from './getUnityProjectGlobs';
import { convertUnityProjectToJson } from './convertUnityProjectToJson';
import { loadAndParseFiles } from './loadAndParseFiles';
import { setFileToFilenameMapping, removeFileToFilenameMapping, getFilenameMappingKey } from './mapping/filenameMapping';
import { setFileToGuidMapping, removeFileToGuidMapping, getGuidMappingKey } from './mapping/guidMapping';

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

  const {
    SCENES_FILES_GLOB,
    META_FILES_GLOB,
    FBX_FILES_GLOB,
  } = getUnityProjectGlobs({
    unityProjectRootFolderPath,
    customSceneFolderPath,
    customAssetsFolderPath,
  });

  let context: {[key: string]: {[key: string]: string}} = {
    filenameMapping: {},
    guidMapping: {},
  };

  const filepathMapping: {
    [key: string]: {
      filenameKey: string,
      guidKey?: string,
    }
  } = {};

  const onFileUnlink = async (filepath: string) => {
    if (!filepathMapping[filepath]) {
      return;
    }

    const { filenameKey, guidKey } = filepathMapping[filepath];

    removeFileToFilenameMapping(context.guidMapping, null, filenameKey);
    removeFileToGuidMapping(context.filenameMapping, null, guidKey);
    delete filepathMapping[filepath];

    onSceneChange(context);
  };

  const onFileAdd = async (metaFilepath: string) => {
    if (!metaFilepath.endsWith('meta')) {
      return;
    }

    const filepath = metaFilepath.slice(0, metaFilepath.length - 5);
    const [file] = await loadAndParseFiles([
      filepath,
    ]);
    const [fileMeta] = await loadAndParseFiles([
      metaFilepath,
    ]);

    filepathMapping[metaFilepath] = {
      filenameKey: getFilenameMappingKey(fileMeta),
      guidKey: getGuidMappingKey(fileMeta),
    };
    setFileToGuidMapping(context.guidMapping, fileMeta);
    setFileToFilenameMapping(context.filenameMapping, fileMeta);

    filepathMapping[filepath] = {
      filenameKey: getFilenameMappingKey(file),
    };
    setFileToFilenameMapping(context.filenameMapping, file);

    onSceneChange(context);
  };
  const onFileChange = async (filepath: string) => {
    if (filepath.endsWith('meta')) {
      return;
    }

    const [file] = await loadAndParseFiles([
      filepath,
    ]);

    setFileToFilenameMapping(context.filenameMapping, file);

    if (path.basename(filepath) !== sceneFilename) {
      return;
    }

    context.sceneData = file.data;

    onSceneChange(context);
  };

  const watcher = watch([
    SCENES_FILES_GLOB,
    META_FILES_GLOB,
    FBX_FILES_GLOB,
  ], {
    delay: 0,
  });

  const starterContext = await convertUnityProjectToJson({
    unityProjectRootFolderPath,

    customSceneFolderPath,
    customAssetsFolderPath,
  });

  const { sceneFiles, guidMapping, filenameMapping } = starterContext;

  const sceneData = sceneFiles.find((s: any) => (
    s.name === sceneFilename || s.filename === sceneFilename
  ))?.data;

  if (!sceneData) {
    throw new Error(`Missing scene file. "${sceneFilename}" not found. Current scenes listed: ${JSON.stringify(sceneFiles.map((f: any) => f.filename))}`);
  }

  context = {
    sceneData,
    guidMapping,
    filenameMapping,
  };

  onSceneChange(context);

  watcher.on('change', onFileChange);
  watcher.on('add', onFileAdd);
  watcher.on('unlink', onFileUnlink);
};
