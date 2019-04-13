export type TupleToUnion<T> = T extends (infer I)[] ? I : never
export type FruitsTuple = ["banana", "apple", "orange"]
export type FruitsUnion = TupleToUnion<FruitsTuple>

export type MapToUnion<T> = T extends {[k: string]: infer I} ? I : never
export type FruitsMap = {
  banana: "banana",
  apple: "apple",
  orange: "orange"
}
// export type FruitsUnion = MapToUnion<FruitsMap>
