export default function hasValuesFromArray(set, array) {
  const set2 = new Set(array);
  for (const elem of set2) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
