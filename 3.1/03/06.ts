import { User1, User2, isPrimitive, Diff } from './01'

export type NonNullable<T> = {[K in keyof T]-?: Diff<T[K], null | undefined> }

export type NonNullableWrapUser = NonNullable<User1>

export type DeepNonNullable<T> = {
  [P in keyof T]-?: T[P] extends isPrimitive<T[P]>
                  ? Diff<T[P], null | undefined>
                  : DeepNonNullable<T[P]>
}

export type DeepNonNullableWrapUser = DeepNonNullable<User2>
