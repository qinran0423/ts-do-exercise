type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer Args
) => unknown
  ? Args
  : never
