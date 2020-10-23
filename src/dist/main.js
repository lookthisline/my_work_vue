"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
// 入口文件
var App_vue_1 = require("./App.vue");
// 路由组件
var router_1 = require("./router");
// 状态管理组件
var store_1 = require("./store");
// 网络请求组件 axios 封装
var network_1 = require("@/utils/network");
// localStorage 封装
var cache_1 = require("@/utils/cache");
require("normalize.css");
var app = vue_1.createApp(App_vue_1["default"]);
app.use(router_1["default"])
    .use(store_1["default"])
    .use(network_1["default"])
    .use(cache_1["default"])
    .mount('#app');
