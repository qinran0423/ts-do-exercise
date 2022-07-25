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


// 知识点
// mapped 
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
// keyof -> lookup  
// - https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator
//  indexed
// - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
// readonly
// - https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const