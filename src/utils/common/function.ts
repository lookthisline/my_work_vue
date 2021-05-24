// 公共方法

// 判断变量是否已设置并且非null; (0，''，""，``，false，null，undefined)
export const isSet = <T>(val: T): boolean => {
  return Boolean(val);
};

// 判断变量是否为数值型数据
export const isNumber = <T>(val: T): boolean => {
  return typeof val === 'number' && val !== Infinity && !isNaN(val);
};

// 判断数组中是否存在某个值
export const inArray = <T>(val: T, arr: Array<T>): boolean => {
  return arr.indexOf(val) !== -1;
};

// 判断变量是否为对象
export const isObject = <T>(val: T): boolean => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

export const isString = <T>(str: T): boolean => {
  return typeof str === 'string' && str.constructor == String;
};

// 判断变量是否为数组
// export const isArray = (val: any): boolean => {
//   return Array.isArray(val);
//   return val instanceof Array && !isNaN(val.length);
//   return Object.prototype.toString.call(val) === '[object Array]';
// }
