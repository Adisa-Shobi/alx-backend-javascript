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
