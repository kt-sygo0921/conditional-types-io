export interface User1 {
  name: string
  age: number | null
  gender: 'male' | 'female' | 'other'
  birthplace?: string
}

export interface User2 {
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
  birth: {
    day: Date
    place?: {
      country?: string | null
      state?: string
    }
  }
}

export type Unwrap<T> = T extends {[k: string]: infer U} ? U
               : T extends (infer U)[] ? U
               : T
export type isPrimitive<T> = T extends Unwrap<T> ? T : never
export type Diff<T, U> = T extends U ? never : T
