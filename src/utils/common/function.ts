// 公共方法

// 判断变量是否已设置并且非null; (0，''，""，``，false，null，undefined)
export const isset = (val: any): boolean => {
  return Boolean(val)
}

// 判断变量是否为数值型数据
export const is_number = (val: any): boolean => {
  return (typeof (val) === "number") && (val !== Infinity) && !isNaN(val)
}

// 判断数组中是否存在某个值
export const in_array = (val: any, arr: Array<any>): boolean => {
  return arr.indexOf(val) != -1;
}

// 判断变量是否为对象
export const is_object = (val: any): boolean => {
  return Object.prototype.toString.call(val) === '[object Object]';
}

// 判断变量是否为数组
// export const is_array = (val: any): boolean => {
//   return Array.isArray(val);
//   return val instanceof Array && !isNaN(val.length);
//   return Object.prototype.toString.call(val) === '[object Array]';
// }