/* eslint-disable no-underscore-dangle */

import fs from 'fs/promises';
import path from 'path';
import { interpretScene } from '.';

describe('interpretScene', () => {
  let unityProject: any;

  beforeAll(async () => {
    unityProject = JSON.parse(
      (
        await fs.readFile(path.resolve(
          __dirname,
          './fixture/unityProject.json',
        ))
      ).toString(),
    );
  });

  it('should parse known blocks in a scene', async () => {
    await expect(
      interpretScene({
        sceneData: unityProject.sceneFiles[0].data,
        guidMapping: unityProject.guidMapping,
        filenameMapping: unityProject.filenameMapping,
      }),
    ).resolves.toEqual({
      instances: [
        {
          props: {
            'm_LocalEulerAnglesHint.x': '14.036',
            'm_LocalEulerAnglesHint.y': '-38.198',
            'm_LocalEulerAnglesHint.z': '-8.526',
            'm_LocalPosition.x': '0.068',
            'm_LocalPosition.y': '0.184',
            'm_LocalPosition.z': '-1.825',
            'm_LocalRotation.w': '0.93825066',
            'm_LocalRotation.x': '0.13927582',
            'm_LocalRotation.y': '-0.3152732',
            'm_LocalRotation.z': '-0.02984565',
            m_Name: 'blasterB',
            m_RootOrder: '1',
            name: 'blasterB',
            type: 'prefab',
          },
          sourceGuid: 'de54e5715f7b258448ead4fd3567c9a0',
        },
        {
          props: {
            camera: {
              'far clip plane': '1000',
              'field of view': '30',
              m_AllowDynamicResolution: '0',
              m_AllowMSAA: '1',
              m_BackGroundColor: {
                a: '0',
                b: '0.4745098',
                g: '0.3019608',
                r: '0.19215687',
              },
              m_ClearFlags: '1',
              m_CorrespondingSourceObject: {
                fileID: '0',
              },
              m_CullingMask: {
                m_Bits: '4294967295',
                serializedVersion: '2',
              },
              m_Depth: '-1',
              m_Enabled: '1',
              m_FOVAxisMode: '0',
              m_FocalLength: '50',
              m_ForceIntoRT: '0',
              m_GameObject: {
                fileID: '963194225',
              },
              m_GateFitMode: '2',
              m_HDR: '1',
              m_LensShift: {
                x: '0',
                y: '0',
              },
              m_NormalizedViewPortRect: {
                height: '1',
                serializedVersion: '2',
                width: '1',
                x: '0',
                y: '0',
              },
              m_ObjectHideFlags: '0',
              m_OcclusionCulling: '1',
              m_PrefabAsset: {
                fileID: '0',
              },
              m_PrefabInstance: {
                fileID: '0',
              },
              m_RenderingPath: '-1',
              m_SensorSize: {
                x: '36',
                y: '24',
              },
              m_StereoConvergence: '10',
              m_StereoSeparation: '0.022',
              m_TargetDisplay: '0',
              m_TargetEye: '3',
              m_TargetTexture: {
                fileID: '0',
              },
              m_projectionMatrixMode: '1',
              'near clip plane': '0.3',
              orthographic: '0',
              'orthographic size': '5',
              serializedVersion: '2',
            },
            transform: {
              m_Children: [],
              m_ConstrainProportionsScale: '0',
              m_CorrespondingSourceObject: {
                fileID: '0',
              },
              m_Father: {
                fileID: '0',
              },
              m_GameObject: {
                fileID: '963194225',
              },
              m_LocalEulerAnglesHint: {
                x: '-5.403',
                y: '2.386',
                z: '-23.869',
              },
              m_LocalPosition: {
                x: '-0.007',
                y: '0.05',
                z: '-3.328',
              },
              m_LocalRotation: {
                w: '0.9772884',
                x: '-0.050406877',
                y: '0.010602342',
                z: '-0.20555815',
              },
              m_LocalScale: {
                x: '1',
                y: '1',
                z: '1',
              },
              m_ObjectHideFlags: '0',
              m_PrefabAsset: {
                fileID: '0',
              },
              m_PrefabInstance: {
                fileID: '0',
              },
              m_RootOrder: '0',
            },
            type: 'camera',
          },
        },
      ],
      references: {
        de54e5715f7b258448ead4fd3567c9a0: 'Z2xURgIAAADsdAAAOBUAAEpTT057CiJ',
      },
    });
  });

  it('should allow to extend parsers', async () => {
    await expect(
      interpretScene({
        sceneData: unityProject.sceneFiles[0].data,
        guidMapping: unityProject.guidMapping,
        filenameMapping: unityProject.filenameMapping,

        extraParsers: [
          {
            type: 'pathCreator',
            isParserType(block) {
              return !!block.MonoBehaviour?.editorData?._bezierPath;
            },
            parseBlock(block) {
              const { type } = block;
              // eslint-disable-next-line camelcase
              const { editorData, m_Name } = block.MonoBehaviour;

              return {
                props: {
                  // eslint-disable-next-line camelcase
                  name: m_Name,
                  type,
                  editorData,
                },
              };
            },
          },
        ],
      }),
    ).resolves.toEqual({
      instances: [{
        props: {
          'm_LocalEulerAnglesHint.x': '14.036', 'm_LocalEulerAnglesHint.y': '-38.198', 'm_LocalEulerAnglesHint.z': '-8.526', 'm_LocalPosition.x': '0.068', 'm_LocalPosition.y': '0.184', 'm_LocalPosition.z': '-1.825', 'm_LocalRotation.w': '0.93825066', 'm_LocalRotation.x': '0.13927582', 'm_LocalRotation.y': '-0.3152732', 'm_LocalRotation.z': '-0.02984565', m_Name: 'blasterB', m_RootOrder: '1', name: 'blasterB', type: 'prefab',
        },
        sourceGuid: 'de54e5715f7b258448ead4fd3567c9a0',
      }, {
        props: {
          camera: {
            'far clip plane': '1000',
            'field of view': '30',
            m_AllowDynamicResolution: '0',
            m_AllowMSAA: '1',
            m_BackGroundColor: {
              a: '0', b: '0.4745098', g: '0.3019608', r: '0.19215687',
            },
            m_ClearFlags: '1',
            m_CorrespondingSourceObject: { fileID: '0' },
            m_CullingMask: { m_Bits: '4294967295', serializedVersion: '2' },
            m_Depth: '-1',
            m_Enabled: '1',
            m_FOVAxisMode: '0',
            m_FocalLength: '50',
            m_ForceIntoRT: '0',
            m_GameObject: { fileID: '963194225' },
            m_GateFitMode: '2',
            m_HDR: '1',
            m_LensShift: { x: '0', y: '0' },
            m_NormalizedViewPortRect: {
              height: '1', serializedVersion: '2', width: '1', x: '0', y: '0',
            },
            m_ObjectHideFlags: '0',
            m_OcclusionCulling: '1',
            m_PrefabAsset: { fileID: '0' },
            m_PrefabInstance: { fileID: '0' },
            m_RenderingPath: '-1',
            m_SensorSize: { x: '36', y: '24' },
            m_StereoConvergence: '10',
            m_StereoSeparation: '0.022',
            m_TargetDisplay: '0',
            m_TargetEye: '3',
            m_TargetTexture: { fileID: '0' },
            m_projectionMatrixMode: '1',
            'near clip plane': '0.3',
            orthographic: '0',
            'orthographic size': '5',
            serializedVersion: '2',
          },
          name: undefined,
          transform: {
            m_Children: [],
            m_ConstrainProportionsScale: '0',
            m_CorrespondingSourceObject: { fileID: '0' },
            m_Father: { fileID: '0' },
            m_GameObject: { fileID: '963194225' },
            m_LocalEulerAnglesHint: { x: '-5.403', y: '2.386', z: '-23.869' },
            m_LocalPosition: { x: '-0.007', y: '0.05', z: '-3.328' },
            m_LocalRotation: {
              w: '0.9772884', x: '-0.050406877', y: '0.010602342', z: '-0.20555815',
            },
            m_LocalScale: { x: '1', y: '1', z: '1' },
            m_ObjectHideFlags: '0',
            m_PrefabAsset: { fileID: '0' },
            m_PrefabInstance: { fileID: '0' },
            m_RootOrder: '0',
          },
          type: 'camera',
        },
      }, {
        props: {
          editorData: {
            _bezierPath: {
              autoControlLength: '0.3',
              bounds: { m_Center: { x: '0', y: '0', z: '0' }, m_Extent: { x: '0', y: '0', z: '0' } },
              boundsUpToDate: '0',
              controlMode: '0',
              flipNormals: '0',
              globalNormalsAngle: '0',
              isClosed: '0',
              perAnchorNormalsAngle: ['0', '0'],
              points: [{ x: '-2', y: '0', z: '0' }, { x: '-1', y: '0.5', z: '0' }, { x: '1', y: '-0.5', z: '0' }, { x: '2', y: '0', z: '0' }],
              space: '0',
            },
            bezierHandleScale: '1',
            displayAnchorPoints: '1',
            displayControlPoints: '1',
            globalDisplaySettingsFoldout: '0',
            keepConstantHandleSize: '0',
            showBezierPathInVertexMode: '0',
            showDisplayOptions: '0',
            showNormals: '0',
            showNormalsHelpInfo: '0',
            showNormalsInVertexMode: '0',
            showPathBounds: '0',
            showPathOptions: '1',
            showPerSegmentBounds: '0',
            showTransformTool: '1',
            showVertexPathDisplayOptions: '0',
            showVertexPathOptions: '1',
            tabIndex: '0',
            vertexPathMaxAngleError: '0.3',
            vertexPathMinVertexSpacing: '0.01',
            vertexPathUpToDate: '0',
          },
          name: null,
          type: 'pathCreator',
        },
      }],
      references: { de54e5715f7b258448ead4fd3567c9a0: 'Z2xURgIAAADsdAAAOBUAAEpTT057CiJ' },
    });
  });
});
