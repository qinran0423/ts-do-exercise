import { Equal } from "@type-challenges/utils"

export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

function myIncludes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element === item) {
      return true
    }
  }

  return false
}

function myIncludes1(arr, item) {
  function _(arr, item) {
    if (arr.length === 0) return false
    const [first, ...rest] = arr
    if (first === item) {
      return true
    } else {
      return _(rest, item)
    }
  }

  return _(arr, item)
}
