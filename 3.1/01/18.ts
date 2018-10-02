// export interface StringValueContainer<T extends string> {
//   value: T
// }
// export const hasNumber: StringValueContainer<number> = { value: 10 } // Error 制約を満たしていない
// export const hasString: StringValueContainer<string> = { value: '20' }


// export interface Input {
//   value: number
//   amount: number
// }
// export function compute<T extends Input>(props: T) {
//   return {
//     value: props.value,
//     amount: props.amount,
//     computed: props.value ** props.amount
//   }
// }
// export const computed = compute({ value: 10, amount: 2 })
