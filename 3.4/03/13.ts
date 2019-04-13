export type UnionGuard<T> = { [K in keyof T]: T[K] & { _K_: K } }
export type Unwrap<T> = T extends {[k: string]: infer U} ? U
               : T extends (infer U)[] ? U
               : T
export type UTI<T> = T extends any ? (args: T) => void : never
export type UnionToIntersection<T> = UTI<T> extends (args: infer I) => void ? I : never

export type ChildUN<T> = Unwrap<UnionGuard<T>>
export type PickedChildUN<T> = Pick<ChildUN<T>, keyof ChildUN<T>>
export type ChildITS<T> = UnionToIntersection<ChildUN<T>>
export type PickedChildITS<T> = Pick<ChildITS<T>, keyof ChildITS<T>>
export type OptionalKeys<T> = Exclude<keyof PickedChildITS<T>, keyof PickedChildUN<T>>
export type OptionalMap<T> = Pick<PickedChildITS<T>, OptionalKeys<T>>
export type WrappedOptionalMap<T> = Partial<OptionalMap<T>>
export type RequiredKeys<T> = Exclude<keyof PickedChildITS<T>, OptionalKeys<T> | '_K_'>
export type RequiredMap<T> = Pick<ChildITS<T>, RequiredKeys<T>>
export type OptionalMergedMap<T> = RequiredMap<T> & WrappedOptionalMap<T>
export type OptionalMerge<T> = Pick<OptionalMergedMap<T>, keyof OptionalMergedMap<T>>
