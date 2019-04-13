export type R<T> = T extends (...args: any[]) => infer I ? I : never
export type RV<T> = T extends Function ? R<T> extends void ? T : never : never
export type FunctionsMap = {[k: string]: Function}
export type ReturnVoidMap<T> = {[K in keyof T]: T[K] extends RV<T[K]> ? T[K] : never}
export type ExpectedInput<T> = ReturnVoidMap<T> & FunctionsMap
export function fromMmutableMutationsMap<T extends ExpectedInput<T>>(arg: T) {
  // do something
}

export interface State {
  name: string
  count: number
}

export const mutableMutationsMap = {
  setCount(state: State, count: number) {
    state.count = count
  },
  setName(state: State, value: string) {
    state.name = value
  },
  immutableSetName(state: State, payload: { value: string }) {
    return { ...state, name: payload.value }
  } // Error: 戻り型が void ではない
}
// export const createdModule = fromMmutableMutationsMap(mutableMutationsMap)
