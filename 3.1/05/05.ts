export interface State {
  count: number
  name: string
}

export const mutableMutations = {
  increment(state: State): void {
    state.count++
  },
  decrement(state: State): void {
    state.count--
  },
  setCount(state: State, count: number): void {
    state.count = count
  },
  setName(state: State, value: string): void {
    state.name = value
  }
}
