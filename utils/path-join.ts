const pathJoin = (paths: string[], sep?: string): string => {
  const defaultSeperator = '/';
  if (paths.length === 1) return `${paths[0]}${sep || defaultSeperator}`;
  return paths.join(sep || defaultSeperator);
};
export default pathJoin;
