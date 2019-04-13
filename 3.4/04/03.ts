export type R<T> = T extends (...args: any[]) => infer I ? I : never
export type FunctionsMap = {[k: string]: Function}
export type A1isEqR<T> = (a1: R<T>, ...arg: any[]) => R<T>
export type A1isEqRMap<T> = {[K in keyof T]: A1isEqR<T[K]>}
export type ExpectedInput<T> = A1isEqRMap<T> & FunctionsMap
export function fromImmutableMutationsMap<T extends ExpectedInput<T>>(arg: T) {
  // do something
}

export interface State {
  name: string
  count: number
}

export const immutableMutationsMap = {
  setCount(state: State, payload: { amount: number }) {
    return { ...state, count: payload.amount }
  },
  setName(state: State, payload: { value: string }) {
    return { ...state, name: payload.value }
  },
  mutableSetName(state: State, payload: { value: string }) {
    return { name: payload.value }
  } // Error: 第1引数と戻り型に互換性がない
}
// export const createdModule = fromImmutableMutationsMap(immutableMutationsMap)
