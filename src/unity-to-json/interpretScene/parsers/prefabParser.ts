import { UnitySceneBlockParser } from './types';
/* eslint-disable camelcase */
export const prefabParser: UnitySceneBlockParser = {
  type: 'prefab',
  isParserType(block: any) {
    return !!block.PrefabInstance;
  },
  parseBlock(block: any, { guidMapping, filenameMapping, addReference }) {
    const { type } = block;
    const { m_SourcePrefab, m_Modification } = block.PrefabInstance;
    const { guid } = m_SourcePrefab;
    const { name } = guidMapping[guid];
    const { data } = filenameMapping[name];

    // eslint-disable-next-line no-param-reassign
    addReference(guid, data);

    if (!m_Modification) {
      return null;
    }

    const { m_Modifications } = m_Modification;
    const instanceProps = m_Modifications.reduce((obj: any, modification: any) => {
      // eslint-disable-next-line no-param-reassign
      obj[
        modification.propertyPath
      ] = modification.value;

      return obj;
    }, { name, type });

    return {
      sourceGuid: guid,
      props: instanceProps,
    };
  },
};
