// function createFunctionsMap1<T>(args: T): {[k: string]: Function} {
//   // インデックスシグネチャの指定が無い
//   const map = {}
//   // インデックスシグネチャの指定が無いためコンパイルエラーとなる
//   map['fn'] = () => 'hello'
//   return map
// }

// function createFunctionsMap2<T>(args: T): {[k: string]: Function} {
//   // インデックスシグネチャ [k: string] の指定がある
//   const map: {[k: string]: any} = {}
//   // インデックスシグネチャの指定があるためコンパイルエラーとならない
//   map['fn'] = () => 'hello'
//   // プロパティ型 any を満たしているためコンパイルエラーとならない
//   map['prop'] = 'value'
//   // 戻り型Annotation と互換性があるためコンパイルエラーとならない
//   return map
// }

// function createFunctionsMap3<T>(args: T): {[k: string]: Function} {
//   // インデックスシグネチャ [k: string] の指定がある
//   const map: {[k: string]: Function} = {}
//   // インデックスシグネチャの指定があるためコンパイルエラーとならない
//   map['fn'] = () => 'hello'
//   // プロパティ型 Function を満たしていないためコンパイルエラーとなる
//   map['prop'] = 'value'
//   return map
// }
