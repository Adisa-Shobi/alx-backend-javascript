export default function updateUniqueItems(map) {
  if (typeof map !== 'object') {
    throw Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });
}
