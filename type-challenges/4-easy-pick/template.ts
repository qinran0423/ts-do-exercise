
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

function myPick(todo, keys) {
  const obj = {}

  keys.forEach(key => {
    if (key in obj) {
      obj[key] = todo[key]
    }
  });

  return obj
}