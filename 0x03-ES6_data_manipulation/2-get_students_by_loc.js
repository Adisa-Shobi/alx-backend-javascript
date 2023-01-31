export default function getStudentsByLocation(objList, city) {
  const matches = objList.filter((x) => x.location === city);
  return matches;
}
