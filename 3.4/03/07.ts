export type UTI<T> = T extends any ? (args: T) => void : never
export type UnionToIntersection<T> = UTI<T> extends (args: infer I) => void ? I : never

export type Union = { price: number } | { name: string } | { color: string }
export type AsIntersection = UnionToIntersection<Union>
export type Merged = Pick<AsIntersection, keyof AsIntersection>
