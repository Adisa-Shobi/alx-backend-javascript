export default function getListStudentIds(obj_list) {
  let ids = [];
  if (typeof obj_list !== 'object')
    return ids;
  ids = obj_list.map((x) => x.id);
  return ids;
}
