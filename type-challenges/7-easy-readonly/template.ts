type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// interface User {
//   readonly name: string
// }

// const mick: User = {
//   name: 'randy'
// }

// mick.name = '111'

function readonly(obj) {
  const result = {}
  for (const key in obj) {
    result["readonly" + key] = obj[key]
  }
  return result
}
