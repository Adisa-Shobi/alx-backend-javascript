export default function getListStudentIds(objList) {
  let ids = [];
  if (typeof objList !== 'object') return ids;
  ids = objList.map((x) => x.id);
  return ids;
}
