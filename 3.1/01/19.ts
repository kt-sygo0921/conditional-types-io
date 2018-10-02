export function merge<T, U>(inputA: T, inputB: U) {
  return Object.assign({}, inputA, inputB)
}
export const merged = merge({ foo: 'foo' }, { bar: 'bar' })


export interface FooBarBaz {
  foo: string
  bar: number
  baz: boolean
}
export function getType<T extends FooBarBaz, U extends keyof T>(input: T, key: U) {
  return input[key]
}
export const fooBarBaz = { foo: '0', bar: 1, baz: false }
export const foo = getType(fooBarBaz, 'foo')
export const bar = getType(fooBarBaz, 'bar')
export const baz = getType(fooBarBaz, 'baz')
