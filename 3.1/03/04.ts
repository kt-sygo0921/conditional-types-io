import { User1, User2, isPrimitive } from './01'

export type PartialWrapUser = Partial<User1>

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends isPrimitive<T[P]>
                 ? T[P]
                 : DeepPartial<T[P]>
}

export type DeepPartialWrapUser = DeepPartial<User2>
