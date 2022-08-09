type Length<T extends readonly any[]> = T["length"]

function getLength(arr) {
  return arr.length
}
