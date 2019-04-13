export type Gender = 'male' | 'female' | 'other'
export interface User {
  name: string
  age: number
  gender: Gender
}

// export function getAge(user: User) {
//   return user.age
// }
// export const myAge = getAge({ name: 'Taro' })

// export function getAge(user: User, payload?: { suffix: string }) {
//   return user.age
// }
// export const myAge = getAge(
//   { name: 'Taro', age: 30, gender: 'male' },
// )

// export function getAge(user: User, payload?: { suffix: string }) {
//   // payload が undefined である可能性があるためエラー
//   return `${user.age}${payload.suffix}`
// }

// export function getAge(user: User, payload?: { suffix: string }) {
//   if (payload !== undefined) {
//     // TypeGuard により、アクセスが担保されている
//     return `${user.age}${payload.suffix}`
//   }
//   return `${user.age}`
// }
