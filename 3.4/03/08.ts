import { OptionalMerge } from './13'

export type Fruit = OptionalMerge<typeof import ('./fruits.json')>
