import yaml from 'js-yaml';

export const parseUnityFile = (unityFileText: string) => {
  const unityRawText = unityFileText.replace(/%TAG.+\r?\n?/, '');
  const blocks = unityRawText.split('--- !u!');
  const validBlocks = blocks;

  const parseBlock = (block: string) => {
    const lines = block.split('\n');
    const [firstLine] = lines;
    const blockYaml = lines.slice(1, lines.length).join('\n');

    const blockJson = yaml.load(blockYaml, {
      schema: yaml.FAILSAFE_SCHEMA,
    });
    const [type, rawFileId] = firstLine.split(' ');
    const fileId = rawFileId.replace('&', '');

    return {
      fileId,
      type,
      ...(blockJson as object),
    };
  };

  return validBlocks.map(parseBlock);
};
