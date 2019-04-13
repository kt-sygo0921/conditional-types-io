export type RF = (...arg: any[]) => (...arg: any[]) => any
export type FunctionsMap = {[k: string]: Function}
export type ReturnFunctionMap<T> = {[K in keyof T]: RF}
export type ExpectedInput<T> = ReturnFunctionMap<T> & FunctionsMap
export function fromHofMap<T extends ExpectedInput<T>>(arg: T) {
  // do something
}

export interface State {
  name: string
  count: number
}

export const hofMap = {
  setCount(state: State) {
    return (payload: { amount: number }) =>
      ({ ...state, count: payload.amount })
  },
  setName(state: State) {
    return (payload: { value: string }) =>
      ({ ...state, name: payload.value })
  },
  notHof(state: State, payload: { value: string }) {
    return { ...state, name: payload.value }
  } // Error: 戻り型が関数ではない
}
// export const createdModule = fromHofMap(hofMap)
