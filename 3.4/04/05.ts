// export function getStringValue1(): string {
//   // 0 と string には互換性が無いためコンパイルエラー
//   return 0 as string
// }

export function getStringValue2(): string {
  // 型解釈上、互換性があるためコンパイルエラーとならない
  return {} as string
}

export function getStringValue3(): string {
  // 型安全だが、柔軟性がない
  const map: { prop: string } = { prop: 'value' }
  return map.prop
}

export function getStringValue4(): string {
  // やや型安全で、柔軟性がある
  const n: {[k: string]: string} = { prop: 'value' }
  // プロパティ存在有無についてはチェックが漏れているため、タイポに気づかない
  return n.props
  // 実行時エラーとなる。この様なミスを防ぐためにテスト担保が必要
}
