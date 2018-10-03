import { isPrimitive } from '../03/01'

export type KeyMap = {[k: string]: any}
export type DeepStringify<T> = {
  [P in keyof T]: T[P] extends isPrimitive<T[P]> ? string : DeepStringify<T[P]>
}

export function deepStringify<T extends KeyMap>(srcMap: T) {
  function proc(src: KeyMap) {
    Object.keys(src).map(i => {
      if (src[i] === null || src[i] === undefined) {
        src[i] = ''
        return
      }
      switch (typeof src[i]) {
        case 'object':
          proc(src[i])
          break
        case 'number' :
          src[i] = String(src[i])
          break
        case 'boolean' :
          src[i] = src[i] ? 'true' : 'false'
          break
      }
    })
    return src
  }
  const clone = JSON.parse(JSON.stringify(srcMap))
  // Generics と Assertion によるダウンキャスト
  return proc(clone) as DeepStringify<T>
}
