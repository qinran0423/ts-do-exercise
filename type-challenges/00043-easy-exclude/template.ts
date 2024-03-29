export type MyExclude<T, U> = T extends U ? never : T

type t2 = "a" | "b" | "c"
type t1 = "a"
type t3 = MyExclude<t2, t1>

// T ['a', 'b', 'c']
// U ['a']
function isExclude(T: string[], U: string[]) {
  const res = [] as string[]

  for (let i = 0; i < T.length; i++) {
    const t = T[i]
    let bool = false
    for (let j = 0; j < U.length; j++) {
      const u = U[j]
      if (t === u) {
        bool = true
      }
    }
    if (!bool) {
      res.push(t)
    }
  }

  return res
}
