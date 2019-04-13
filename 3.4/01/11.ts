export type User =  {
  name: string; age: number; id: string;
} | {
  name: string; age: number; gender: string;
}
// export const user = {} as User

// export const user: User = {
//   name: '',
//   age: 0,
//   gender: ''
// }
// type DeclaredUser = typeof user
