import { NonNeverKeys } from './09'
import { PickUpByReturnType, TargetMap } from './11'

// export type ReturnVoid = PickUpByReturnType<TargetMap, void>

export type R<T> = T extends (...args: any[]) => infer I ? I : never
export type RV<T> = T extends Function ? R<T> extends void ? T : never : never
export type ReturnVoidMap<T> ={ [K in keyof T]: T[K] extends RV<T[K]> ? T[K] : never }
export type PickUpReturnVoid<T> = Pick<T, NonNeverKeys<ReturnVoidMap<T>>>
export type ReturnVoid = PickUpReturnVoid<TargetMap>
