// libの定義にある通り、引数4つ以上の `Object.assign` は `any` が戻り型となる。
https://github.com/Microsoft/TypeScript/blob/master/lib/lib.es2015.core.d.ts#L280-L313


const ONE = { type: 'ONE' as 'ONE' };
const TWO = { type: 'TWO' as 'TWO' };
const THREE = { type: 'THREE' as 'THREE' };
const FOUR = { type: 'FOUR' as 'FOUR' };
const FIVE = { type: 'FIVE' as 'FIVE' };
const SIX = { type: 'SIX' as 'SIX' };

const merged1 = Object.assign({}, ONE, TWO, THREE);
const merged2 = Object.assign({}, ONE, TWO, THREE, FOUR, FIVE, SIX);

/** 【推論結果】 **/
// const merged1: { type: 'ONE' } & { type: 'TWO' } & { type: 'THREE' }
// const merged2:　any

