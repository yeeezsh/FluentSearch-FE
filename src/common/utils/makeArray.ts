export function makeArray<T>(length: number, generator: () => T): T[] {
  return Array.from({ length }, generator);
}
