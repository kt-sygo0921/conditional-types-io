import { FruitsMap } from './06'
import { FilteredFruits } from './07'

export type NonNeverKeys<T> = {[K in keyof T]: T[K] extends never ? never : K}[keyof T]
export type NonNeverFruitsKeys = NonNeverKeys<FilteredFruits>

export type PickedFruits = Pick<FruitsMap, NonNeverFruitsKeys>
