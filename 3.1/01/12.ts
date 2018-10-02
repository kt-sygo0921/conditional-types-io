export const immutableValue: number | string | boolean = 'value'
export let mutableValue1: number | string | boolean = 'value'
export let mutableValue2: number | string | boolean
mutableValue2 = 'value'

export function nullableToString(props: string | null): string {
  if (props === null) {
    // null型に絞りこまれる
    return ''
  }
  // string型に絞りこまれる
  return props
} 
export function optionalNullableToString(props?: string | null): string {
  if (props === null || props === undefined) {
    // null | undefined型に絞りこまれる
    return ''
  }
  // string型に絞りこまれる
  return props
} 
export function numericToString(props: string | number): string {
  if (typeof props === 'number') {
    // number型に絞りこまれる
    return String(props)
  }
  // string型に絞りこまれる
  return props
} 
