# お詫びと訂正

「ConditionalTypes I/O - TypeScript3.1 推論型の活用と合成 -」物理本のサンプルコードにおいて、
次の誤りがございました。お詫び申し上げ、ここに訂正いたします。

【第3章】ShallowNullable
```diff
- type Nullable<T> = {[K in keyof T]?: T | null}
- type NullableWrapUser = Partial<User>
+ type Nullable<T> = {[K in keyof T]?: T[K] | null}
+ type NullableWrapUser = Nullable<User>
```

【第3章】ShallowNonNullable
```diff
- type NonNullable<T> = {[K in keyof T]-?: Diff<T, null | undefined> }
+ type NonNullable<T> = {[K in keyof T]-?: Diff<T[K], null | undefined> }
```

【第3章】2.ChildNode の共通プロパティを UnionTypes で作成
```diff
- type ChildUN<T> = Unwrap<UnionGuard<typeof json>>
+ type ChildUN = Unwrap<UnionGuard<typeof json>>
```

【第3章】3.ChildNode の全てのプロパティを IntersectionTypes で作成
```diff
- type ChildUN<T> = Unwrap<UnionGuard<typeof json>>
+ type ChildUN = Unwrap<UnionGuard<typeof json>>
```
