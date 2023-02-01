export default function cleanSet(set, startString) {
  if (startString === ''
      || typeof startString !== 'string'
      || typeof set !== 'object') {
    return '';
  }
  const result = [];
  const startLength = startString.length;
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startLength));
    }
  });
  return result.join('-');
}
