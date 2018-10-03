import { User1, User2, isPrimitive } from './01'

export type RequiredWrapUser = Required<User1>

export type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends isPrimitive<T[P]>
                  ? T[P]
                  : DeepRequired<T[P]>
}

export type DeepRequiredWrapUser = DeepRequired<User2>
