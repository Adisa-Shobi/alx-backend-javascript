export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    let task2 = false;
    if (task || task2) {
      task = !task;
      task2 = !task2;
    }
  }

  return [task, task2];
}
