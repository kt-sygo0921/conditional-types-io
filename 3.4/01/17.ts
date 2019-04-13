export interface ValueContainer<T> {
  value: T
}
// export const hasNumber: ValueContainer<number> = { value: 10 }
// export const hasString: ValueContainer<string> = { value: 20 } // Error string型 でない

// export function toPayloadObject<T>(props: T) {
//   return { payload: props }
// }
// export const hasAmount = toPayloadObject({ amount: 10 })

// export const user = { name: 'Taro', age: 30 }
// export const hasUser = toPayloadObject({ ...user })
