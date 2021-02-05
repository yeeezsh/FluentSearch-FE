const kFormatter = (num: number): string => {
  return num > 999 ? (num / 1000).toFixed(1) + 'k' : num.toString();
};
export default kFormatter;
