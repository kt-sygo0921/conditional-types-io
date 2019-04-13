export const MyObject = {
  name: 'my name',
  getComputedPointLabel(
    options: { point: number, unit: string },
    compute = (arg: number) => arg
  ) {
    return `${compute(options.point)}${options.unit}`
  }
}


export type A1<T> = T extends (a1: infer I) => any ? I : never
export type A2<T> = T extends (a1: any, a2: infer I) => any ? I : never
export type A3<T> = T extends (a1: any, a2: any, a3: infer I) => any ? I : never
export type TargetFunction = typeof MyObject.getComputedPointLabel
export type Argument1 = A1<TargetFunction>
export type Argument2 = A2<TargetFunction>
export type Argument3 = A3<TargetFunction>

// export type Argument1 = A1<typeof MyObject.name>
