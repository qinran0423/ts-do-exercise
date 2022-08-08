type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

function tupleToObject(array) {
  const obj = {}

  array.forEach((val) => {
    obj[val] = val
  })

  return obj
}

// 遍历数组 T[number]
