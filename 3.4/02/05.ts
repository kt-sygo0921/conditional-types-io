import { TupleToUnion } from './04'
export const fruits = [
  { 'orange': 0 },
  { 'apple': 0 },
  { 'banana': 0 }
]
export type FruitsUnion = TupleToUnion<typeof fruits>
export type Fruits = keyof FruitsUnion
