function val<Type>(value: Type): string {
  return JSON.stringify(value)
}
function set<T, V>(ref: T, prop: string, value: V): void {
  // if (ref.current) {
  //   ref.current[prop] = value
  // }
}

export default {
  val,
  set,
}
