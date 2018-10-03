import { User1, User2, isPrimitive } from './01'

export type ReadonlyWrapUser = Readonly<User1>

export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends isPrimitive<T[P]>
                         ? T[P]
                         : DeepReadonly<T[P]>
}

export type DeepReadonlyWrapUser = DeepReadonly<User2>
