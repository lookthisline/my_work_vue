"use strict";
exports.__esModule = true;
// vue 3 router <https://github.com/vuejs/vue-router-next>
var vue_router_1 = require("vue-router");
var cache_1 = require("@/utils/cache");
var routes = [
    {
        path: '/',
        name: 'index',
        component: function () { return Promise.resolve().then(function () { return require('@/views/Index.vue'); }); },
        meta: {
            title: '首页'
        }
    },
    {
        path: '/404',
        name: '404',
        component: function () { return Promise.resolve().then(function () { return require('@/views/404.vue'); }); },
        meta: {
            title: 'Page Not Found'
        },
        props: function (route) { return ({
            errorLink: route.params.catchAll
        }); }
    },
    {
        path: '/sign_in',
        component: function () { return Promise.resolve().then(function () { return require('@/views/SignIn.vue'); }); },
        meta: {
            title: '登录'
        }
    },
    {
        path: '/sign_up',
        name: 'sign_up',
        component: function () { return Promise.resolve().then(function () { return require('@/views/SignUp.vue'); }); },
        meta: {
            title: '注册'
        }
    },
    {
        path: '/profile',
        component: function () { return Promise.resolve().then(function () { return require('@/views/Profile.vue'); }); },
        meta: {
            title: '个人中心',
            requireAuth: true
        }
    },
    {
        path: '/user_management/modify',
        name: 'modify',
        component: function () { return Promise.resolve().then(function () { return require('@/components/profile/user_management/modify.vue'); }); },
        meta: {
            title: '修改用户信息',
            requireAuth: true
        },
        props: function (route) { return ({
            id: route.params.id
        }); }
    },
    {
        path: '/user_management/details',
        name: 'details',
        component: function () { return Promise.resolve().then(function () { return require('@/components/profile/user_management/details.vue'); }); },
        meta: {
            title: '用户信息详情',
            requireAuth: true
        },
        props: function (route) { return ({
            id: route.params.id
        }); }
    },
    {
        path: '/:catchAll(.*)',
        name: 'Error Request',
        redirect: {
            name: '404'
        }
    }
];
var router = vue_router_1.createRouter({
    // 使用 history 路由
    history: vue_router_1.createWebHistory(process.env.BASE_URL),
    // 使用 hash 路由
    // history: createWebHashHistory(process.env.BASE_URL),
    routes: routes
});
// 全局路由守卫，前置钩子
router.beforeEach(function (to, from, next) {
    // 设置页面标题
    if (typeof to.meta.title !== 'undefined') {
        document.title = to.meta.title;
    }
    else {
        document.title = 'work';
    }
    // 用户登录判断
    if (to.meta.requireAuth) {
        // 判断是否登录
        if (!(cache_1.cache.get("token") && cache_1.cache.get("user"))) {
            // 跳转至登录页
            next({
                path: '/sign_in',
                query: { redirect: to.fullPath }
            });
        }
    }
    next();
});
// 导出路由实例
exports["default"] = router;
