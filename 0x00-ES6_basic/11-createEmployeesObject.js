export default function createEmployeesObject(departmentName, employees) {
  const data = {
    [departmentName]: [...employees],
  };
  return data;
}
