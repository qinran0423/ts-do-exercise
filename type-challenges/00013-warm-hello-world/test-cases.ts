import type { Equal, Expect, NotAny } from "@type-challenges/utils"

type cases = [
  Expect<NotAny<HelloWorld>>, // 期望helloworld 不是一个any类型
  Expect<Equal<HelloWorld, string>> // 期望helloworld是一个string类型
]
