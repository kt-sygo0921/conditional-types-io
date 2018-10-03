import {
  KeyMap,
  FunctionsMap,
  CreateActionsReturn,
  Actions,
  ActionCreators,
  ActionTypes
} from './14'

// function createActions(src) {
//   let types = {}
//   let creators = {}
//   Object.keys(src).map(key => {
//     // ActionType の生成
//     types[key] = key
//     // ActionCreator の生成
//     // リソース関数を内部実行することで処理を委譲する
//     creators[key] = (...args) =>
//       ({ type: key, payload: src[key](...args) })
//   })
//   return { types, creators }
// }

export function createActions<T extends FunctionsMap>(src: T): CreateActionsReturn<T> {
  let types: KeyMap = {}
  let creators: KeyMap = {}
  Object.keys(src).map(key => {
    types[key] = key
    creators[key] = (...args: any[]) =>
      ({ type: key, payload: src[key](...args) })
  })
  return {
    actions: {} as Actions<T>,
    creators: creators as ActionCreators<T>,
    types: types as ActionTypes<T>
  }
}
