export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const result = [];
  const startLength = startString.length;
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startLength));
    }
  });
  return result.join('-');
}
