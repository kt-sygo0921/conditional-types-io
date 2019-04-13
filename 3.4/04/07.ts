// function createFunctionsMap5<T>(args: T): { fn: () => string } {
//   const map: {[k: string]: Function} = {}
//   map['fn'] = () => 'hello'
//   // {[k: string]: Function} と { fn: () => string } に互換性がないためコンパイルエラー
//   return map
// }

// function createFunctionsMap6<T>(args: T): { fn: () => string } {
//   const map: {[k: string]: Function} = {}
//   // 明示的なダウンキャストを行なっているためコンパイルエラーとならないが、
//   // プロパティ存在有無についてはチェックが漏れている。
//   return map as { fn: () => string }
//   // fn関数は存在せず、実行時エラーが発生する。テストによる担保が必要。
// }

// function createFunctionsMap7<T>(args: T): { fn: () => string } {
//   const map: {[k: string]: Function} = {}
//   // 明示的なダウンキャストを行なっているためコンパイルエラーとならないが、
//   // 戻り型が事実と異なるダウンキャストとなってしまっている。
//   map['fn'] = () => true
//   return map as { fn: () => string }
//   // 戻り型が異なることによるエンバグ。テストによる担保が必要。
// }

// function createFunctionsMap8<T>(args: T): { fn: () => string } {
//   const map: {[k: string]: () => string} = {}
//   // 戻り型が詳細に指定されているためコンパイルエラーとなるが、柔軟性にかける。
//   // Generics などで指定が可能であれば積極的に利用する。
//   map['fn'] = () => true
//   return map as { fn: () => string }
// }
