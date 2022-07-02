declare function val<Type>(value: Type): string;
declare function set<T, V>(ref: T, prop: string, value: V): void;
declare const _default: {
    val: typeof val;
    set: typeof set;
};
export default _default;
