"use strict";
// 公共方法
exports.__esModule = true;
exports.is_object = exports.in_array = exports.is_number = exports.isset = void 0;
// 判断变量是否已设置并且非null; (0，''，""，``，false，null，undefined)
exports.isset = function (val) {
    return Boolean(val);
};
// 判断变量是否为数值型数据
exports.is_number = function (val) {
    return (typeof (val) === "number") && (val !== Infinity) && !isNaN(val);
};
// 判断数组中是否存在某个值
exports.in_array = function (val, arr) {
    return arr.indexOf(val) != -1;
};
// 判断变量是否为对象
exports.is_object = function (val) {
    return Object.prototype.toString.call(val) === '[object Object]';
};
// 判断变量是否为数组
// export const is_array = (val: any): boolean => {
//   return Array.isArray(val);
//   return val instanceof Array && !isNaN(val.length);
//   return Object.prototype.toString.call(val) === '[object Array]';
// }
