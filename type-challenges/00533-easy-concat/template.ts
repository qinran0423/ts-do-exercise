type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

function myConcat(arr1, arr2) {
  return [...arr1, ...arr2]
}
