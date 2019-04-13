export type FunctionsMap = {[k: string]: Function}
export type ExpectedInput = FunctionsMap
export function fromFunctionsMap<T extends ExpectedInput>(arg: T) {
  // do something
}

export interface State {
  name: string
  count: number
}

export const functionsMap = {
  increment(state: State) {
    state.count++
  },
  decrement(state: State) {
    state.count--
  },
  setCount(state: State, count: number) {
    state.count = count
  },
  setName(state: State, value: string) {
    state.name = value
  },
  value: 10 // Error: 関数ではない
}
// export const createdModule = fromFunctionsMap(functionsMap)
