import { createActions } from './13'

const srcMap = {
  INCREMENT: () => 1,
  DECREMENT: () => -1,
  SET_COUNT: ({ amount }: { amount: number }) => ({ amount })
}
const CounterAC = createActions(srcMap)


// const creatorResult1 = CounterAC.creators.INCREMENT()
// const creatorResult2 = CounterAC.creators.DECREMENT()
// const creatorResult3 = CounterAC.creators.SET_COUNT({ amount: 1 })
// const typeResult1 = CounterAC.types.INCREMENT
// const typeResult2 = CounterAC.types.DECREMENT
// const typeResult3 = CounterAC.types.SET_COUNT

// interface State {
//   count: number
// }
// type Action = typeof CounterAC['actions']
// const initialState: State = { count: 0 }
// function reducer(state = initialState, action: Action): State {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 }
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 }
//     case 'SET_COUNT':
//       return { ...state, count: action.payload.amount }
//   }
// }
