// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T extends [] ? never : T[0]

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never

function first(arr) {
  return arr[0]
}
