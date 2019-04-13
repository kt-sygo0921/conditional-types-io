export type Banana = (typeof import('./fruits.json'))['banana']

export const fruits = import('./fruits.json')
export type Fruits = typeof fruits
