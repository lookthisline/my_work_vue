"use strict";
exports.__esModule = true;
exports.instance = void 0;
var store_1 = require("@/store");
var axios_1 = require("axios");
// 从 VueX 获取配置
var axiosEnv = store_1["default"].getters.getAxiosEnv(process.env.NODE_ENV);
// 错误方法
var errorFunc = function (msg) { console.error(msg); };
// axios 实例
exports.instance = axios_1["default"].create(axiosEnv);
// 定义 axios 请求（request）拦截器
exports.instance.interceptors.request.use(function (config) {
    // 设置每次请求都携带 token
    // config.headers.token = ''
    // config.headers.Authorization = `Basic ${new Buffer(token).toString('base64')}`
    // config.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    //   'token': localStorage.getItem('token')
    // }
    // 在 get 请求前拼接参数
    if (config.method === 'get') {
        config.transformRequest = [function (data) {
                if (!data) {
                    return;
                }
                var params = '';
                for (var k in data) {
                    if (data.hasOwnProperty(k) === true) {
                        params += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
                    }
                }
                return params;
            }];
    }
    // 在 post 请求前对传参进行格式转换
    if (config.method === 'post') {
        config.transformRequest = [function (data) {
                if (!data) {
                    return;
                }
                var formData = new FormData();
                Object.keys(data).forEach(function (key) {
                    formData.append(key, data[key]);
                });
                return formData;
            }];
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
// 定义 axios 响应（response）拦截器
exports.instance.interceptors.response.use(function (response) {
    // 定义获取到数据响应时如何处理
    if (!response.data.status) {
        // 后端返回错误信息
        return Promise.reject(response.data);
    }
    return response.data;
}, function (error) {
    // 服务器未启动，无法得到任何响应
    if (error.response === undefined) {
        // TODO: 测试errorFunc是否有效
        errorFunc(error.message);
        return Promise.reject(error);
    }
    var http_code = error.response.status;
    errorFunc('http response code: ' + http_code);
    return Promise.reject(error);
});
exports["default"] = {
    instance: exports.instance,
    install: function (Vue) {
        Vue.config.globalProperties.$request = exports.instance;
    }
};
