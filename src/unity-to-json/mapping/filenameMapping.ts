export const getFilenameMappingKey = (file: any) => {
  const { name } = file;
  return name;
};

export const setFileToFilenameMapping = (
  filenameMap: {[k: string]: any},
  file: any,
  overrideKey?: string,
) => {
  // eslint-disable-next-line no-param-reassign
  filenameMap[overrideKey || getFilenameMappingKey(file)] = file;

  return filenameMap;
};

export const removeFileToFilenameMapping = (
  filenameMap: {[k: string]: any},
  file: any,
  overrideKey?: string,
) => {
  // eslint-disable-next-line no-param-reassign
  delete filenameMap[overrideKey || getFilenameMappingKey(file)];

  return filenameMap;
};
