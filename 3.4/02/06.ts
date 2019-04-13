import { PickUp } from './09'

export type FruitsMap = {
  banana: { name: "banana", price: number }
  apple: { name: "apple", price: number }
  orange: { name: "orange" }
}
export type PickedFruits = PickUp<FruitsMap, { price: number }>
