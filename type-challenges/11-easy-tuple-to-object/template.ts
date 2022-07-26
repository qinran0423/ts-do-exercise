type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

function TupleToObject(arr) {
  const obj = {}
  arr.forEach((val) => {
    obj[val] = val
  })

  return obj
}
