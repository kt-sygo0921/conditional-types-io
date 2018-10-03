export type Banana = {
  "price": number
  "color": string
  "displayName": string
  "country": string
}
export type Apple = {
  "price": number
  "color": string
  "displayName": string
}
export type FruitSrc = Banana | Apple
export type MergedFruitSrc = Pick<FruitSrc, keyof FruitSrc>

export type UnionGuard<T> = { [K in keyof T]: T[K] & { _K_: K } }
