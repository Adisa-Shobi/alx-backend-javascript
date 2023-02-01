export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradedArray = students.map((student) => {
    const studentGrade = newGrades
      .filter((grade) => grade.studentId === student.id)
      .map((y) => y.grade)[0];
    if (studentGrade) {
      student.grade = studentGrade; // eslint-disable-line no-param-reassign
    } else {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return student;
  });
  return gradedArray.filter((item) => item.location === city);
}
