import { User1, User2, isPrimitive } from './01'

export type Nullable<T> = {[K in keyof T]?: T[K] | null}
export type NullableWrapUser = Nullable<User1>

export type DeepNullable<T> = {
  [P in keyof T]?: T[P] extends isPrimitive<T[P]>
                 ? T[P] | null
                 : DeepNullable<T[P]>
}

export type DeepNullableWrapUser = DeepNullable<User2>
