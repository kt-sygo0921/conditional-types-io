import { PickUp, DropOff } from './09'
import { MyObject } from './10'

// 関数を抽出
export type PickUpFunctions<T> = PickUp<T, Function>
// 関数ではないものを抽出
export type DropOffFunctions<T> = DropOff<T, Function>
// 戻り型と期待型の互換性がある関数を抽出
export type PickUpByReturnType<T, U> = PickUp<T, (...args: any[]) => U>


export type TargetMap = typeof MyObject
export type NotFunctions = DropOffFunctions<TargetMap>
export type Functions = PickUpFunctions<TargetMap>
export type ReturnNumber = PickUpByReturnType<TargetMap, number>
export type ReturnString = PickUpByReturnType<TargetMap, string>
export type ReturnFunction = PickUpByReturnType<TargetMap, Function>
