import immer from 'immer'
import { KeyMap, MutableMutations, ImmutableMutations } from './07'

export function convertImmutable<M extends KeyMap & MutableMutations<M>>(
  mutableMutations: M
): ImmutableMutations<M> {
  const immutableMutations: KeyMap = {}
  Object.keys(mutableMutations).forEach(key => {
    immutableMutations[key] = <S, P>(state: S, payload?: P) =>
      immer(state, _state => {
        mutableMutations[key](_state, payload)
      })
  })
  return immutableMutations as ImmutableMutations<M>
}
