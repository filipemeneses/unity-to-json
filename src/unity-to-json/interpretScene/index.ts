/* eslint-disable camelcase */
import { parsers } from './parsers';
import { UnitySceneBlockParser } from './parsers/types';

export const interpretScene = async ({
  sceneData,
  guidMapping,
  filenameMapping,

  blockParsers = parsers,
  extraParsers = [],
}: {
  sceneData: any,
  guidMapping: any,
  filenameMapping: any,

  blockParsers?: UnitySceneBlockParser[],
  extraParsers?: UnitySceneBlockParser[],
}) => {
  if (!sceneData || !Object.keys(sceneData)?.length) return {};
  if (!guidMapping || !Object.keys(guidMapping)?.length) return {};
  if (!filenameMapping || !Object.keys(filenameMapping)?.length) return {};

  const fileIdMapping = sceneData.reduce((mapping: {[key: string]: any}, nextItem: any) => {
    // eslint-disable-next-line no-param-reassign
    mapping[nextItem.fileId] = nextItem;
    return mapping;
  }, {});

  const instancesReferences: {[key: string]: any} = {};

  const addReference = (key: string, value: any) => {
    instancesReferences[key] = value;
  };

  const allParsers = blockParsers.concat(extraParsers);

  const instancesParsed = (
    await Promise.all(
      sceneData.map(async (block: any) => {
        const parser = allParsers.find((p) => p.isParserType(block));

        if (!parser) {
          return Promise.resolve(null);
        }

        // eslint-disable-next-line no-param-reassign
        block.type = parser.type;

        return (
          parser.parseBlock(block, {
            guidMapping,
            filenameMapping,
            fileIdMapping,
            addReference,
          })
        );
      }),
    )
  ).filter(Boolean);

  const threejsParsable = {
    instances: instancesParsed,
    references: instancesReferences,
  };

  return threejsParsable;
};
