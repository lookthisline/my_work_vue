"use strict";
exports.__esModule = true;
exports.cache = void 0;
// https://developer.mozilla.org/zh-CN/docs/Web/API/Storage
var Cache = /** @class */ (function () {
    function Cache() {
        this.get = function (key) {
            var result = localStorage.getItem(key) ? localStorage.getItem(key) : false;
            if (!result) {
                return result;
            }
            try {
                // 尝试把所有取出的值都当 json 字符串转换
                JSON.parse(result);
            }
            catch (e) {
                return result;
            }
            return JSON.parse(result);
        };
        this.set = function (key, value) {
            if (value instanceof Array || value instanceof Object) {
                return localStorage.setItem(key, JSON.stringify(value));
            }
            return localStorage.setItem(key, value);
        };
        this.del = function (key) { localStorage.removeItem(key); };
        this.clear = function () { localStorage.clear(); };
    }
    return Cache;
}());
exports.cache = new Cache();
exports["default"] = {
    install: function (Vue) {
        Vue.config.globalProperties.$cache = exports.cache;
    }
};
