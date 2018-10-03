import { ChildUN, ChildITS } from './11'

export type PickedChildUN = Pick<ChildUN, keyof ChildUN>
export type PickedChildITS = Pick<ChildITS, keyof ChildITS>
// OptionalKeys を 「組み込み UtilityTypes」 の Exclude で抽出
export type OptionalKeys = Exclude<keyof PickedChildITS, keyof PickedChildUN>
// OptionalMap を 「組み込み UtilityTypes」 の Pick で作成
export type OptionalMap = Pick<PickedChildITS, OptionalKeys>
// 「組み込み UtilityTypes」 の Partial で OptionalWrap する
export type WrappedOptionalMap = Partial<OptionalMap>
// RequiredKeys を 「組み込み UtilityTypes」 の Exclude で抽出
// このとき、UnionGuard であたえた不要な _K_ プロパティを除く
export type RequiredKeys = Exclude<keyof PickedChildITS, OptionalKeys | '_K_'>
// RequiredMap を 「組み込み UtilityTypes」 の Pick で作成
export type RequiredMap = Pick<ChildITS, RequiredKeys>
// RequiredMap と OptionalMap を結合する
export type OptionalMergedMap = RequiredMap & WrappedOptionalMap
// Pick で 新しい型定義とする
export type OptionalMerge = Pick<OptionalMergedMap, keyof OptionalMergedMap>
