export let numericString = '0'
export function toNumber(str = numericString) {
  return Number(str)
}

export function getSomething() {
  return {
    foo: 'foo',
    bar: 1,
    baz: false
  }
}
export const defaultProps = getSomething()
export function doSomething(props = defaultProps) {
  return {
    foo: props.foo.toUpperCase(),
    bar: props.bar + 1,
    baz: !props.baz
  }
}
