type If<C extends boolean, T, F> = C extends true ? T : F

function myIf(C, T, F) {
  if (C) {
    return T
  } else {
    return F
  }
}
