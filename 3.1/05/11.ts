import { CounterActions } from './09'
import { types1 as types } from './10'

export const creators1 = {
  [types.INCREMENT]: (): CounterActions => {
    return { type: types.INCREMENT, payload: 1 }
  },
  [types.DECREMENT]: (): CounterActions => {
    return { type: types.DECREMENT, payload: -1 }
  },
  [types.SET_COUNT]: (payload: { amount: number }): CounterActions => {
    return { type: types.SET_COUNT, payload }
  }
}

export const creators2 = {
  INCREMENT (): CounterActions {
    return { type: 'INCREMENT', payload: 1 }
  },
  DECREMENT (): CounterActions {
    return { type: 'DECREMENT', payload: -1 }
  },
  SET_COUNT (payload: { amount: number }): CounterActions {
    return { type: 'SET_COUNT', payload }
  }
}

export const srcMap = {
  INCREMENT: () => 1,
  DECREMENT: () => -1,
  SET_COUNT: ({ amount }: { amount: number }) => ({ amount })
}
