import * as json from './fruits.json'

export type Unwrap<T> = T extends {[k: string]: infer U} ? U
               : T extends (infer U)[] ? U
               : T

export type UnionGuard<T> = {[K in keyof T]: T[K] & { _K_: K }}
export type ChildUN = Unwrap<UnionGuard<typeof json>>
export type PickedChildUN = Pick<ChildUN, keyof ChildUN>
