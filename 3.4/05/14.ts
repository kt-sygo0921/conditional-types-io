export interface CreateActionsReturn<T> {
  readonly actions: Actions<T>
  readonly creators: ActionCreators<T>
  readonly types: ActionTypes<T>
}

export type KeyMap = {[K: string]: any}
export type FunctionsMap = {[k: string]: Function}

export type MapToUnion<T> = T extends {[k: string]: infer I} ? I : never
export type Actions<T> = MapToUnion<{[K in keyof T]: Action<T[K], K>}>
export type ActionCreators<T> = {[K in keyof T]: ActionCreator<T[K], K> }
export type ActionTypes<T> = {[K in keyof T]: K }

export type R<T> = T extends (...args: any[]) => infer I ? I : never
export type AA<T> = T extends (...arg: infer I) => any ? I : never
export type Action<T, K> = { type: K, payload: R<T> }
export type ActionCreator<T, K> = (...arg: AA<T>) => { type: K, payload: R<T> }
