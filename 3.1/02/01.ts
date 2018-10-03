export let asString = 'string'
export let asNumber = 0
export type PrimitiveUnion = typeof asString | typeof asNumber

export const foo: PrimitiveUnion = 'foo'
export const bar: PrimitiveUnion = 1
// export const bas: PrimitiveUnion = false // Error

export function getSomething() {
  return { foo: 'foo', bar: 1, baz: false }
}
export const something = getSomething()
export const target: typeof something = {
  foo: 'FOO', bar: 0, baz: true
}
