"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function val(value) {
    return JSON.stringify(value);
}
function set(ref, prop, value) {
    // if (ref.current) {
    //   ref.current[prop] = value
    // }
}
exports.default = {
    val,
    set,
};
