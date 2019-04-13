// type UTI<T> = T extends any ? (args: T) => void : never
// type UnionToIntersection<T> = UTI<T> extends (args: infer I) => void ? I : never

interface ObjectConstructor {
  assign<T extends any[]>(...sources: T): T extends (infer I)[] ? (I extends any ? (args: I) => void : never) extends (args: infer U) => void ? U : never : never
}


