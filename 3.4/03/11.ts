import * as json from './fruits.json'
import { UnionToIntersection } from './07'
import { Unwrap } from './10'

export type UnionGuard<T> = { [K in keyof T]: T[K] & { _K_: K } }
export type ChildUN = Unwrap<UnionGuard<typeof json>>
export type ChildITS = UnionToIntersection<ChildUN>
export type PickedChildITS = Pick<ChildITS, keyof ChildITS>
