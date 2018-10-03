export type R<T> = T extends (...rest: any[]) => infer I ? I : never
export type A1<T> = T extends (a1: infer I, ...rest: any[]) => any ? I : never
export type A2<T> = T extends (a1: any, a2: infer I, ...rest: any[]) => any ? I : never
export type KeyMap = { [K: string]: any }

// 入力関数の戻り型が void の関数に制限
export type MMT<T> = R<T> extends void ? (state: A1<T>) => void : never
export type MMTPL<T> = R<T> extends void ? (state: A1<T>, payload: A2<T>) => void : never
// 受け取れ関数の型を指定
export type MutableMutation<T> = MMT<T> | MMTPL<T>
export type MutableMutations<T> = {readonly [K in keyof T]: MutableMutation<T[K]>}

// 入力関数で得られる型キャプチャを、出力関数の第1引数と戻り型にマッピング
export type IMT<T> = (state: A1<T>) => A1<T>
export type IMTPL<T> = (state: A1<T>, payload: A2<T>) => A1<T>
export type ImmutableMutation<T> = T extends MMT<T> ? IMT<T> :
                            T extends MMTPL<T> ? IMTPL<T> :
                            never
export type ImmutableMutations<T> = {readonly [K in keyof T]: ImmutableMutation<T[K]>}
