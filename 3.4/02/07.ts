import { FruitsMap } from './06'

export type Filter<T> = T extends { price: number } ? T : never
export type Banana = Filter<{ name: "banana", price: number }>
export type Orange = Filter<{ name: "orange" }>

export type FilteredMap<T> ={[K in keyof T]: T[K] extends Filter<T[K]> ? T[K] : never}
export type FilteredFruits = FilteredMap<FruitsMap>
