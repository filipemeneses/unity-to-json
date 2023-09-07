import { cameraParser } from './cameraParser';
import { prefabParser } from './prefabParser';
import { UnitySceneBlockParser } from './types';

export const parsers: UnitySceneBlockParser[] = [
  prefabParser,
  cameraParser,
];
