export default function getStudentIdsSum(objList) {
  const ids = objList.map((x) => x.id);
  const sum = ids.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return sum;
}
