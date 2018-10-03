export const MyObject = {
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  },
  pointLabel(unit: string) {
    return `${this.count}${unit}`
  },
  computedPoint(compute = (count: number): number => count) {
    return compute(this.count)
  },
  getPointLabel() {
    return (unit = '') => {
      return this.pointLabel(unit)
    }
  }
}
