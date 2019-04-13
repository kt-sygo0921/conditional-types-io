export type CounterActions =  {
  type: "INCREMENT"
  payload: number
} | {
  type: "DECREMENT"
  payload: number
} | {
  type: "SET_COUNT"
  payload: { amount: number }
}

export function reducer(state = { count: 0 }, action: CounterActions) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload }
    case 'DECREMENT':
      return { ...state, count: state.count + action.payload }
    case 'SET_COUNT':
      return  { ...state, count: action.payload.amount }
  }
}
