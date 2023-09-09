export const toUnixPath = (path:string) => (
  path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '')
);
