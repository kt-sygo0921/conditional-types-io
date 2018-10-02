export interface User {
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
}

// export function createUser1(): User {
//   return {
//     name: 'Taro',
//     age: 30,
//     gender: 'male'
//   }
// }

// export function createUser2(): User {
//   return {
//     name: 'Taro',
//     age: 30,
//     gender: 'unknown'
//   }
// }

// export function createUser3(): User {
//   if (Math.random() > 0.1) return
//   return {
//     name: 'Taro',
//     age: 30,
//     gender: 'male'
//   }
// }
