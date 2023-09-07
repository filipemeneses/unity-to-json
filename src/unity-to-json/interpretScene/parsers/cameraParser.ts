import { UnitySceneBlockParser } from './types';

export const cameraParser: UnitySceneBlockParser = {
  type: 'camera',
  isParserType(block) {
    return block?.GameObject?.m_TagString === 'MainCamera';
  },
  parseBlock(block, { fileIdMapping }) {
    const { type } = block;

    const components = block.GameObject.m_Component.map((
      ({ component }: { component: any }) => fileIdMapping[component.fileID]
    ));

    let props = {};

    components.forEach((component: any) => {
      const isTransform = !!component?.Transform;
      if (isTransform) {
        props = {
          ...props,
          transform: component.Transform,
        };
      }

      const isCamera = !!component?.Camera;
      if (isCamera) {
        props = {
          ...props,
          camera: component.Camera,
        };
      }
    });

    return {
      props: {
        type,
        name: block.m_Name,
        ...props,
      },
    };
  },
};
