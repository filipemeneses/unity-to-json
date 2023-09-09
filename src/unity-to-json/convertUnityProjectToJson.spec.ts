import path from 'path';
import { convertUnityProjectToJson } from './convertUnityProjectToJson';

describe('convertUnityProjectToJson', () => {
  it('should read all assets and scenes and return the project as json', async () => {
    const fixturePath = path.resolve(__dirname, 'fixture/UnityProject');

    const result = await convertUnityProjectToJson({
      unityProjectRootFolderPath: fixturePath,
    });

    expect(result.version).toEqual('unity-to-json@v2');
    expect(result.files[0]).toEqual({
      filepath: 'Assets/Scenes/SampleScene.unity',
      data: [{ fileId: '1.1', type: '%YAML' }, {
        fileId: '1',
        type: '29',
        OcclusionCullingSettings: {
          m_ObjectHideFlags: '0', serializedVersion: '2', m_OcclusionBakeSettings: { smallestOccluder: '5', smallestHole: '0.25', backfaceThreshold: '100' }, m_SceneGUID: '00000000000000000000000000000000', m_OcclusionCullingData: { fileID: '0' },
        },
      }, {
        fileId: '2',
        type: '104',
        RenderSettings: {
          m_ObjectHideFlags: '0',
          serializedVersion: '9',
          m_Fog: '0',
          m_FogColor: {
            r: '0.5', g: '0.5', b: '0.5', a: '1',
          },
          m_FogMode: '3',
          m_FogDensity: '0.01',
          m_LinearFogStart: '0',
          m_LinearFogEnd: '300',
          m_AmbientSkyColor: {
            r: '0.212', g: '0.227', b: '0.259', a: '1',
          },
          m_AmbientEquatorColor: {
            r: '0.114', g: '0.125', b: '0.133', a: '1',
          },
          m_AmbientGroundColor: {
            r: '0.047', g: '0.043', b: '0.035', a: '1',
          },
          m_AmbientIntensity: '1',
          m_AmbientMode: '0',
          m_SubtractiveShadowColor: {
            r: '0.42', g: '0.478', b: '0.627', a: '1',
          },
          m_SkyboxMaterial: { fileID: '10304', guid: '0000000000000000f000000000000000', type: '0' },
          m_HaloStrength: '0.5',
          m_FlareStrength: '1',
          m_FlareFadeSpeed: '3',
          m_HaloTexture: { fileID: '0' },
          m_SpotCookie: { fileID: '10001', guid: '0000000000000000e000000000000000', type: '0' },
          m_DefaultReflectionMode: '0',
          m_DefaultReflectionResolution: '128',
          m_ReflectionBounces: '1',
          m_ReflectionIntensity: '1',
          m_CustomReflection: { fileID: '0' },
          m_Sun: { fileID: '0' },
          m_IndirectSpecularColor: {
            r: '0.12731749', g: '0.13414757', b: '0.1210787', a: '1',
          },
          m_UseRadianceAmbientProbe: '0',
        },
      }, {
        fileId: '3',
        type: '157',
        LightmapSettings: {
          m_ObjectHideFlags: '0',
          serializedVersion: '12',
          m_GIWorkflowMode: '1',
          m_GISettings: {
            serializedVersion: '2', m_BounceScale: '1', m_IndirectOutputScale: '1', m_AlbedoBoost: '1', m_EnvironmentLightingMode: '0', m_EnableBakedLightmaps: '1', m_EnableRealtimeLightmaps: '0',
          },
          m_LightmapEditorSettings: {
            serializedVersion: '12', m_Resolution: '2', m_BakeResolution: '40', m_AtlasSize: '1024', m_AO: '0', m_AOMaxDistance: '1', m_CompAOExponent: '1', m_CompAOExponentDirect: '0', m_ExtractAmbientOcclusion: '0', m_Padding: '2', m_LightmapParameters: { fileID: '0' }, m_LightmapsBakeMode: '1', m_TextureCompression: '1', m_FinalGather: '0', m_FinalGatherFiltering: '1', m_FinalGatherRayCount: '256', m_ReflectionCompression: '2', m_MixedBakeMode: '2', m_BakeBackend: '1', m_PVRSampling: '1', m_PVRDirectSampleCount: '32', m_PVRSampleCount: '500', m_PVRBounces: '2', m_PVREnvironmentSampleCount: '500', m_PVREnvironmentReferencePointCount: '2048', m_PVRFilteringMode: '2', m_PVRDenoiserTypeDirect: '0', m_PVRDenoiserTypeIndirect: '0', m_PVRDenoiserTypeAO: '0', m_PVRFilterTypeDirect: '0', m_PVRFilterTypeIndirect: '0', m_PVRFilterTypeAO: '0', m_PVREnvironmentMIS: '0', m_PVRCulling: '1', m_PVRFilteringGaussRadiusDirect: '1', m_PVRFilteringGaussRadiusIndirect: '5', m_PVRFilteringGaussRadiusAO: '2', m_PVRFilteringAtrousPositionSigmaDirect: '0.5', m_PVRFilteringAtrousPositionSigmaIndirect: '2', m_PVRFilteringAtrousPositionSigmaAO: '1', m_ExportTrainingData: '0', m_TrainingDataDestination: 'TrainingData', m_LightProbeSampleCountMultiplier: '4',
          },
          m_LightingDataAsset: { fileID: '0' },
          m_LightingSettings: { fileID: '0' },
        },
      }, {
        fileId: '4',
        type: '196',
        NavMeshSettings: {
          serializedVersion: '2',
          m_ObjectHideFlags: '0',
          m_BuildSettings: {
            serializedVersion: '2', agentTypeID: '0', agentRadius: '0.5', agentHeight: '2', agentSlope: '45', agentClimb: '0.4', ledgeDropHeight: '0', maxJumpAcrossDistance: '0', minRegionArea: '2', manualCellSize: '0', cellSize: '0.16666667', manualTileSize: '0', tileSize: '256', accuratePlacement: '0', maxJobWorkers: '0', preserveTilesOutsideBounds: '0', debug: { m_Flags: '0' },
          },
          m_NavMeshData: { fileID: '0' },
        },
      }, {
        fileId: '215913212',
        type: '1001',
        PrefabInstance: {
          m_ObjectHideFlags: '0',
          serializedVersion: '2',
          m_Modification: {
            m_TransformParent: { fileID: '0' },
            m_Modifications: [{
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_RootOrder', value: '1', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalPosition.x', value: '0.068', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalPosition.y', value: '0.184', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalPosition.z', value: '-1.825', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalRotation.w', value: '0.93825066', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalRotation.x', value: '0.13927582', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalRotation.y', value: '-0.3152732', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalRotation.z', value: '-0.02984565', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalEulerAnglesHint.x', value: '14.036', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalEulerAnglesHint.y', value: '-38.198', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '-8679921383154817045', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_LocalEulerAnglesHint.z', value: '-8.526', objectReference: { fileID: '0' },
            }, {
              target: { fileID: '919132149155446097', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' }, propertyPath: 'm_Name', value: 'blasterB', objectReference: { fileID: '0' },
            }],
            m_RemovedComponents: [],
          },
          m_SourcePrefab: { fileID: '100100000', guid: 'de54e5715f7b258448ead4fd3567c9a0', type: '3' },
        },
      }, {
        fileId: '963194225',
        type: '1',
        GameObject: {
          m_ObjectHideFlags: '0', m_CorrespondingSourceObject: { fileID: '0' }, m_PrefabInstance: { fileID: '0' }, m_PrefabAsset: { fileID: '0' }, serializedVersion: '6', m_Component: [{ component: { fileID: '963194228' } }, { component: { fileID: '963194227' } }, { component: { fileID: '963194226' } }], m_Layer: '0', m_Name: 'Main Camera', m_TagString: 'MainCamera', m_Icon: { fileID: '0' }, m_NavMeshLayer: '0', m_StaticEditorFlags: '0', m_IsActive: '1',
        },
      }, {
        fileId: '963194226',
        type: '81',
        AudioListener: {
          m_ObjectHideFlags: '0', m_CorrespondingSourceObject: { fileID: '0' }, m_PrefabInstance: { fileID: '0' }, m_PrefabAsset: { fileID: '0' }, m_GameObject: { fileID: '963194225' }, m_Enabled: '1',
        },
      }, {
        fileId: '963194227',
        type: '20',
        Camera: {
          m_ObjectHideFlags: '0',
          m_CorrespondingSourceObject: { fileID: '0' },
          m_PrefabInstance: { fileID: '0' },
          m_PrefabAsset: { fileID: '0' },
          m_GameObject: { fileID: '963194225' },
          m_Enabled: '1',
          serializedVersion: '2',
          m_ClearFlags: '1',
          m_BackGroundColor: {
            r: '0.19215687', g: '0.3019608', b: '0.4745098', a: '0',
          },
          m_projectionMatrixMode: '1',
          m_GateFitMode: '2',
          m_FOVAxisMode: '0',
          m_SensorSize: { x: '36', y: '24' },
          m_LensShift: { x: '0', y: '0' },
          m_FocalLength: '50',
          m_NormalizedViewPortRect: {
            serializedVersion: '2', x: '0', y: '0', width: '1', height: '1',
          },
          'near clip plane': '0.3',
          'far clip plane': '1000',
          'field of view': '30',
          orthographic: '0',
          'orthographic size': '5',
          m_Depth: '-1',
          m_CullingMask: { serializedVersion: '2', m_Bits: '4294967295' },
          m_RenderingPath: '-1',
          m_TargetTexture: { fileID: '0' },
          m_TargetDisplay: '0',
          m_TargetEye: '3',
          m_HDR: '1',
          m_AllowMSAA: '1',
          m_AllowDynamicResolution: '0',
          m_ForceIntoRT: '0',
          m_OcclusionCulling: '1',
          m_StereoConvergence: '10',
          m_StereoSeparation: '0.022',
        },
      }, {
        fileId: '963194228',
        type: '4',
        Transform: {
          m_ObjectHideFlags: '0',
          m_CorrespondingSourceObject: { fileID: '0' },
          m_PrefabInstance: { fileID: '0' },
          m_PrefabAsset: { fileID: '0' },
          m_GameObject: { fileID: '963194225' },
          m_LocalRotation: {
            x: '-0.050406877', y: '0.010602342', z: '-0.20555815', w: '0.9772884',
          },
          m_LocalPosition: { x: '-0.007', y: '0.05', z: '-3.328' },
          m_LocalScale: { x: '1', y: '1', z: '1' },
          m_ConstrainProportionsScale: '0',
          m_Children: [],
          m_Father: { fileID: '0' },
          m_RootOrder: '0',
          m_LocalEulerAnglesHint: { x: '-5.403', y: '2.386', z: '-23.869' },
        },
      }, {
        fileId: '1347204322',
        type: '1',
        GameObject: {
          m_ObjectHideFlags: '0', m_CorrespondingSourceObject: { fileID: '0' }, m_PrefabInstance: { fileID: '0' }, m_PrefabAsset: { fileID: '0' }, serializedVersion: '6', m_Component: [{ component: { fileID: '1347204324' } }, { component: { fileID: '1347204323' } }], m_Layer: '0', m_Name: 'Point Light', m_TagString: 'Untagged', m_Icon: { fileID: '0' }, m_NavMeshLayer: '0', m_StaticEditorFlags: '0', m_IsActive: '1',
        },
      }, {
        fileId: '1347204323',
        type: '108',
        Light: {
          m_ObjectHideFlags: '0',
          m_CorrespondingSourceObject: { fileID: '0' },
          m_PrefabInstance: { fileID: '0' },
          m_PrefabAsset: { fileID: '0' },
          m_GameObject: { fileID: '1347204322' },
          m_Enabled: '1',
          serializedVersion: '10',
          m_Type: '2',
          m_Shape: '0',
          m_Color: {
            r: '1', g: '1', b: '1', a: '1',
          },
          m_Intensity: '1',
          m_Range: '10',
          m_SpotAngle: '30',
          m_InnerSpotAngle: '21.80208',
          m_CookieSize: '10',
          m_Shadows: {
            m_Type: '0',
            m_Resolution: '-1',
            m_CustomResolution: '-1',
            m_Strength: '1',
            m_Bias: '0.05',
            m_NormalBias: '0.4',
            m_NearPlane: '0.2',
            m_CullingMatrixOverride: {
              e00: '1', e01: '0', e02: '0', e03: '0', e10: '0', e11: '1', e12: '0', e13: '0', e20: '0', e21: '0', e22: '1', e23: '0', e30: '0', e31: '0', e32: '0', e33: '1',
            },
            m_UseCullingMatrixOverride: '0',
          },
          m_Cookie: { fileID: '0' },
          m_DrawHalo: '0',
          m_Flare: { fileID: '0' },
          m_RenderMode: '0',
          m_CullingMask: { serializedVersion: '2', m_Bits: '4294967295' },
          m_RenderingLayerMask: '1',
          m_Lightmapping: '4',
          m_LightShadowCasterMode: '0',
          m_AreaSize: { x: '1', y: '1' },
          m_BounceIntensity: '1',
          m_ColorTemperature: '6570',
          m_UseColorTemperature: '0',
          m_BoundingSphereOverride: {
            x: '0', y: '0', z: '0', w: '0',
          },
          m_UseBoundingSphereOverride: '0',
          m_UseViewFrustumForShadowCasterCull: '1',
          m_ShadowRadius: '0',
          m_ShadowAngle: '0',
        },
      }, {
        fileId: '1347204324',
        type: '4',
        Transform: {
          m_ObjectHideFlags: '0',
          m_CorrespondingSourceObject: { fileID: '0' },
          m_PrefabInstance: { fileID: '0' },
          m_PrefabAsset: { fileID: '0' },
          m_GameObject: { fileID: '1347204322' },
          m_LocalRotation: {
            x: '0', y: '0', z: '0', w: '1',
          },
          m_LocalPosition: { x: '3.08', y: '2.07', z: '1.93' },
          m_LocalScale: { x: '1', y: '1', z: '1' },
          m_ConstrainProportionsScale: '0',
          m_Children: [],
          m_Father: { fileID: '0' },
          m_RootOrder: '2',
          m_LocalEulerAnglesHint: { x: '0', y: '0', z: '0' },
        },
      }],
    });
    expect(result.files[1]).toEqual({
      filepath: 'Assets/blasterB.fbx.meta',
      data: [{
        fileId: '2',
        type: 'fileFormatVersion:',
        guid: 'de54e5715f7b258448ead4fd3567c9a0',
        ModelImporter: {
          serializedVersion: '21300',
          internalIDToNameTable: [],
          externalObjects: {},
          materials: {
            materialImportMode: '2', materialName: '0', materialSearch: '1', materialLocation: '1',
          },
          animations: {
            legacyGenerateAnimations: '4', bakeSimulation: '0', resampleCurves: '1', optimizeGameObjects: '0', removeConstantScaleCurves: '1', motionNodeName: null, rigImportErrors: null, rigImportWarnings: null, animationImportErrors: null, animationImportWarnings: null, animationRetargetingWarnings: null, animationDoRetargetingWarnings: '0', importAnimatedCustomProperties: '0', importConstraints: '0', animationCompression: '1', animationRotationError: '0.5', animationPositionError: '0.5', animationScaleError: '0.5', animationWrapMode: '0', extraExposedTransformPaths: [], extraUserProperties: [], clipAnimations: [], isReadable: '0',
          },
          meshes: {
            lODScreenPercentages: [], globalScale: '1', meshCompression: '0', addColliders: '0', useSRGBMaterialColor: '1', sortHierarchyByName: '1', importVisibility: '1', importBlendShapes: '1', importCameras: '1', importLights: '1', nodeNameCollisionStrategy: '1', fileIdsGeneration: '2', swapUVChannels: '0', generateSecondaryUV: '0', useFileUnits: '1', keepQuads: '0', weldVertices: '1', bakeAxisConversion: '0', preserveHierarchy: '0', skinWeightsMode: '0', maxBonesPerVertex: '4', minBoneWeight: '0.001', optimizeBones: '1', meshOptimizationFlags: '-1', indexFormat: '0', secondaryUVAngleDistortion: '8', secondaryUVAreaDistortion: '15.000001', secondaryUVHardAngle: '88', secondaryUVMarginMethod: '1', secondaryUVMinLightmapResolution: '40', secondaryUVMinObjectScale: '1', secondaryUVPackMargin: '4', useFileScale: '1',
          },
          tangentSpace: {
            normalSmoothAngle: '60', normalImportMode: '0', tangentImportMode: '3', normalCalculationMode: '4', legacyComputeAllNormalsFromSmoothingGroupsWhenMeshHasBlendShapes: '0', blendShapeNormalImportMode: '1', normalSmoothingSource: '0',
          },
          referencedClips: [],
          importAnimation: '1',
          humanDescription: {
            serializedVersion: '3', human: [], skeleton: [], armTwist: '0.5', foreArmTwist: '0.5', upperLegTwist: '0.5', legTwist: '0.5', armStretch: '0.05', legStretch: '0.05', feetSpacing: '0', globalScale: '1', rootMotionBoneName: null, hasTranslationDoF: '0', hasExtraRoot: '0', skeletonHasParents: '1',
          },
          lastHumanDescriptionAvatarSource: { instanceID: '0' },
          autoGenerateAvatarMappingIfUnspecified: '1',
          animationType: '2',
          humanoidOversampling: '1',
          avatarSetup: '0',
          addHumanoidExtraRootOnlyWhenUsingAvatar: '1',
          remapMaterialsIfMaterialImportModeIsNone: '0',
          additionalBone: '0',
          userData: null,
          assetBundleName: null,
          assetBundleVariant: null,
        },
      }],
    });
    expect(result.files[2]).toEqual({
      filepath: 'Assets/Scenes/SampleScene.unity.meta',
      data: [{
        fileId: '2',
        type: 'fileFormatVersion:',
        guid: '9fc0d4010bbf28b4594072e72b8655ab',
        DefaultImporter: {
          externalObjects: {}, userData: null, assetBundleName: null, assetBundleVariant: null,
        },
      }],
    });

    expect(result.files[3].filepath).toEqual('Assets/blasterB.fbx');
    expect(result.files[3].data).toStartWith('Z2xURgIAAADsdAAAOBUAAEpTT057CiJhc3Nl');
  });
});
