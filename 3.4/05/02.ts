// import * as json from './fruits.json'

// export function deepStringify(srcMap) {
//   function proc(src) {
//     Object.keys(src).map(i => {
//       if (src[i] === null || src[i] === undefined) {
//         src[i] = ''
//         return
//       }
//       switch (typeof src[i]) {
//         case 'object':
//           proc(src[i])
//           break
//         case 'number' :
//           src[i] = String(src[i])
//           break
//         case 'boolean' :
//           src[i] = src[i] ? 'true' : 'false'
//           break
//       }
//     })
//     return src
//   }
//   // 簡易的な DeepClone
//   const clone = JSON.parse(JSON.stringify(srcMap))
//   // 再帰処理関数の呼び出し
//   return proc(clone)
// }

// const result = deepStringify(json)
