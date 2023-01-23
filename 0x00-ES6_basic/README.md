# Files and their functions
- 0-constants.js - Modify
  - function taskFirst to instantiate variables using const
  - function taskNext to instantiate variables using let
```
  export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```
- 1-block-scoped.js - modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.
```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```
