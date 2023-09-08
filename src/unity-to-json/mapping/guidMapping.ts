export const getGuidMappingKey = (file: any) => file?.data?.guid || file?.data?.[0]?.guid;

export const setFileToGuidMapping = (
  guidMap: {[k: string]: any},
  file: any,
  overrideKey?: string,
) => {
  // eslint-disable-next-line no-param-reassign
  guidMap[overrideKey || getGuidMappingKey(file)] = file;

  return guidMap;
};

export const removeFileToGuidMapping = (
  guidMap: {[k: string]: any},
  file: any,
  overrideKey?: string,
) => {
  // eslint-disable-next-line no-param-reassign
  delete guidMap[overrideKey || getGuidMappingKey(file)];

  return guidMap;
};
