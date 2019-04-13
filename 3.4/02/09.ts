import { FruitsMap } from './06'

// 2つの型を比較し、比較対象が比較元を満たしていない型を never に変換する
export type Filter<T, U> = T extends U ? T : never
// never に変換する map 処理をかける
export type FilteredMap<T, U> ={[K in keyof T]: T[K] extends Filter<T[K], U> ? T[K] : never}
// 非never のプロパティ名を抽出
export type NonNeverKeys<T> = {[K in keyof T]: T[K] extends never ? never : K}[keyof T]
// 非never のプロパティ名から新しい Object として型を定義する
export type PickUp<T, U> = Pick<T, NonNeverKeys<FilteredMap<T, U>>>

// never に変換されているプロパティ名を抽出
export type NeverKeys<T> = {[K in keyof T]: T[K] extends never ? K : never}[keyof T]
// never のプロパティ名から新しい Object として型を定義する
export type DropOff<T, U> = Pick<T, NeverKeys<FilteredMap<T, U>>>
export type DroppedFruits = DropOff<FruitsMap, { price: number }>
