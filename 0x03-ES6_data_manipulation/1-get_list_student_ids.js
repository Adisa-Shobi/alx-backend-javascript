export default function getListStudentIds(objList) {
  let ids = [];
  if (!Array.isArray(objList)) return ids;
  ids = objList.map((x) => x.id);
  return ids;
}
