import { MyObject } from './13'

export type A1T<T> = T extends (...arg: [infer I]) => any ? I : never
export type A2T<T> = T extends (...arg: [any, infer I]) => any ? I : never
export type A3T<T> = T extends (...arg: [any, any, infer I]) => any ? I : never
export type AA<T> = T extends (...arg: infer I) => any ? I : never
export type AAT<T> = T extends (...arg: [infer I, infer U]) => any ? [I, U] : never
export type TargetFunction = typeof MyObject.getComputedPointLabel
export type Argument1 = A1T<TargetFunction>
export type Argument2 = A2T<TargetFunction>
export type Argument3 = A3T<TargetFunction>
export type AllArguments = AA<TargetFunction>
export type AllArgumentsTuple = AAT<TargetFunction>
