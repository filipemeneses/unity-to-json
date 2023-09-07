/* eslint-disable no-unused-vars */

export type BlockParsed = {
    sourceGuid?: string,
    props: any
}
export type SceneContext = {
    guidMapping: {[key: string]: any},
    fileIdMapping: {[key: string]: any},
    filenameMapping: {[key: string]: any},
    addReference: (key: string, value: any) => void
}

export type BlockParser = (
    block: any,
    sceneContext: SceneContext
) => BlockParsed | null

export type UnitySceneBlockParser = {
    type: string,
    isParserType: (block: any) => boolean,
    parseBlock: BlockParser
}
