export type Foo = { foo: string, value: 'foo' }
export type Bar = { bar: string, value: 'bar' }
export function hasFoo(props: any): props is Foo {
  return props.value === 'foo'
}
export function hasBar(props: any): props is Bar {
  return props.value === 'bar'
}

export function fooBarBaz(props: any) {
  if (hasFoo(props)) {
    // Foo型に絞りこまれ、StringLiteralTypes の 'foo' が戻り型
    return props.value
  }
  if (hasBar(props)) {
    // Bar型に絞りこまれ、StringLiteralTypes の 'bar' が戻り型
    return props.value
  }
  return 'baz'
}
